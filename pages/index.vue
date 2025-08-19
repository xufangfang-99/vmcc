<template>
  <div class="homepage">
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

    <!-- 第二屏：服务展示 -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">我们的优质服务</h2>
          <p class="section-subtitle">旨在提升您组织的人力资本战略的综合人才解决方案</p>
        </div>

        <div class="services-grid">
          <!-- 服务卡片 -->
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card"
          >
            <div class="service-icon">
              <div :class="`icon-${service.icon}`"></div>
            </div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <ul class="service-features">
              <li
                v-for="(feature, index) in service.features"
                :key="index"
              >
                {{ feature }}
              </li>
            </ul>
            <a
              :href="service.link"
              class="service-link"
            >
              了解更多 →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'

  // 设置页面使用首页布局
  definePageMeta({
    layout: 'homepage',
  })

  useHead({
    title: "麦肯锡 - What's your next brilliant move?",
    meta: [
      {
        name: 'description',
        content: '麦肯锡全球管理咨询公司',
      },
    ],
  })

  const navigation = useNavigation()
  const { menuItems, specialMenuConfigs } = useMenuData()

  // 视频 URL
  const videoUrl = ref(
    'https://fastly-signed-us-east-1-prod.brightcovecdn.com/media/v1/pmp4/static/clear/1971571337001/11ff7e54-8d76-43b9-b28d-669872a19741/b1c9795e-2ab0-4708-a7c2-3cbf079c26a1/main.mp4?fastly_token=NjhhNGFhYTVfYjAwNDEwNDFlZjg2NTYwOTQxZjQwMzJiN2I3ZjBmOGRmMjMxYTBlZDQwMjE0ZWQ1YmQzZTE0NmU4NDM2NDQ1N18vL2Zhc3RseS1zaWduZWQtdXMtZWFzdC0xLXByb2QuYnJpZ2h0Y292ZWNkbi5jb20vbWVkaWEvdjEvcG1wNC9zdGF0aWMvY2xlYXIvMTk3MTU3MTMzNzAwMS8xMWZmN2U1NC04ZDc2LTQzYjktYjI4ZC02Njk4NzJhMTk3NDEvYjFjOTc5NWUtMmFiMC00NzA4LWE3YzItM2NiZjA3OWMyNmExL21haW4ubXA0'
  )

  const bgVideo = ref<HTMLVideoElement>()

  // 服务数据
  const services = ref([
    {
      id: 1,
      icon: 'search',
      title: '高管猎头',
      description: '为各行各业的C级职位和高级领导职位提供优质的高管搜索服务。',
      features: ['高管招聘', '董事会', '高级管理层', '专业知识'],
      link: '/services/executive-search',
    },
    {
      id: 2,
      icon: 'package',
      title: '人力资源外包',
      description: '全面的人力资源外包解决方案，简化您的人力资源运营。',
      features: ['薪资管理', '福利管理', '合规支持', '人力资源技术'],
      link: '/services/hr-outsourcing',
    },
    {
      id: 3,
      icon: 'users',
      title: '人才派遣',
      description: '满足动态业务需求的战略人才部署和劳动力管理解决方案。',
      features: ['灵活的人员配置', '项目团队', '专业技能', '快速部署'],
      link: '/services/talent-deployment',
    },
    {
      id: 4,
      icon: 'chart',
      title: '组织咨询',
      description: '组织发展、人才战略优化的专家咨询服务。',
      features: ['组织设计', '人才战略', '变革管理', '文化转型'],
      link: '/services/organizational-consulting',
    },
    {
      id: 5,
      icon: 'globe',
      title: '跨境支持',
      description: '为全球扩张和跨境运营提供无缝的国际业务支持。',
      features: ['全球合规', '国际招聘', '市场进入', '文化适应'],
      link: '/services/cross-border-support',
    },
    {
      id: 6,
      icon: 'strategy',
      title: '战略咨询',
      description: '实现可持续增长的战略劳动力规划和人才管理咨询服务。',
      features: ['劳动力规划', '继任计划', '人才分析', '绩效优化'],
      link: '/services/strategic-consulting',
    },
  ])

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
  /* 重置默认样式 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* 隐藏默认的 layout header */
  .homepage {
    position: relative;
  }

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

  /* 第二屏保持不变 */
  .services-section {
    padding: 100px 0;
    background: var(--tm-bg-secondary);
    transition: background-color 0.3s ease;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: var(--tm-txt-primary);
    transition: color 0.3s ease;
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: var(--tm-txt-secondary);
    max-width: 600px;
    margin: 0 auto;
    transition: color 0.3s ease;
  }

  /* 服务网格 */
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
  }

  .service-card {
    background: var(--tm-bg-primary);
    padding: 40px;
    border-radius: 8px;
    border: 1px solid var(--tm-bd-light);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }

  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.15);
    border-color: var(--tm-bd-primary);
  }

  /* 服务图标 */
  .service-icon {
    width: 80px;
    height: 80px;
    background: var(--tm-pri-0);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    transition: background-color 0.3s ease;
  }

  .service-icon div {
    width: 40px;
    height: 40px;
    background-color: white;
    mask-size: contain;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  /* 深色模式下调整图标颜色 */
  .dark .service-icon div {
    background-color: var(--tm-bg-primary);
  }

  .icon-search {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E");
  }
  .icon-package {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/%3E%3Cpolyline points='3.27 6.96 12 12.01 20.73 6.96'/%3E%3Cline x1='12' y1='22.08' x2='12' y2='12'/%3E%3C/svg%3E");
  }
  .icon-users {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'/%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E");
  }
  .icon-chart {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cline x1='18' y1='20' x2='18' y2='10'/%3E%3Cline x1='12' y1='20' x2='12' y2='4'/%3E%3Cline x1='6' y1='20' x2='6' y2='14'/%3E%3C/svg%3E");
  }
  .icon-globe {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cline x1='2' y1='12' x2='22' y2='12'/%3E%3Cpath d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/%3E%3C/svg%3E");
  }
  .icon-strategy {
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E");
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--tm-txt-primary);
    transition: color 0.3s ease;
  }

  .service-description {
    color: var(--tm-txt-secondary);
    line-height: 1.6;
    margin-bottom: 24px;
    transition: color 0.3s ease;
  }

  .service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
  }

  .service-features li {
    padding: 8px 0;
    color: var(--tm-txt-secondary);
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
  }

  .service-features li::before {
    content: '•';
    color: var(--tm-pri-0);
    font-weight: bold;
    margin-right: 10px;
  }

  .service-link {
    color: var(--tm-pri-0);
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
  }

  .service-link:hover {
    gap: 1rem;
    opacity: 0.8;
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
    .homepage {
      margin-top: 0;
    }

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

    .services-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .service-card {
      padding: 30px;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
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

    .services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
