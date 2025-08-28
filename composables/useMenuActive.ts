import { computed } from 'vue'
import { useNavigation } from './useNavigation'
import { useMenuHandler } from './useMenuHandler'
import type { MenuItem, UnifiedMenuItem } from '~/components/NavMenu.types'

export const useMenuActive = () => {
  const navigation = useNavigation()
  const { generateSlug } = useMenuHandler()
  const route = useRoute()

  // 检查一级菜单项是否激活
  const isMenuItemActive = (item: MenuItem) => {
    // 检查是否通过 selectedPath 设置为激活状态
    const selectedPath = navigation.selectedPath
    if (selectedPath.firstLevel === item.name) {
      return true
    }

    // 基于当前路由检查是否激活
    const currentPath = route.path

    // 如果有直接链接，检查是否匹配
    if (item.link) {
      if (currentPath === item.link || currentPath.startsWith(item.link + '/')) {
        return true
      }
    } else {
      // 生成预期的路径并检查
      const expectedPath = `/${generateSlug(item.name)}`
      if (currentPath === expectedPath || currentPath.startsWith(expectedPath + '/')) {
        return true
      }
    }

    return false
  }

  // 检查二级菜单项是否激活
  const isSubMenuItemActive = (subItem: UnifiedMenuItem, parentItem: MenuItem) => {
    const currentPath = route.path

    // 如果有直接链接，检查是否匹配
    if (subItem.link) {
      return currentPath === subItem.link || currentPath.startsWith(subItem.link + '/')
    }

    // 生成预期的路径并检查
    const parentSlug = generateSlug(parentItem.name)
    const subItemSlug = generateSlug(subItem.name)
    const expectedPath = `/${parentSlug}/${subItemSlug}`

    return currentPath === expectedPath || currentPath.startsWith(expectedPath + '/')
  }

  // 检查三级菜单项是否激活（用于复杂的多层级菜单）
  const isThirdLevelActive = (item: UnifiedMenuItem, parentName: string, groupName?: string) => {
    const currentPath = route.path

    if (item.link) {
      return currentPath === item.link || currentPath.startsWith(item.link + '/')
    }

    const parentSlug = generateSlug(parentName)
    const groupSlug = groupName ? generateSlug(groupName) : null
    const itemSlug = generateSlug(item.name)

    const expectedPath = groupSlug
      ? `/${parentSlug}/${groupSlug}/${itemSlug}`
      : `/${parentSlug}/${itemSlug}`

    return currentPath === expectedPath || currentPath.startsWith(expectedPath + '/')
  }

  // 获取当前激活的菜单项
  const activeMenuItem = computed(() => {
    return navigation.selectedPath.firstLevel || null
  })

  // 获取当前激活的子菜单项
  const activeSubMenuItem = computed(() => {
    return navigation.selectedPath.secondLevel || null
  })

  // 获取当前激活的三级菜单项
  const activeThirdLevelItem = computed(() => {
    return navigation.selectedPath.thirdLevel || null
  })

  return {
    isMenuItemActive,
    isSubMenuItemActive,
    isThirdLevelActive,
    activeMenuItem,
    activeSubMenuItem,
    activeThirdLevelItem,
  }
}
