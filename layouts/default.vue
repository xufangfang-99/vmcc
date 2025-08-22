<template>
  <div class="app-layout">
    <!-- 头部导航 -->
    <header class="main-header">
      <div class="header-container">
        <div class="header-left">
          <MenuIcon
            :menu-items="menuItems"
            @click="handleIconClick"
          />
          <Logo />

          <!-- 仅在非移动端显示 NavMenu -->
          <Responsive :not-mobile="true">
            <div class="nav-wrapper">
              <!-- 默认导航 - 改为上下布局 -->
              <div
                v-if="navigation.isDefaultNav"
                class="nav-vertical-container"
              >
                <!-- 显示选中的菜单路径 -->
                <MenuBreadcrumb />
                <NavMenu
                  :menu-items="menuItems"
                  :has-vertical-layout="true"
                  @menu-click="handleMenuClick"
                  @submenu-click="handleSubmenuClick"
                />
              </div>
              <!-- 自定义导航 -->
              <CustomNavMenu />
            </div>
          </Responsive>
        </div>

        <div class="header-right">
          <ThemeSelector />
        </div>
      </div>
    </header>

    <!-- 移动端菜单路径显示 -->
    <Responsive :mobile="true">
      <MobileMenuBreadcrumb />
    </Responsive>

    <!-- 主内容区域 -->
    <main class="main-content">
      <slot></slot>
    </main>
  </div>
</template>
<script setup lang="ts">
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  import CustomNavMenu from '~/components/CustomNavMenu.vue'
  import NavMenu from '~/components/NavMenu.vue'
  import MenuBreadcrumb from '~/components/MenuBreadcrumb.vue'
  import MobileMenuBreadcrumb from '~/components/MobileMenuBreadcrumb.vue'

  // 滚动状态
  const isScrolled = ref(false)

  // 处理滚动
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }

  // 生命周期
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const navigation = useNavigation()
  const { menuItems } = useMenuData()
  const { handleMenuClick, handleSubmenuClick, handleIconClick } = useMenuHandler()
</script>

<style scoped>
  .app-layout {
    min-height: 100vh;
    background: var(--tm-bg-primary);
    transition: background-color 0.3s ease;
  }

  /* 头部样式 */
  .main-header {
    position: sticky;
    top: 0;
    z-index: 1000;
    height: auto;
    min-height: 60px;
    background: var(--tm-bg-primary);
    border-bottom: 1px solid var(--tm-bd-primary);
    transition: all 0.3s ease;
  }

  .header-container {
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }

  .nav-wrapper {
    display: flex;
    align-items: stretch;
    flex: 1;
  }

  /* 新增：垂直布局容器 */
  .nav-vertical-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    width: 100%;
    padding: 8px 0;
  }

  .header-right {
    display: flex;
    align-items: center;
  }

  /* 主内容区域 */
  .main-content {
    min-height: calc(100vh - 60px);
    background: var(--tm-bg-secondary);
    transition: background-color 0.3s ease;
  }

  /* 滚动时的头部阴影效果 */
  .main-header.scrolled {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  /* 深色模式下的阴影 */
  .dark .main-header.scrolled {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  /* 响应式设计 */
  @media (max-width: 1024px) {
    .header-container {
      padding: 0 16px;
    }
  }

  @media (max-width: 768px) {
    .main-header {
      min-height: 56px;
    }

    .header-left {
      gap: 0.75rem;
    }

    .main-content {
      min-height: calc(100vh - 56px);
    }

    .nav-vertical-container {
      padding: 6px 0;
      gap: 2px;
    }
  }

  @media (max-width: 640px) {
    .header-container {
      padding: 0 12px;
    }

    .header-left {
      gap: 0.5rem;
    }
  }
</style>
