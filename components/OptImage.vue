<template>
  <img
    :src="themedImageUrl"
    v-bind="$attrs"
    @error="handleError"
  />
</template>

<script setup>
  import { computed } from 'vue'
  import { useOptimalImageFormat } from '~/composables/useOptimalImageFormat'
  import { useTheme } from '~/composables/useTheme'

  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    useThemePath: {
      type: Boolean,
      default: false,
    },
  })

  const { getOptimalImageUrl } = useOptimalImageFormat()
  const theme = useTheme()

  // 获取带主题的图片URL
  const getThemedPath = (originalPath) => {
    if (!props.useThemePath) return originalPath

    const pathParts = originalPath.split('/')
    const filename = pathParts.pop()
    const themePath = `/${theme.currentTheme}`

    return pathParts.join('/') + themePath + '/' + filename
  }

  // 使用 computed 属性计算最终的图片URL
  const themedImageUrl = computed(() => {
    const themedPath = getThemedPath(props.src)
    return getOptimalImageUrl(themedPath)
  })

  const handleError = (event) => {
    console.log('Image load error:', event.target.src)
    // 如果是主题路径加载失败，尝试加载默认路径
    if (props.useThemePath && event.target.src !== props.src) {
      event.target.src = getOptimalImageUrl(props.src)
      return
    }

    // 如果是优化格式加载失败，回退到原始格式
    if (event.target.src !== props.src) {
      event.target.src = props.src
    }
  }
</script>
