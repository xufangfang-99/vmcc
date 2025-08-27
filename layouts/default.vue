<template>
  <div class="min-h-screen bg-[var(--tm-bg-primary)] transition-colors duration-300 ease">
    <!-- 头部导航 -->
    <header
      :class="[
        'sticky top-0 z-1000 h-auto min-h-60px md:min-h-56px bg-[var(--tm-bg-primary)] border-b border-[var(--tm-bd-primary)] transition-all duration-300 ease',
        isScrolled ? 'header-scrolled' : '',
      ]"
    >
      <div
        class="max-w-1400px h-full mx-auto px-12px sm:px-16px lg:px-20px flex justify-between items-center"
      >
        <div class="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1">
          <MenuIcon
            :menu-items="menuItems"
            @click="handleIconClick"
          />
          <Logo />

          <!-- 仅在非移动端显示 NavMenu -->
          <Responsive :not-mobile="true">
            <div class="flex items-stretch flex-1">
              <!-- 默认导航 - 改为上下布局 -->
              <div
                v-if="navigation.isDefaultNav"
                class="flex flex-col items-start justify-center gap-0.5 md:gap-1 w-full py-6px md:py-8px"
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

        <div class="flex items-center">
          <ThemeSelector />
        </div>
      </div>
    </header>

    <!-- 移动端菜单路径显示 -->
    <Responsive :mobile="true">
      <MobileMenuBreadcrumb />
    </Responsive>

    <!-- 主内容区域 -->
    <main
      class="min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-56px)] bg-[var(--tm-bg-secondary)] transition-colors duration-300 ease"
    >
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

  // 获取导航状态和菜单数据
  const navigation = useNavigation()
  const { menuItems } = useMenuData()
  const { handleMenuClick, handleSubmenuClick, handleIconClick } = useMenuHandler()

  // 监听路由变化并自动更新选中菜单
  const route = useRoute()

  // 根据当前路由自动设置选中菜单
  const updateSelectedMenuFromRoute = () => {
    navigation.updateSelectedPathFromRoute(route.path)
  }

  // 生命周期
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    // 初始化时设置选中菜单
    updateSelectedMenuFromRoute()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  // 监听路由变化
  watch(() => route.path, updateSelectedMenuFromRoute)
</script>

<style>
  /* 滚动时的头部阴影效果 */
  .header-scrolled {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  /* 深色模式下的阴影 */
  .dark .header-scrolled {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }
</style>
