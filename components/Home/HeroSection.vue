<template>
  <!-- 全屏视频背景容器 -->
  <div class="relative w-screen h-screen overflow-hidden">
    <!-- 视频背景 -->
    <video
      ref="bgVideo"
      :src="videoUrl"
      autoplay
      muted
      loop
      playsinline
      class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover -z-2"
      @loadedmetadata="handleVideoLoaded"
    ></video>

    <!-- 视频遮罩层 -->
    <div
      class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 -z-1"
    ></div>

    <!-- 第一屏内容（包含导航） -->
    <div class="relative w-full h-screen flex flex-col">
      <!-- 自定义头部导航 -->
      <header
        class="hero-header absolute top-0 left-0 right-0 z-1000 py-4 sm:py-6 transition-all duration-300"
        :class="headerBackgroundClass"
      >
        <div class="max-w-1400px mx-auto px-5 sm:px-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4 sm:gap-8">
              <!-- 菜单图标 -->
              <MenuIcon
                :menu-items="menuItems"
                @click="handleIconClick"
              />
              <!-- Logo -->
              <Logo />

              <!-- 桌面端导航 -->
              <Responsive :not-mobile="true">
                <nav class="flex-1">
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
            <div class="flex items-center gap-4">
              <ThemeSelector />
            </div>
          </div>
        </div>
      </header>

      <!-- 英雄区内容 - 调整手机端padding-top -->
      <div class="flex-1 flex items-center text-white px-5 sm:pt-32 md:pt-0">
        <div class="max-w-1100px w-full mx-auto">
          <!-- 左侧：文字内容 -->
          <div class="max-w-800px">
            <!-- 主标题 - 响应式显示 -->
            <h1
              class="hero-title font-light leading-tight mb-6 sm:mb-8 tracking-tight opacity-0 animate-fadeInUp animate-delay-200"
            >
              <!-- 手机端：两行显示 -->
              <span class="block sm:inline text-white text-4xl sm:text-4xl lg:text-5xl xl:text-6xl">
                Elite Talent
              </span>
              <span
                class="block sm:inline text-blue-400 pl-0 sm:pl-0 text-5xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium sm:font-normal mt-1 sm:mt-0 sm:ml-4"
              >
                Solutions
              </span>
            </h1>

            <!-- 描述文字 -->
            <p
              class="text-base sm:text-lg text-white lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-12 opacity-90 max-w-540px opacity-0 animate-fadeInUp animate-delay-400"
            >
              We deliver premium executive search, strategic HR outsourcing, talent deployment
              <br class="hidden lg:block" />
              solutions, organizational consulting, and comprehensive cross-border business support
              <br class="hidden lg:block" />
              for forward-thinking enterprises.
            </p>

            <!-- CTA 按钮 -->
            <div
              class="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 lg:mb-16 opacity-0 animate-fadeInUp animate-delay-600"
            >
              <button
                class="cta-button px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full border-none bg-blue-400 text-white shadow-[0_4px_20px_rgba(64,169,255,0.3)] hover:bg-blue-500 hover:transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(64,169,255,0.4)]"
                @click="scrollToServices"
              >
                Explore Our Services
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <NuxtLink
                to="/contact"
                class="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full bg-transparent text-white border-2 border-white/80 hover:bg-white/10 hover:border-white hover:transform hover:-translate-y-0.5"
              >
                Schedule Consultation
              </NuxtLink>
            </div>

            <!-- 统计数据 - 手机端调整 -->
            <div
              class="flex justify-between sm:justify-start sm:gap-12 lg:gap-16 opacity-0 animate-fadeInUp animate-delay-800"
            >
              <div class="stat-item">
                <div
                  class="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-none bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  500+
                </div>
                <div class="text-xs sm:text-sm lg:text-base opacity-80 uppercase tracking-wider">
                  Successful Placements
                </div>
              </div>
              <div class="stat-item">
                <div
                  class="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-none bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  98%
                </div>
                <div class="text-xs sm:text-sm lg:text-base opacity-80 uppercase tracking-wider">
                  Client Satisfaction
                </div>
              </div>
              <div class="stat-item">
                <div
                  class="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-none bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  15+
                </div>
                <div class="text-xs sm:text-sm lg:text-base opacity-80 uppercase tracking-wider">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 滚动提示 - 手机端调整位置 -->
      <div class="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          class="w-6 h-10 sm:w-7.5 sm:h-12.5 border-2 border-white rounded-full relative opacity-60 sm:opacity-80"
        >
          <div
            class="absolute top-1.5 sm:top-2 left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-2 sm:h-2.5 bg-white rounded-full animate-scroll"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  import { useScrollTo } from '~/composables/useScrollTo'
  import { useTheme } from '~/composables/useTheme'

  const navigation = useNavigation()
  const { menuItems } = useMenuData()
  const { handleMenuClick, handleSubmenuClick, handleIconClick } = useMenuHandler()
  const { scrollToElement } = useScrollTo()
  const themeStore = useTheme()

  // 视频 URL - 使用本地视频
  const videoUrl = ref('/video/main.mp4')

  const bgVideo = ref<HTMLVideoElement>()

  // 根据主题计算头部背景样式
  const headerBackgroundClass = computed(() => {
    return themeStore.isDark ? 'hero-header-dark' : 'hero-header-light'
  })

  // 视频加载完成处理
  const handleVideoLoaded = () => {
    console.log('Video loaded successfully')
  }

  // 滚动到服务区域
  const scrollToServices = () => {
    scrollToElement('services-section')
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

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)

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
  /* 浅色主题头部背景 - 优化版本 */
  .hero-header-light {
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.95) 50%,
      rgba(255, 255, 255, 0.85) 60%,
      rgba(255, 255, 255, 0.55) 80%,
      rgba(255, 255, 255, 0.15) 100%
    );
    backdrop-filter: blur(12px) saturate(1.2);
    -webkit-backdrop-filter: blur(12px) saturate(1.2);
    /* 移除硬边框，改用柔和渐变 */
    border-bottom: none;
    box-shadow: 0 1px 20px rgba(255, 255, 255, 0.1);
    position: relative;
  }

  /* 柔和的底部渐变分割线 - 浅色模式 */
  .hero-header-light::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.1) 20%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.1) 80%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }

  /* 深色主题头部背景 - 保持原有效果 */
  .hero-header-dark {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75) 0%,
      rgba(0, 0, 0, 0.45) 40%,
      rgba(0, 0, 0, 0.15) 80%,
      transparent 100%
    );
    backdrop-filter: blur(12px) saturate(1.2);
    -webkit-backdrop-filter: blur(12px) saturate(1.2);
    /* 移除硬边框，改用柔和渐变 */
    border-bottom: none;
    position: relative;
  }

  /* 柔和的底部渐变分割线 - 深色模式 */
  .hero-header-dark::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.1) 80%,
      transparent 100%
    );
  }

  /* 滚动后的头部样式 */
  .hero-header.scrolled {
    @apply fixed py-3 sm:py-4;
    transition: all 0.3s ease;
  }

  .hero-header-light.scrolled {
    background: rgba(255, 255, 255, 0.96);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  }

  .hero-header-light.scrolled::after {
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(0, 0, 0, 0.08) 20%,
      rgba(0, 0, 0, 0.12) 50%,
      rgba(0, 0, 0, 0.08) 80%,
      transparent 100%
    );
  }

  .hero-header-dark.scrolled {
    background: rgba(0, 0, 0, 0.92);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
  }

  .hero-header-dark.scrolled::after {
    background: linear-gradient(
      to right,
      transparent 0%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 0.15) 80%,
      transparent 100%
    );
  }

  /* 浅色主题下的文字颜色 - 优化对比度 */
  .hero-header-light :deep(.logo),
  .hero-header-light :deep(.nav-link) {
    color: #1a1a1a !important;
    opacity: 0.95;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.5);
  }

  .hero-header-light :deep(.menu-icon span) {
    background-color: #1a1a1a !important;
    opacity: 0.9;
  }

  .hero-header-light :deep(.nav-link:hover) {
    color: #000 !important;
    opacity: 1;
  }

  /* 深色主题下的文字颜色（优化） */
  .hero-header-dark :deep(.logo),
  .hero-header-dark :deep(.nav-link) {
    color: #ffffff !important;
    opacity: 0.95;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  .hero-header-dark :deep(.menu-icon span) {
    background-color: #ffffff !important;
    opacity: 0.9;
  }

  .hero-header-dark :deep(.nav-link:hover) {
    color: #ffffff !important;
    opacity: 1;
  }

  /* 主题选择器优化 */
  .hero-header-light :deep(.theme-selector) {
    filter: brightness(0.4) contrast(1.2);
    opacity: 0.8;
  }

  .hero-header-light :deep(.theme-selector:hover) {
    filter: brightness(0.3) contrast(1.3);
    opacity: 1;
  }

  .hero-header-dark :deep(.theme-selector) {
    filter: brightness(1.8) contrast(1.1);
    opacity: 0.9;
  }

  .hero-header-dark :deep(.theme-selector:hover) {
    filter: brightness(2) contrast(1.2);
    opacity: 1;
  }

  /* 下拉菜单优化 - 浅色主题 */
  .hero-header-light :deep(.submenu-wrapper),
  .hero-header-light :deep([class*='dropdown']) {
    background: rgba(255, 255, 255, 0.9) !important;
    backdrop-filter: blur(15px) saturate(1.3) !important;
    -webkit-backdrop-filter: blur(15px) saturate(1.3) !important;
    border: 1px solid rgba(255, 255, 255, 0.3) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
  }

  .hero-header-light :deep(.dropdown-item),
  .hero-header-light :deep([class*='nav-item']) {
    color: #1a1a1a !important;
    background: transparent !important;
  }

  .hero-header-light :deep(.dropdown-item:hover),
  .hero-header-light :deep([class*='nav-item']:hover) {
    background: rgba(255, 255, 255, 0.6) !important;
    color: #000 !important;
  }

  /* 下拉菜单优化 - 深色主题 */
  .hero-header-dark :deep(.submenu-wrapper),
  .hero-header-dark :deep([class*='dropdown']) {
    background: rgba(0, 0, 0, 0.85) !important;
    backdrop-filter: blur(15px) saturate(1.2) !important;
    -webkit-backdrop-filter: blur(15px) saturate(1.2) !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
  }

  .hero-header-dark :deep(.dropdown-item),
  .hero-header-dark :deep([class*='nav-item']) {
    color: #ffffff !important;
    background: transparent !important;
  }

  .hero-header-dark :deep(.dropdown-item:hover),
  .hero-header-dark :deep([class*='nav-item']:hover) {
    background: rgba(255, 255, 255, 0.1) !important;
    color: #ffffff !important;
  }

  /* 动画定义 */
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

  /* 动画类 */
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-delay-200 {
    animation-delay: 0.2s;
  }

  .animate-delay-400 {
    animation-delay: 0.4s;
  }

  .animate-delay-600 {
    animation-delay: 0.6s;
  }

  .animate-delay-800 {
    animation-delay: 0.8s;
  }

  .animate-scroll {
    animation: scroll 2s infinite;
  }

  /* 按钮悬停效果 */
  .cta-button:hover span {
    @apply translate-x-1.25;
  }
</style>
