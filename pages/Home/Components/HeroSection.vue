<template>
  <!-- 全屏视频背景容器 -->
  <div class="video-container">
    <!-- 视频背景 -->
    <video
      ref="bgVideo"
      :src="videoUrl"
      autoplay
      muted
      loop
      playsinline
      class="bg-video"
      @loadedmetadata="handleVideoLoaded"
    ></video>

    <!-- 视频遮罩层 -->
    <div class="video-overlay"></div>

    <!-- 第一屏内容（包含导航） -->
    <div class="hero-wrapper">
      <!-- 自定义头部导航 -->
      <header class="hero-header">
        <div class="header-container">
          <div class="header-left">
            <!-- 菜单图标 -->
            <MenuIcon
              :menu-items="menuItems"
              @click="handleIconClick"
            />
            <!-- Logo -->
            <Logo />

            <!-- 桌面端导航 -->
            <Responsive :not-mobile="true">
              <nav class="desktop-nav">
                <NavMenu
                  v-if="navigation.isDefaultNav"
                  :menu-items="menuItems"
                  @menu-click="handleMenuClick"
                  @submenu-click="handleSubmenuClick"
                />
                <CustomNavMenu v-else />
              </nav>
            </Responsive>
          </div>

          <!-- 右侧操作 -->
          <div class="header-right">
            <ThemeSelector />
          </div>
        </div>
      </header>

      <!-- 英雄区内容 -->
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="line-1">What's</span>
          <span class="line-2">your next</span>
          <span class="line-3">brilliant</span>
          <span class="line-4">move?</span>
        </h1>
        <div class="hero-cta">
          <button class="cta-button">
            Get started
            <span class="arrow">→</span>
          </button>
        </div>
      </div>

      <!-- 滚动提示 -->
      <div class="scroll-indicator">
        <div class="scroll-icon"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'

  const navigation = useNavigation()
  const { menuItems, specialMenuConfigs } = useMenuData()

  // 视频 URL
  const videoUrl = ref(
    'https://fastly-signed-us-east-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/1971571337001/11ff7e54-8d76-43b9-b28d-669872a19741/b1c9795e-2ab0-4708-a7c2-3cbf079c26a1/main.mp4?fastly_token=NjhhNGFhYTVfYjAwNDEwNDFlZjg2NTYwOTQxZjQwMzJiN2I3ZjBmOGRmMjMxYTBlZDQwMjE0ZWQ1YmQzZTE0NmU4NDM2NDQ1N18vL2Zhc3RseS1zaWduZWQtdXMtZWFzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMTk3MTU3MTMzNzAwMS8xMWZmN2U1NC04ZDc2LTQzYjktYjI4ZC02Njk4NzJhMTk3NDEvYjFjOTc5NWUtMmFiMC00NzA4LWE3YzItM2NiZjA3OWMyNmExL21haW4ubXA0'
  )

  const bgVideo = ref<HTMLVideoElement>()

  // 视频加载完成处理
  const handleVideoLoaded = () => {
    console.log('Video loaded successfully')
  }

  // 监听滚动
  const handleScroll = () => {
    const scrollY = window.scrollY
    const header = document.querySelector('.hero-header') as HTMLElement

    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }
    }
  }

  const handleIconClick = () => {
    console.log('menu icon clicked')
  }

  const handleMenuClick = (item: any) => {
    console.log('Menu clicked:', item.name)

    // 场景2：检查一级菜单是否有特殊配置
    const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]

    if (firstLevelConfig) {
      console.log('场景2触发：', item.name, firstLevelConfig)
      navigation.switchToCustom(
        firstLevelConfig,
        `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
      )
    } else if (!item.hasSubMenu) {
      // 没有子菜单且没有特殊配置，导航到相应页面
      navigation.switchToDefault()
    }
  }

  const handleSubmenuClick = (parentItem: any, subItem: any) => {
    console.log('Submenu clicked:', parentItem.name, '->', subItem.name)

    // 场景1：如果点击的二级菜单有三级菜单，显示三级菜单导航
    if (subItem.hasSubMenu && subItem.subItems) {
      console.log('场景1触发：显示三级菜单')
      const basePath = `/${parentItem.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`

      navigation.setSelectedPath({
        firstLevel: parentItem.name,
        secondLevel: subItem.name,
      })

      navigation.switchToCustom(
        subItem.subItems.map((item: any) => ({
          name: item.name,
          link: item.link || `${basePath}/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
        })),
        basePath
      )
    }
    // 场景3：检查二级菜单是否有特殊配置
    else {
      const menuKey = `${parentItem.name}-${subItem.name}`
      const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

      if (secondLevelConfig) {
        console.log('场景3触发：', menuKey, secondLevelConfig)
        const basePath = `/${parentItem.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`

        navigation.setSelectedPath({
          firstLevel: parentItem.name,
          secondLevel: subItem.name,
        })

        navigation.switchToCustom(secondLevelConfig, basePath)
      } else {
        console.log('没有特殊配置，恢复默认导航并显示选中的菜单')
        navigation.switchToDefaultWithPath(parentItem.name, subItem.name)
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)

    // 确保视频播放
    if (bgVideo.value) {
      bgVideo.value.play().catch((err: Error) => {
        console.error('Video play failed:', err)
      })
    }
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<style scoped>
  /* 视频容器 - 全屏 */
  .video-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  /* 视频背景 */
  .bg-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    object-fit: cover;
    z-index: -2;
  }

  /* 视频遮罩 - 调整透明度确保内容可读 */
  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  /* 英雄区包装器 */
  .hero-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* 自定义头部导航 */
  .hero-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: all 0.3s ease;
    /* 添加渐变背景 */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      transparent 100%
    );
  }

  .hero-header.scrolled {
    position: fixed;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    padding: 1rem 0;
  }

  .header-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  /* 覆盖Logo样式 - 确保在深色背景上显示 */
  .header-left :deep(.logo) {
    color: white !important;
  }

  /* 覆盖菜单图标样式 */
  .header-left :deep(.menu-icon span) {
    background: white !important;
  }

  /* 桌面端导航样式 */
  .desktop-nav {
    flex: 1;
  }

  /* 覆盖默认导航样式 */
  .desktop-nav :deep(.primary-nav) {
    background: transparent;
  }

  .desktop-nav :deep(.nav-link) {
    color: white !important;
    opacity: 0.9;
    transition: opacity 0.3s ease;
  }

  .desktop-nav :deep(.nav-link:hover) {
    opacity: 1;
    color: white !important;
  }

  .desktop-nav :deep(.chevron-icon) {
    color: white !important;
  }

  /* 覆盖子菜单样式 */
  .desktop-nav :deep(.submenu-wrapper) {
    margin-top: 20px; /* 增加间距避免被渐变遮挡 */
  }

  /* 右侧操作 */
  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  /* 覆盖主题选择器样式 - 确保在深色背景上显示 */
  .header-right :deep(.theme-selector) {
    filter: brightness(2);
  }

  .header-right :deep(.el-button) {
    background: rgba(255, 255, 255, 0.1) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    color: white !important;
  }

  .header-right :deep(.el-button:hover) {
    background: rgba(255, 255, 255, 0.2) !important;
    border-color: rgba(255, 255, 255, 0.5) !important;
  }

  .header-right :deep(.el-dropdown-link) {
    color: white !important;
  }

  /* 英雄区内容 */
  .hero-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    padding: 0 20px;
  }

  /* 英雄标题 */
  .hero-title {
    font-size: clamp(3.5rem, 10vw, 8rem);
    font-weight: 300;
    line-height: 1;
    margin-bottom: 3rem;
    letter-spacing: -0.03em;
  }

  .hero-title span {
    display: block;
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }

  .hero-title .line-1 {
    animation-delay: 0.2s;
  }
  .hero-title .line-2 {
    animation-delay: 0.4s;
  }
  .hero-title .line-3 {
    animation-delay: 0.6s;
  }
  .hero-title .line-4 {
    animation-delay: 0.8s;
  }

  /* CTA 按钮 */
  .hero-cta {
    animation: fadeInUp 0.8s ease-out 1s forwards;
    opacity: 0;
  }

  .cta-button {
    background: white;
    color: #000;
    border: none;
    padding: 1.2rem 3rem;
    font-size: 1.125rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
  }

  .cta-button:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .cta-button .arrow {
    transition: transform 0.3s ease;
  }

  .cta-button:hover .arrow {
    transform: translateX(5px);
  }

  /* 滚动提示 */
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
  }

  .scroll-icon {
    width: 30px;
    height: 50px;
    border: 2px solid white;
    border-radius: 25px;
    position: relative;
  }

  .scroll-icon::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 10px;
    background: white;
    border-radius: 2px;
    animation: scroll 2s infinite;
  }

  /* 动画 */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-20px);
    }
    60% {
      transform: translateX(-50%) translateY(-10px);
    }
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
  }

  /* 响应式设计 */
  @media (max-width: 768px) {
    .desktop-nav {
      display: none;
    }

    .hero-header {
      padding: 1rem 0;
    }

    .header-container {
      padding: 0 1rem;
    }

    .hero-title {
      font-size: clamp(2.5rem, 12vw, 5rem);
      margin-bottom: 2rem;
    }

    .cta-button {
      padding: 1rem 2rem;
      font-size: 1rem;
    }
  }

  /* 平板适配 */
  @media (min-width: 769px) and (max-width: 1024px) {
    .desktop-nav {
      gap: 1.5rem;
    }

    .nav-link {
      font-size: 0.9rem;
    }
  }
</style>
