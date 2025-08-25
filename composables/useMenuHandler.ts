import type { MenuItem, UnifiedMenuItem } from '~/components/NavMenu.types'
import { useNavigation } from './useNavigation'
import { useMenuData } from './useMenuData'

export const useMenuHandler = () => {
  const navigation = useNavigation()
  const { specialMenuConfigs, industriesThirdLevelItems } = useMenuData()
  const route = useRoute()

  // 新增：重置导航到首页状态的函数
  const resetToHome = () => {
    console.log('重置导航到首页状态')

    // 清除所有选中路径
    navigation.clearSelectedPath()

    // 切换回默认导航
    navigation.switchToDefault()

    console.log('导航状态重置完成')
  }

  const handleMenuClick = (item: MenuItem) => {
    console.log('Menu clicked:', item.name, 'link:', item.link)

    // 方案1：通过 link 判断是否是主页（推荐）
    if (item.link === '/') {
      // 重置导航状态
      resetToHome()

      // 如果已经在主页，不需要导航
      if (route.path === '/') {
        return
      }

      return navigateTo('/')
    }

    // 方案2：如果使用了 isHome 标识
    if (item.isHome) {
      resetToHome()
      return navigateTo('/')
    }

    // 如果没有子菜单且有链接，直接导航
    if (!item.hasSubMenu && item.link) {
      // 清除之前的选中状态
      navigation.clearSelectedPath()
      navigation.switchToDefault()
      return navigateTo(item.link)
    }

    // 更新选中的一级菜单
    navigation.setSelectedPath({ firstLevel: item.name })

    // 检查一级菜单是否有特殊配置
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
      const path = `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
      navigateTo(path)
    }
    // 如果有子菜单但没有特殊配置，保持默认导航（子菜单会在 NavMenu 组件中展开）
  }

  const handleSubmenuClick = (parentItem: MenuItem, subItem: UnifiedMenuItem) => {
    console.log('Submenu clicked:', parentItem.name, '->', subItem.name)

    // 更新选中路径
    navigation.setSelectedPath({
      firstLevel: parentItem.name,
      secondLevel: subItem.name,
    })

    // 特殊处理 Industries 的二级菜单 - 显示固定的三级菜单
    if (parentItem.name === 'Industries') {
      console.log('Industries 二级菜单触发：显示固定三级菜单')
      const basePath = `/industries/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`

      // 生成固定的三级菜单结构 - 这些都是最终页面，不需要更多子菜单
      const thirdLevelItems = industriesThirdLevelItems.map((item) => ({
        name: item,
        link: `${basePath}/${item.toLowerCase().replace(/\s+/g, '-')}`,
        hasSubMenu: false,
      }))

      navigation.switchToCustom(thirdLevelItems, basePath)
      return
    }

    // 场景1：如果点击的二级菜单有三级菜单
    if (subItem.hasSubMenu && subItem.subItems) {
      console.log('场景1触发：显示三级菜单')
      const basePath = `/${parentItem.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`

      navigation.switchToCustom(
        subItem.subItems.map((item) => ({
          name: item.name,
          link: item.link || `${basePath}/${item.name.toLowerCase().replace(/\s+/g, '-')}`,
        })),
        basePath
      )
    } else {
      // 场景3：检查二级菜单是否有特殊配置
      const menuKey = `${parentItem.name}-${subItem.name}`
      const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

      if (secondLevelConfig) {
        console.log('场景3触发：', menuKey, secondLevelConfig)
        const basePath = `/${parentItem.name.toLowerCase().replace(/\s+/g, '-')}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`

        navigation.switchToCustom(secondLevelConfig, basePath)
      } else {
        // 没有特殊配置则恢复默认导航，但保留选中的菜单路径
        navigation.switchToDefaultWithPath(parentItem.name, subItem.name)
      }
    }
  }

  const handleIconClick = () => {
    console.log('menu icon clicked')
    // 可以在这里添加全屏菜单的逻辑
  }

  return {
    handleMenuClick,
    handleSubmenuClick,
    handleIconClick,
    resetToHome, // 导出重置函数，供Logo组件使用
  }
}
