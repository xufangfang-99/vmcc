<template>
  <Transition name="menu-slide">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9999 bg-[var(--tm-bg-primary)]"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-[var(--tm-bd-light)]">
        <button
          class="flex items-center gap-2 p-2 -ml-2"
          @click="goBack"
        >
          <div
            v-if="currentLevel === 0"
            class="i-carbon-close w-6 h-6"
            :style="{ color: 'var(--tm-txt-primary)' }"
          ></div>
          <div
            v-else
            class="i-carbon-arrow-left w-6 h-6"
            :style="{ color: 'var(--tm-txt-primary)' }"
          ></div>
          <span
            v-if="currentLevel > 0"
            class="text-sm"
            :style="{ color: 'var(--tm-txt-secondary)' }"
          >
            返回
          </span>
        </button>

        <h2
          class="text-lg font-medium"
          :style="{ color: 'var(--tm-txt-primary)' }"
        >
          {{ currentTitle }}
        </h2>

        <div class="w-16"></div>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-4">
        <div class="space-y-2">
          <button
            v-for="item in currentItems"
            :key="item.name"
            class="w-full p-4 rounded-xl text-left transition-all duration-200 border"
            :class="{
              'bg-[var(--tm-bg-active)] border-[var(--tm-accent-primary)]': isItemActive(item),
              'bg-[var(--tm-bg-card)] border-[var(--tm-bd-card)] hover:bg-[var(--tm-bg-hover)]':
                !isItemActive(item),
            }"
            @click="handleItemClick(item)"
          >
            <div class="flex items-center justify-between">
              <span
                class="text-base font-normal"
                :style="{
                  color: isItemActive(item) ? 'var(--tm-accent-primary)' : 'var(--tm-txt-primary)',
                }"
              >
                {{ item.name }}
              </span>
              <div
                v-if="hasSubMenu(item)"
                class="i-carbon-chevron-right w-5 h-5 opacity-60"
                :style="{ color: 'var(--tm-txt-light)' }"
              ></div>
            </div>
          </button>
        </div>
      </div>

      <!-- Bottom Links (only on main level) -->
      <div
        v-if="currentLevel === 0 && bottomLinks.length > 0"
        class="p-4 border-t border-[var(--tm-bd-light)]"
      >
        <div class="grid grid-cols-2 gap-3">
          <NuxtLink
            v-for="link in bottomLinks"
            :key="link.name"
            :to="link.path"
            class="p-3 rounded-lg text-center transition-all duration-200 border border-[var(--tm-bd-card)] hover:bg-[var(--tm-bg-hover)]"
            @click="closeMenu"
          >
            <span
              class="text-sm"
              :style="{ color: 'var(--tm-txt-secondary)' }"
            >
              {{ link.name }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  import type { MenuItem, UnifiedMenuItem, BottomLink } from '~/components/NavMenu.types'

  interface Props {
    open: boolean
    menuItems: MenuItem[]
    bottomLinks: BottomLink[]
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{ 'update:open': [value: boolean] }>()

  const navigation = useNavigation()
  const { specialMenuConfigs } = useMenuData()
  const { generateSlug } = useMenuHandler()
  const route = useRoute()

  // 简化状态管理 - 使用单一数组存储导航堆栈
  const navigationStack = ref<Array<{ items: UnifiedMenuItem[]; title: string }>>([])

  const isOpen = computed({
    get: () => props.open,
    set: (value: boolean) => emit('update:open', value),
  })

  const currentLevel = computed(() => navigationStack.value.length)

  const currentTitle = computed(() => {
    if (currentLevel.value === 0) return 'VMMC'
    return navigationStack.value[currentLevel.value - 1].title
  })

  const currentItems = computed((): (MenuItem | UnifiedMenuItem)[] => {
    if (currentLevel.value === 0) return props.menuItems
    return navigationStack.value[currentLevel.value - 1].items
  })

  // 生成路径
  const generatePath = (segments: string[]): string => '/' + segments.map(generateSlug).join('/')

  // 检查项目是否有子菜单
  const hasSubMenu = (item: MenuItem | UnifiedMenuItem): boolean => {
    if (currentLevel.value === 0) {
      const menuItem = item as MenuItem
      return !!(
        specialMenuConfigs.firstLevel[menuItem.name] ||
        menuItem.hasSubMenu ||
        menuItem.subItems?.length
      )
    }

    const pathSegments = navigationStack.value.map((nav) => nav.title)
    if (pathSegments.length >= 1) {
      const menuKey = `${pathSegments[0]}-${item.name}`
      return !!(specialMenuConfigs.secondLevel[menuKey] || item.hasSubMenu || item.subItems?.length)
    }

    return false
  }

  // 检查项目是否激活
  const isItemActive = (item: MenuItem | UnifiedMenuItem): boolean => {
    const pathSegments = navigationStack.value.map((nav) => nav.title)
    pathSegments.push(item.name)

    const expectedPath = item.link || generatePath(pathSegments)
    return route.path === expectedPath || route.path.startsWith(expectedPath + '/')
  }

  // 处理项目点击
  const handleItemClick = (item: MenuItem | UnifiedMenuItem) => {
    if (currentLevel.value === 0) {
      // 处理主菜单项
      const menuItem = item as MenuItem

      // 特殊处理首页
      if (menuItem.isHome || menuItem.link === '/') {
        navigation.clearSelectedPath()
        navigation.switchToDefault()
        navigateTo('/')
        closeMenu()
        return
      }

      // 检查是否有特殊配置的子菜单
      const firstLevelConfig = specialMenuConfigs.firstLevel[menuItem.name]
      if (firstLevelConfig) {
        navigationStack.value.push({ items: firstLevelConfig, title: menuItem.name })
        return
      }

      // 检查是否有常规子菜单
      if (menuItem.hasSubMenu && menuItem.subItems) {
        navigationStack.value.push({ items: menuItem.subItems, title: menuItem.name })
        return
      }

      // 无子菜单，直接导航
      navigation.setSelectedPath({ firstLevel: menuItem.name })
      navigation.switchToDefault()
      navigateTo(menuItem.link || generatePath([menuItem.name]))
      closeMenu()
    } else {
      // 处理子菜单项
      const pathSegments = navigationStack.value.map((nav) => nav.title)

      // 检查二级菜单的特殊配置
      if (currentLevel.value === 1) {
        const menuKey = `${pathSegments[0]}-${item.name}`
        const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

        if (secondLevelConfig) {
          navigationStack.value.push({ items: secondLevelConfig, title: item.name })
          return
        }
      }

      // 检查是否有子菜单
      if (item.hasSubMenu && item.subItems) {
        navigationStack.value.push({ items: item.subItems, title: item.name })
        return
      }

      // 无子菜单，设置选中路径并导航
      const selectedPath: Record<string, string> = {}
      pathSegments.forEach((segment, index) => {
        if (index === 0) selectedPath.firstLevel = segment
        if (index === 1) selectedPath.secondLevel = segment
        if (index === 2) selectedPath.thirdLevel = segment
      })
      selectedPath[currentLevel.value === 1 ? 'secondLevel' : 'thirdLevel'] = item.name

      navigation.setSelectedPath(selectedPath)
      navigation.switchToDefault()

      pathSegments.push(item.name)
      const path = item.link || generatePath(pathSegments)
      navigateTo(path)
      closeMenu()
    }
  }

  // 返回上一级或关闭菜单
  const goBack = () => {
    if (currentLevel.value === 0) {
      closeMenu()
    } else {
      navigationStack.value.pop()
    }
  }

  // 关闭菜单
  const closeMenu = () => {
    isOpen.value = false
    // 延迟重置导航堆栈，避免动画期间的闪烁
    setTimeout(() => {
      navigationStack.value = []
    }, 300)
  }

  // 监听菜单打开状态，自动选择第一个有子菜单的项目
  watch(
    () => props.open,
    (newValue) => {
      if (newValue && navigationStack.value.length === 0) {
        const firstWithSubmenu = props.menuItems.find((item) => hasSubMenu(item))
        // 移动端通常不需要自动打开第一个子菜单，保持在主菜单即可
      }
    }
  )
</script>

<style scoped>
  .menu-slide-enter-active,
  .menu-slide-leave-active {
    transition: transform 0.3s ease-out;
  }

  .menu-slide-enter-from {
    transform: translateX(100%);
  }

  .menu-slide-leave-to {
    transform: translateX(100%);
  }
</style>
