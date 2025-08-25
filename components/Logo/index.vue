<template>
  <NuxtLink
    to="/"
    class="logo"
  >
    <OptImage
      :src="logoSrc"
      alt="QuantumBlack"
      class="logo-svg w-30"
      @error="handleImageError"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useTheme } from '~/composables/useTheme'

  const { isDark } = useTheme()

  // 根据深浅色模式动态选择 logo
  const logoSrc = computed(() => {
    return isDark ? '/images/comm/logo-dark.png' : '/images/comm/logo.png'
  })

  const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement
    if (!img) return

    console.error('Logo 加载失败:', img.src)

    // 防止事件冒泡，避免影响路由
    event.preventDefault()
    event.stopPropagation()

    // 如果深色模式 logo 加载失败，尝试加载浅色版本
    if (img.src.includes('logo-dark')) {
      console.log('深色 logo 加载失败，切换到浅色版本')
      img.src = '/images/comm/logo.png'
    } else {
      console.log('Logo 完全加载失败，隐藏图片')
      img.style.display = 'none'
    }
  }
</script>
