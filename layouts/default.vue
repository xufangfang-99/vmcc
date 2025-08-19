<template>
  <el-container class="min-h-screen bg-[var(--tm-bg-primary)] transition-colors duration-300">
    <el-header class="border-0 border-b border-solid border-[var(--tm-bd-primary)]">
      <div class="flex justify-between items-center h-full">
        <div class="flex items-center gap-4">
          <MenuIcon
            :menu-items="menuItems"
            @click="handleIconClick"
          />
          <Logo></Logo>
          <!-- 仅在非移动端显示 NavMenu -->
          <Responsive :not-mobile="true">
            <div class="flex items-center">
              <!-- 默认导航 -->
              <NavMenu
                v-if="navigation.isDefaultNav"
                :menu-items="menuItems"
                @menu-click="handleMenuClick"
                @submenu-click="handleSubmenuClick"
              />
              <!-- 自定义导航 -->
              <CustomNavMenu v-else />

              <!-- 显示选中的菜单路径 -->
              <MenuBreadcrumb v-if="navigation.isDefaultNav" />
            </div>
          </Responsive>
        </div>
        <ThemeSelector />
      </div>
    </el-header>

    <!-- 移动端菜单路径显示 -->
    <Responsive :mobile="true">
      <MobileMenuBreadcrumb />
    </Responsive>

    <el-main class="bg-[var(--tm-bg-secondary)] transition-colors duration-300">
      <slot></slot>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'
  import CustomNavMenu from '~/components/CustomNavMenu.vue'
  import NavMenu from '~/components/NavMenu.vue'
  import MenuBreadcrumb from '~/components/MenuBreadcrumb.vue'
  import MobileMenuBreadcrumb from '~/components/MobileMenuBreadcrumb.vue'
  import type { MenuItem, UnifiedMenuItem } from '~/components/NavMenu.types'

  const navigation = useNavigation()
  const { menuItems, specialMenuConfigs } = useMenuData()

  const handleIconClick = () => {
    console.log('menu icon clicked')
    // 这里可以触发全屏菜单的显示
  }

  // 处理菜单点击
  const handleMenuClick = (item: MenuItem) => {
    console.log('Menu clicked:', item.name)

    // 更新选中的一级菜单
    navigation.setSelectedPath({ firstLevel: item.name })

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
    // 如果有子菜单但没有特殊配置，保持默认导航（子菜单会在 NavMenu 组件中展开）
  }

  // 处理子菜单点击
  const handleSubmenuClick = (parentItem: MenuItem, subItem: UnifiedMenuItem) => {
    console.log('Submenu clicked:', parentItem.name, '->', subItem.name)

    // 场景1：如果点击的二级菜单有三级菜单，显示三级菜单导航
    if (subItem.hasSubMenu && subItem.subItems) {
      console.log('场景1触发：显示三级菜单')
      const basePath = `/${parentItem.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`

      // 更新选中路径
      navigation.setSelectedPath({
        firstLevel: parentItem.name,
        secondLevel: subItem.name,
      })

      navigation.switchToCustom(
        subItem.subItems.map((item) => ({
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

        // 更新选中路径
        navigation.setSelectedPath({
          firstLevel: parentItem.name,
          secondLevel: subItem.name,
        })

        navigation.switchToCustom(secondLevelConfig, basePath)
      } else {
        console.log('没有特殊配置，恢复默认导航并显示选中的菜单')
        // 没有特殊配置则恢复默认导航，但保留选中的菜单路径
        navigation.switchToDefaultWithPath(parentItem.name, subItem.name)
      }
    }
  }
</script>

<style scoped>
  /* 添加一些样式以适应新的布局 */
  .el-header {
    height: 60px;
  }
</style>
