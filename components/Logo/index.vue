<template>
  <NuxtLink
    to="/"
    class="logo"
    @click="handleLogoClick"
  >
    <OptImage
      :src="logoSrc"
      alt="VMMC"
      class="logo-svg w-30"
      @error="handleImageError"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  import { useRoute } from 'nuxt/app'

  const { isDark } = useTheme()
  const { resetToHome } = useMenuHandler()
  const route = useRoute()

  // 根据深浅色模式动态选择 logo
  const logoSrc = computed(() => {
    return isDark.value ? '/images/comm/logo-dark.png' : '/images/comm/logo.png'
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

  const handleLogoClick = () => {
    console.log('Logo被点击，准备重置导航状态')

    // 使用统一的重置函数
    resetToHome()

    // 如果已经在首页，不需要额外处理，NuxtLink会自动处理导航
    console.log('Logo点击处理完成，当前路径:', route.path)
  }
</script>

<style scoped>
  .logo {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: opacity 0.2s ease;
  }

  .logo:hover {
    opacity: 0.8;
  }

  .logo-svg {
    height: auto;
    max-height: 40px;
  }

  /* 确保logo在所有设备上都正确显示 */
  @media (max-width: 768px) {
    .logo-svg {
      max-height: 32px;
    }
  }
</style>
