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
        class="hero-header absolute top-0 left-0 right-0 z-1000 py-6 transition-all duration-300 bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      >
        <div class="max-w-1400px mx-auto px-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-8">
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

      <!-- 英雄区内容 -->
      <div class="flex-1 flex items-center text-white px-5 pt-20 md:pt-0">
        <div class="max-w-1100px w-full mx-auto">
          <!-- 左侧：文字内容 -->
          <div class="max-w-800px">
            <!-- 主标题 - 一行显示 -->
            <h1
              class="hero-title text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-8 tracking-tight opacity-0 animate-fadeInUp animate-delay-200"
            >
              <span class="text-white">精英人才</span>
              <span class="text-blue-400 font-normal ml-2 sm:ml-4">解决方案</span>
            </h1>

            <!-- 描述文字 -->
            <p
              class="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-12 opacity-90 max-w-540px opacity-0 animate-fadeInUp animate-delay-400"
            >
              我们为具有前瞻性思维的企业提供优质的猎头服务、战略人力资源外包、人
              <br class="hidden lg:block" />
              才派遣解决方案、组织咨询以及全面的跨境业务支持。
            </p>

            <!-- CTA 按钮 -->
            <div
              class="flex flex-col sm:flex-row gap-4 mb-12 sm:mb-16 opacity-0 animate-fadeInUp animate-delay-600"
            >
              <button
                class="cta-button px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full border-none bg-blue-400 text-white shadow-[0_4px_20px_rgba(64,169,255,0.3)] hover:bg-blue-500 hover:transform hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(64,169,255,0.4)]"
              >
                了解我们的服务
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button
                class="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-medium cursor-pointer transition-all duration-300 inline-flex items-center justify-center gap-2 rounded-full bg-transparent text-white border-2 border-white/80 hover:bg-white/10 hover:border-white hover:transform hover:-translate-y-0.5"
              >
                安排咨询
              </button>
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
                  成功安置
                </div>
              </div>
              <div class="stat-item">
                <div
                  class="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-none bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  98%
                </div>
                <div class="text-xs sm:text-sm lg:text-base opacity-80 uppercase tracking-wider">
                  客户满意度
                </div>
              </div>
              <div class="stat-item">
                <div
                  class="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-none bg-gradient-to-br from-white to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2"
                >
                  15年+
                </div>
                <div class="text-xs sm:text-sm lg:text-base opacity-80 uppercase tracking-wider">
                  行业经验
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 滚动提示 -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div class="w-7.5 h-12.5 border-2 border-white rounded-6.25 relative opacity-80">
          <div
            class="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2.5 bg-white rounded-0.5 animate-scroll"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // Script 部分保持不变
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'

  const navigation = useNavigation()
  const { menuItems, specialMenuConfigs } = useMenuData()

  // 视频 URL - 使用本地视频
  const videoUrl = ref('/video/main.mp4')

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

    const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]

    if (firstLevelConfig) {
      console.log('场景2触发：', item.name, firstLevelConfig)
      navigation.switchToCustom(
        firstLevelConfig,
        `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
      )
    } else if (!item.hasSubMenu) {
      navigation.switchToDefault()
    }
  }

  const handleSubmenuClick = (parentItem: any, subItem: any) => {
    console.log('Submenu clicked:', parentItem.name, '->', subItem.name)

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
    } else {
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
  /* 只保留必要的自定义样式和动画 */

  /* 滚动后的头部样式 */
  .hero-header.scrolled {
    @apply fixed bg-black/90 backdrop-blur-lg py-4;
  }

  /* 覆盖默认组件样式 */
  :deep(.logo) {
    @apply text-white !important;
  }

  :deep(.menu-icon span) {
    @apply bg-white !important;
  }

  :deep(.primary-nav) {
    @apply bg-transparent;
  }

  :deep(.nav-link) {
    @apply text-white !important opacity-90 hover:opacity-100 !important;
  }

  :deep(.chevron-icon) {
    @apply text-white !important;
  }

  :deep(.submenu-wrapper) {
    @apply mt-5;
  }

  :deep(.theme-selector) {
    filter: brightness(2);
  }

  :deep(.el-button) {
    @apply bg-white/10 !important border-white/30 !important text-white !important;
  }

  :deep(.el-button:hover) {
    @apply bg-white/20 !important border-white/50 !important;
  }

  :deep(.el-dropdown-link) {
    @apply text-white !important;
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

  /* 手机端特殊调整 */
  @media (max-width: 640px) {
    /* 确保内容不会被头部遮挡 */
    .hero-content {
      @apply pt-32;
    }
  }
</style>
