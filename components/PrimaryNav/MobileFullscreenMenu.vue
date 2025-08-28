<template>
  <Transition name="slide">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9999"
    >
      <!-- Background -->
      <div
        class="absolute inset-0"
        :style="{
          background: `linear-gradient(135deg, var(--tm-bg-primary) 0%, var(--tm-bg-secondary) 100%)`,
        }"
      ></div>

      <!-- Container -->
      <div class="relative h-full w-full flex flex-col">
        <!-- Header -->
        <div class="flex items-center justify-between p-5">
          <button
            class="p-3 -ml-3"
            @click="navigationStack.length > 0 ? goBack() : closeMenu()"
          >
            <div
              v-if="navigationStack.length === 0"
              class="i-carbon-close w-6 h-6"
            ></div>
            <div
              v-else
              class="i-carbon-arrow-left w-6 h-6"
            ></div>
          </button>

          <div class="text-center flex-1">
            <h2
              class="font-light m-0"
              :class="navigationStack.length === 0 ? 'text-2xl' : 'text-lg'"
              :style="{
                color:
                  navigationStack.length === 0
                    ? 'var(--tm-accent-primary)'
                    : 'var(--tm-txt-primary)',
              }"
            >
              {{ currentTitle }}
            </h2>
          </div>

          <div class="w-12"></div>
        </div>

        <!-- Content -->
        <div class="flex-1 overflow-hidden">
          <Transition
            :name="isGoingBack ? 'slide-back' : 'slide-forward'"
            mode="out-in"
          >
            <div
              :key="navigationStack.length"
              class="absolute inset-0 overflow-y-auto p-4"
            >
              <!-- Main Menu -->
              <ul
                v-if="navigationStack.length === 0"
                class="list-none p-0 m-0 space-y-3"
              >
                <li
                  v-for="item in menuItems"
                  :key="item.name"
                >
                  <button
                    class="w-full p-5 rounded-2xl bg-white/5 border border-white/10 transition-all text-left"
                    @click="handleMenuClick(item)"
                  >
                    <div class="flex items-center justify-between">
                      <span
                        class="text-base"
                        :style="{ color: 'var(--tm-txt-primary)' }"
                      >
                        {{ item.name }}
                      </span>
                      <div
                        v-if="hasSubItemsOrConfig(item)"
                        class="i-carbon-chevron-right w-5 h-5 op-40"
                      ></div>
                    </div>
                  </button>
                </li>
              </ul>

              <!-- Submenu -->
              <ul
                v-else
                class="list-none p-0 m-0 space-y-2"
              >
                <li
                  v-for="item in currentItems"
                  :key="item.name"
                >
                  <button
                    class="w-full p-4 rounded-xl transition-all text-left"
                    :class="{
                      'bg-white/10 border border-[var(--tm-accent-primary)]': isCurrentActive(item),
                      'bg-white/3': !isCurrentActive(item),
                    }"
                    @click="handleItemClick(item)"
                  >
                    <div class="flex items-center justify-between">
                      <span
                        class="text-base"
                        :style="{
                          color: isCurrentActive(item)
                            ? 'var(--tm-accent-primary)'
                            : 'var(--tm-txt-primary)',
                        }"
                      >
                        {{ item.name }}
                      </span>
                      <div
                        v-if="hasSubItemsOrConfig(item)"
                        class="i-carbon-chevron-right w-5 h-5 op-40"
                      ></div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  import type { MenuItem, UnifiedMenuItem, BottomLink } from '~/components/NavMenu.types'

  interface NavigationItem {
    items: UnifiedMenuItem[]
    title: string
  }

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

  const isOpen = computed({
    get: () => props.open,
    set: (value: boolean) => emit('update:open', value),
  })

  const navigationStack = ref<NavigationItem[]>([])
  const isGoingBack = ref(false)

  const currentTitle = computed(() => {
    return navigationStack.value.length === 0
      ? 'VMMC'
      : navigationStack.value[navigationStack.value.length - 1].title
  })

  const currentItems = computed(() => {
    return navigationStack.value.length === 0
      ? []
      : navigationStack.value[navigationStack.value.length - 1].items
  })

  const generatePath = (segments: string[]): string => '/' + segments.map(generateSlug).join('/')

  // 检查当前项是否激活
  const isCurrentActive = (item: UnifiedMenuItem): boolean => {
    if (navigationStack.value.length === 0) return false

    const pathArray = navigationStack.value.map((nav) => nav.title)
    pathArray.push(item.name)

    const expectedPath = item.link || generatePath(pathArray)
    return route.path === expectedPath || route.path.startsWith(expectedPath + '/')
  }

  const hasSubItemsOrConfig = (item: MenuItem | UnifiedMenuItem): boolean => {
    if (navigationStack.value.length === 0) {
      return !!(
        specialMenuConfigs.firstLevel[item.name] ||
        item.hasSubMenu ||
        item.subItems?.length
      )
    }

    const parentName = navigationStack.value[0].title
    const menuKey = `${parentName}-${item.name}`
    return !!(specialMenuConfigs.secondLevel[menuKey] || item.hasSubMenu || item.subItems?.length)
  }

  const closeMenu = () => {
    isOpen.value = false
    setTimeout(() => {
      navigationStack.value = []
      isGoingBack.value = false
    }, 300)
  }

  const goBack = () => {
    isGoingBack.value = true
    navigationStack.value.pop()
    setTimeout(() => {
      isGoingBack.value = false
    }, 300)
  }

  const handleMenuClick = (item: MenuItem) => {
    isGoingBack.value = false

    const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]
    if (firstLevelConfig) {
      navigationStack.value.push({ items: firstLevelConfig, title: item.name })
    } else if (item.hasSubMenu && item.subItems) {
      navigationStack.value.push({ items: item.subItems, title: item.name })
    } else {
      navigation.setSelectedPath({ firstLevel: item.name })
      navigateTo(generatePath([item.name]))
      closeMenu()
    }
  }

  const handleItemClick = (item: UnifiedMenuItem) => {
    const currentLevel = navigationStack.value.length
    isGoingBack.value = false

    if (currentLevel === 1) {
      const parentName = navigationStack.value[0].title
      const menuKey = `${parentName}-${item.name}`
      const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

      if (secondLevelConfig) {
        navigationStack.value.push({ items: secondLevelConfig, title: item.name })
        return
      }
    }

    if (item.hasSubMenu && item.subItems) {
      navigationStack.value.push({ items: item.subItems, title: item.name })
    } else {
      const pathArray = navigationStack.value.map((nav) => nav.title)
      pathArray.push(item.name)

      const selectedPath: Record<string, string> = {}
      if (pathArray[0]) selectedPath.firstLevel = pathArray[0]
      if (pathArray[1]) selectedPath.secondLevel = pathArray[1]
      if (pathArray[2]) selectedPath.thirdLevel = pathArray[2]

      navigation.setSelectedPath(selectedPath)
      navigation.switchToDefault()

      const path = item.link || generatePath(pathArray)
      navigateTo(path)
      closeMenu()
    }
  }
</script>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.4s ease;
  }
  .slide-enter-from {
    transform: translateX(-100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }

  .slide-forward-enter-active,
  .slide-forward-leave-active,
  .slide-back-enter-active,
  .slide-back-leave-active {
    transition: all 0.35s ease;
  }
  .slide-forward-enter-from {
    transform: translateX(100%);
  }
  .slide-forward-leave-to {
    transform: translateX(-50%);
  }
  .slide-back-enter-from {
    transform: translateX(-50%);
  }
  .slide-back-leave-to {
    transform: translateX(100%);
  }
</style>
