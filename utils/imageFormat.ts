export class ImageFormat {
  private static instance: ImageFormat
  private _supportsAvif: boolean | null = null
  private _supportsWebp: boolean | null = null

  private constructor() {
    // 私有构造函数以实现单例模式
  }

  public static getInstance(): ImageFormat {
    if (!ImageFormat.instance) {
      ImageFormat.instance = new ImageFormat()
    }
    return ImageFormat.instance
  }

  private checkWebpSupport(): Promise<boolean> {
    return new Promise((resolve) => {
      const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = webpData
    })
  }

  private checkAvifSupport(): Promise<boolean> {
    return new Promise((resolve) => {
      const avifData =
        'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
      const img = new Image()
      img.onload = () => resolve(true)
      img.onerror = () => resolve(false)
      img.src = avifData
    })
  }

  public async supportsAvif(): Promise<boolean> {
    if (this._supportsAvif === null) {
      this._supportsAvif = await this.checkAvifSupport()
    }
    return this._supportsAvif
  }

  public async supportsWebp(): Promise<boolean> {
    if (this._supportsWebp === null) {
      this._supportsWebp = await this.checkWebpSupport()
    }
    return this._supportsWebp
  }

  public async getOptimalImageUrl(originalUrl: string): Promise<string> {
    // 仅在客户端执行
    if (typeof window === 'undefined') return originalUrl

    const baseUrl = originalUrl.substring(0, originalUrl.lastIndexOf('.'))

    console.log('检查浏览器支持情况...')
    // 检查格式支持
    const avifSupported = await this.supportsAvif()
    const webpSupported = await this.supportsWebp()

    console.log('AVIF support:', avifSupported)
    console.log('WebP support:', webpSupported)

    if (avifSupported) {
      console.log('Using AVIF format')
      return `${baseUrl}.avif`
    } else if (webpSupported) {
      console.log('Using WebP format')
      return `${baseUrl}.webp`
    }

    console.log('Using original format')
    return originalUrl
  }
}

// 辅助函数，用于直接获取优化后的图片URL
export async function getOptimalImageUrl(originalUrl: string): Promise<string> {
  return await ImageFormat.getInstance().getOptimalImageUrl(originalUrl)
}

// 创建支持响应式的composable
export function useImageFormat() {
  const imageFormat = ImageFormat.getInstance()

  return {
    getOptimalImageUrl: imageFormat.getOptimalImageUrl.bind(imageFormat),
    supportsAvif: imageFormat.supportsAvif.bind(imageFormat),
    supportsWebp: imageFormat.supportsWebp.bind(imageFormat),
  }
}
