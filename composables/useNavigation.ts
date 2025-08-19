import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface NavMenuItem {
  name: string
  link?: string
  hasSubMenu?: boolean
  subItems?: NavMenuItem[]
}

export type NavigationType = 'default' | 'custom'

// 当前选中的菜单路径
export interface SelectedMenuPath {
  firstLevel?: string
  secondLevel?: string
  thirdLevel?: string
}

export const useNavigation = defineStore('navigation', () => {
  // 当前导航类型
  const navType = ref<NavigationType>('default')

  // 自定义导航菜单项
  const customMenuItems = ref<NavMenuItem[]>([])

  // 基础路径（用于生成链接）
  const basePath = ref('')

  // 当前选中的菜单路径
  const selectedPath = ref<SelectedMenuPath>({})

  // 切换到默认导航
  const switchToDefault = () => {
    navType.value = 'default'
    customMenuItems.value = []
    basePath.value = ''
  }

  // 切换到默认导航并保留选中路径
  const switchToDefaultWithPath = (
    firstLevel?: string,
    secondLevel?: string,
    thirdLevel?: string
  ) => {
    navType.value = 'default'
    customMenuItems.value = []
    basePath.value = ''
    selectedPath.value = {
      firstLevel: firstLevel || selectedPath.value.firstLevel,
      secondLevel: secondLevel || selectedPath.value.secondLevel,
      thirdLevel: thirdLevel || selectedPath.value.thirdLevel,
    }
  }

  // 切换到自定义导航
  const switchToCustom = (items: NavMenuItem[], base?: string) => {
    navType.value = 'custom'
    customMenuItems.value = items
    basePath.value = base || ''
  }

  // 设置选中的菜单路径
  const setSelectedPath = (path: SelectedMenuPath) => {
    selectedPath.value = { ...path }
  }

  // 清除选中的菜单路径
  const clearSelectedPath = () => {
    selectedPath.value = {}
  }

  // 当前是否是默认导航
  const isDefaultNav = computed(() => navType.value === 'default')

  // 当前是否是自定义导航
  const isCustomNav = computed(() => navType.value === 'custom')

  // 获取显示的菜单标题
  const displayTitle = computed(() => {
    const parts: string[] = []
    if (selectedPath.value.firstLevel) {
      parts.push(selectedPath.value.firstLevel)
    }
    if (selectedPath.value.secondLevel) {
      parts.push(selectedPath.value.secondLevel)
    }
    return parts.join(' / ')
  })

  return {
    navType,
    customMenuItems,
    basePath,
    selectedPath,
    isDefaultNav,
    isCustomNav,
    displayTitle,
    switchToDefault,
    switchToDefaultWithPath,
    switchToCustom,
    setSelectedPath,
    clearSelectedPath,
  }
})
