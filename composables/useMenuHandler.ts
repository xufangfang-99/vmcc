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
    navigation.clearSelectedPath()
    navigation.switchToDefault()
    console.log('导航状态重置完成')
  }

  // 统一的路径生成函数 - 正确处理 & 符号
  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/\s*&\s*/g, '-') // "Oil & Gas" → "oil-gas"
      .replace(/\s+/g, '-') // 处理其他空格
      .replace(/[^a-z0-9-]/g, '') // 移除其他特殊字符
  }

  const handleMenuClick = (item: MenuItem) => {
    console.log('Menu clicked:', item.name, 'link:', item.link)

    if (item.link === '/') {
      resetToHome()
      if (route.path === '/') return
      return navigateTo('/')
    }

    if (item.isHome) {
      resetToHome()
      return navigateTo('/')
    }

    if (!item.hasSubMenu && item.link) {
      navigation.clearSelectedPath()
      navigation.switchToDefault()
      return navigateTo(item.link)
    }

    navigation.setSelectedPath({ firstLevel: item.name })

    const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]

    if (firstLevelConfig) {
      console.log('场景2触发：', item.name, firstLevelConfig)
      navigation.switchToCustom(
        firstLevelConfig,
        `/${generateSlug(item.name)}` // 使用统一的slug生成
      )
    } else if (!item.hasSubMenu) {
      navigation.switchToDefault()
      const path = `/${generateSlug(item.name)}` // 使用统一的slug生成
      navigateTo(path)
    }
  }

  const handleSubmenuClick = (parentItem: MenuItem, subItem: UnifiedMenuItem) => {
    console.log('Submenu clicked:', parentItem.name, '->', subItem.name)

    navigation.setSelectedPath({
      firstLevel: parentItem.name,
      secondLevel: subItem.name,
    })

    if (parentItem.name === 'Industries') {
      console.log('Industries 二级菜单触发：显示固定三级菜单')
      const basePath = `/industries/${generateSlug(subItem.name)}` // 使用统一的slug生成

      const thirdLevelItems = industriesThirdLevelItems.map((item) => ({
        name: item,
        link: `${basePath}/${generateSlug(item)}`, // 使用统一的slug生成
        hasSubMenu: false,
      }))

      navigation.switchToCustom(thirdLevelItems, basePath)
      return
    }

    if (subItem.hasSubMenu && subItem.subItems) {
      console.log('场景1触发：显示三级菜单')
      const basePath = `/${generateSlug(parentItem.name)}/${generateSlug(subItem.name)}` // 使用统一的slug生成

      navigation.switchToCustom(
        subItem.subItems.map((item) => ({
          name: item.name,
          link: item.link || `${basePath}/${generateSlug(item.name)}`, // 使用统一的slug生成
        })),
        basePath
      )
    } else {
      const menuKey = `${parentItem.name}-${subItem.name}`
      const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

      if (secondLevelConfig) {
        console.log('场景3触发：', menuKey, secondLevelConfig)
        const basePath = `/${generateSlug(parentItem.name)}/${generateSlug(subItem.name)}` // 使用统一的slug生成

        navigation.switchToCustom(secondLevelConfig, basePath)
      } else {
        navigation.switchToDefaultWithPath(parentItem.name, subItem.name)
      }
    }
  }

  const handleIconClick = () => {
    console.log('menu icon clicked')
  }

  return {
    handleMenuClick,
    handleSubmenuClick,
    handleIconClick,
    resetToHome,
    generateSlug, // 导出slug生成函数供其他地方使用
  }
}
