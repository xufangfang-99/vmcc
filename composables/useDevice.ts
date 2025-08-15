import { ref, onMounted, onUnmounted } from 'vue'
import { defineStore } from 'pinia'

export const useDevice = defineStore('device', () => {
  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)
  const screenWidth = ref(0)
  const screenHeight = ref(0)

  // 断点定义
  const breakpoints = {
    mobile: 768,
    tablet: 1024,
    desktop: 1280,
  }

  const checkDevice = () => {
    screenWidth.value = window.innerWidth
    screenHeight.value = window.innerHeight

    // 移动端检测
    isMobile.value = screenWidth.value < breakpoints.mobile
    // 平板检测
    isTablet.value =
      screenWidth.value >= breakpoints.mobile && screenWidth.value < breakpoints.tablet
    // 桌面端检测
    isDesktop.value = screenWidth.value >= breakpoints.tablet
  }

  let resizeTimer: NodeJS.Timeout | null = null
  const handleResize = () => {
    // 使用防抖处理 resize 事件
    if (resizeTimer) clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => {
      checkDevice()
    }, 100)
  }

  const initDevice = () => {
    if (process.client) {
      checkDevice()
      window.addEventListener('resize', handleResize)
    }
  }

  const cleanup = () => {
    if (process.client) {
      window.removeEventListener('resize', handleResize)
      if (resizeTimer) clearTimeout(resizeTimer)
    }
  }

  // 自动初始化
  if (process.client) {
    onMounted(() => {
      initDevice()
    })

    onUnmounted(() => {
      cleanup()
    })
  }

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth,
    screenHeight,
    breakpoints,
    initDevice,
    cleanup,
  }
})
