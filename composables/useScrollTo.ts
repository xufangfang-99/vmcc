export const useScrollTo = () => {
  // 滚动到指定元素
  const scrollToElement = (elementId: string, offset: number = 80) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // 滚动到指定锚点（支持 hash）
  const scrollToHash = (hash: string, offset: number = 80) => {
    if (hash) {
      // 支持两种格式：#id 或 id
      const elementId = hash.startsWith('#') ? hash.substring(1) : hash

      // 使用 requestAnimationFrame 确保 DOM 更新
      requestAnimationFrame(() => {
        scrollToElement(elementId, offset)
      })
    }
  }

  // 处理路由中的 hash
  const handleRouteHash = (offset: number = 80) => {
    const route = useRoute()

    // 初始加载时处理
    onMounted(() => {
      if (route.hash) {
        // 延迟执行，确保页面完全加载
        setTimeout(() => {
          scrollToHash(route.hash, offset)
        }, 100)
      }
    })

    // 监听路由变化
    watch(
      () => route.hash,
      (newHash) => {
        if (newHash) {
          scrollToHash(newHash, offset)
        }
      }
    )
  }

  return {
    scrollToElement,
    scrollToHash,
    handleRouteHash,
  }
}
