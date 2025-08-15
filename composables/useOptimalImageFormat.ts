import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { useCookie, useRequestEvent } from 'nuxt/app'

interface ImageSupport {
  avif: boolean
  webp: boolean
}

const COOKIE_NAME = 'image_support'

export function useOptimalImageFormat() {
  const imageSupport: Ref<ImageSupport> = ref({
    avif: false,
    webp: false,
  })

  // 从服务端事件中获取图片格式支持信息
  if (process.server) {
    const event = useRequestEvent()
    if (event?.context?.imageSupport) {
      imageSupport.value = event.context.imageSupport
    }
  }

  // 使用 cookie 选项确保正确的序列化/反序列化
  const imageSupportCookie = useCookie<ImageSupport>(COOKIE_NAME, {
    encode: (value) => JSON.stringify(value),
    decode: (value) => {
      try {
        return typeof value === 'string' ? JSON.parse(value) : value
      } catch {
        return { avif: false, webp: false }
      }
    },
    maxAge: 30 * 24 * 60 * 60, // 30 days
  })

  // 如果 cookie 存在且非服务端，使用 cookie 中的值
  if (!process.server && imageSupportCookie.value) {
    imageSupport.value = imageSupportCookie.value
  }

  // 在客户端检测并更新 cookie
  if (process.client) {
    onMounted(() => {
      // 如果 cookie 不存在，进行检测
      if (!imageSupportCookie.value) {
        detectImageSupport().then((support) => {
          imageSupport.value = support
          imageSupportCookie.value = support
        })
      }
    })
  }

  // 图片格式支持检测
  const detectImageSupport = async (): Promise<ImageSupport> => {
    const support = {
      avif: false,
      webp: false,
    }

    try {
      // 检测 WebP 支持
      support.webp = await testImageFormat(
        'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA=='
      )

      // 检测 AVIF 支持
      support.avif = await testImageFormat(
        'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
      )
    } catch (error) {
      console.error('Error detecting image format support:', error)
    }

    return support
  }

  // 测试单个图片格式
  const testImageFormat = (dataUrl: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = dataUrl
    })
  }

  // 获取文件扩展名的简写代码
  const getExtCode = (ext: string): string => {
    const lowerExt = ext.toLowerCase()
    return lowerExt === 'jpg' || lowerExt === 'jpeg'
      ? 'j'
      : lowerExt === 'png'
        ? 'p'
        : lowerExt === 'gif'
          ? 'g'
          : lowerExt[0]
  }

  const getOptimalImageUrl = (originalUrl: string): string => {
    // 解析原始URL
    const urlParts = originalUrl.split('/')
    const filename = urlParts.pop() || ''
    const ext = filename.split('.').pop() || ''
    const name = filename.substring(0, filename.lastIndexOf('.'))

    // 获取扩展名简码
    const extCode = getExtCode(ext)
    const optimizedName = `${name}_${extCode}`
    urlParts.push(optimizedName)

    // GIF 的处理逻辑
    if (ext.toLowerCase() === 'gif') {
      if (imageSupport.value.avif) {
        return `${urlParts.join('/')}.avif`
      }
      return originalUrl
    }

    // JPG/JPEG/PNG 的处理逻辑
    if (['jpg', 'jpeg', 'png'].includes(ext.toLowerCase())) {
      if (imageSupport.value.webp) {
        return `${urlParts.join('/')}.webp`
      }
      if (imageSupport.value.avif) {
        return `${urlParts.join('/')}.avif`
      }
    }

    return originalUrl
  }

  // 获取缩略图URL
  const getThumbnailUrl = (originalUrl: string): string => {
    const urlParts = originalUrl.split('/')
    const filename = urlParts.pop() || ''
    const ext = filename.split('.').pop() || ''
    const name = filename.substring(0, filename.lastIndexOf('.'))
    const extCode = getExtCode(ext)

    const thumbnailName = `${name}_${extCode}_t`
    urlParts.push(thumbnailName)

    // 使用 WebP 作为缩略图格式，如果支持的话
    return imageSupport.value.webp ? `${urlParts.join('/')}.webp` : `${urlParts.join('/')}.${ext}`
  }

  const getFallbackImageUrl = (url: string): string => {
    const originalUrl = url
    const optimizedUrl = getOptimalImageUrl(url)

    if (optimizedUrl === originalUrl) {
      return originalUrl
    }

    if (process.client) {
      const img = new Image()
      img.onerror = () => {
        if (img.src !== originalUrl) {
          img.src = originalUrl
        }
      }
      img.src = optimizedUrl
    }

    return optimizedUrl
  }

  return {
    imageSupport,
    getOptimalImageUrl,
    getFallbackImageUrl,
    getThumbnailUrl,
  }
}
