<template>
  <Transition name="slide">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[9999]"
    >
      <div
        class="absolute inset-0 h-full w-full overflow-hidden flex flex-col"
        :style="{ backgroundColor: 'var(--tm-bg-primary)' }"
      >
        <!-- Mobile Header -->
        <div
          class="flex items-center justify-between p-4 border-b sticky top-0 z-10"
          :style="{
            borderColor: 'var(--tm-bd-primary)',
            backgroundColor: 'var(--tm-bg-primary)',
          }"
        >
          <button
            class="p-2 -ml-2"
            @click="navigationStack.length > 0 ? goBack() : closeMenu()"
          >
            <div
              v-if="navigationStack.length === 0"
              class="i-carbon-close w-6 h-6"
            ></div>
            <div
              v-else
              class="i-carbon-chevron-left w-6 h-6"
            ></div>
          </button>
          <div class="text-center flex-1">
            <h2
              class="text-lg font-medium m-0"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              {{ currentTitle }}
            </h2>
          </div>
          <div class="w-10"></div>
        </div>

        <!-- Search Bar (visible on all levels) -->
        <div
          class="px-4 py-3 border-b"
          :style="{ borderColor: 'var(--tm-bd-light)' }"
        >
          <div class="relative">
            <input
              type="text"
              placeholder="Type to search..."
              class="w-full py-2 pr-10 pl-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-base outline-none"
              :style="{ color: 'var(--tm-txt-primary)' }"
            />
            <button
              class="absolute right-2 top-1/2 -translate-y-1/2"
              aria-label="Search"
            >
              <div class="i-carbon-search w-5 h-5 opacity-60"></div>
            </button>
          </div>
        </div>

        <!-- Mobile Content -->
        <div class="flex-1 overflow-y-auto">
          <!-- Main Menu (Root Level) -->
          <nav v-if="navigationStack.length === 0">
            <ul class="list-none p-0 m-0">
              <li
                v-for="item in menuItems"
                :key="item.name"
                class="border-b"
                :style="{ borderColor: 'var(--tm-bd-light)' }"
              >
                <button
                  class="flex items-center justify-between px-4 py-4 w-full no-underline transition-colors active:bg-gray-100 dark:active:bg-gray-800 text-left border-none bg-transparent"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="handleMenuClick(item)"
                >
                  <span class="text-base font-normal">{{ item.name }}</span>
                  <div
                    v-if="item.hasSubMenu"
                    class="i-carbon-chevron-right w-5 h-5 opacity-60"
                  ></div>
                </button>
              </li>
            </ul>

            <!-- Bottom Links -->
            <div
              class="border-t mt-8 py-4"
              :style="{ borderColor: 'var(--tm-bd-primary)' }"
            >
              <ul class="list-none p-0 m-0">
                <li
                  v-for="link in bottomLinks"
                  :key="link.name"
                  class="mb-1"
                >
                  <NuxtLink
                    :to="link.path"
                    class="block px-4 py-2 no-underline text-sm"
                    :style="{ color: 'var(--tm-txt-secondary)' }"
                    @click="closeMenu"
                  >
                    {{ link.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </nav>

          <!-- Submenu Navigation -->
          <nav v-else>
            <!-- EXPLORE OUR INSIGHTS link for mobile -->
            <div
              v-if="currentExploreLink"
              class="px-4 py-4 border-b"
              :style="{ borderColor: 'var(--tm-bd-light)' }"
            >
              <NuxtLink
                :to="currentExploreLink.url"
                class="flex items-center justify-between no-underline text-sm font-semibold uppercase tracking-wider"
                :style="{ color: 'var(--tm-txt-primary)' }"
                @click="closeMenu"
              >
                {{ currentExploreLink.text }}
                <div class="i-carbon-arrow-right w-4 h-4"></div>
              </NuxtLink>
            </div>

            <!-- Dynamic submenu content -->
            <div>
              <!-- Handle groups -->
              <template v-if="hasGroups">
                <div
                  v-for="(group, groupIndex) in currentItems"
                  :key="`group-${groupIndex}`"
                  class="mb-6"
                >
                  <h3
                    v-if="group.title || group.isGroup"
                    class="px-4 py-2 text-sm font-bold tracking-wider uppercase"
                    :style="{ color: 'var(--tm-pri-0)' }"
                  >
                    {{ group.title || group.name }}
                  </h3>
                  <ul
                    v-if="group.subItems"
                    class="list-none p-0 m-0"
                  >
                    <li
                      v-for="(item, itemIndex) in group.subItems"
                      :key="`${group.title || group.name}-${item.name}-${itemIndex}`"
                      class="border-b"
                      :style="{ borderColor: 'var(--tm-bd-light)' }"
                    >
                      <!-- Item with submenu -->
                      <button
                        v-if="item.hasSubMenu"
                        class="flex items-center justify-between px-4 py-3 w-full no-underline transition-all active:bg-gray-100 dark:active:bg-gray-800 text-left border-none bg-transparent"
                        :style="{ color: 'var(--tm-txt-primary)' }"
                        @click="handleNavigate(item)"
                      >
                        <span class="font-bold">{{ item.name }}</span>
                        <div class="i-carbon-chevron-right w-5 h-5 opacity-60"></div>
                      </button>
                      <!-- Item without submenu -->
                      <button
                        v-else
                        class="block px-4 py-3 no-underline text-base transition-all active:bg-gray-100 dark:active:bg-gray-800 w-full text-left"
                        :style="{ color: 'var(--tm-txt-primary)' }"
                        @click="
                          handleDirectNavigation(item, [...currentPath, group.title || group.name])
                        "
                      >
                        {{ item.name }}
                      </button>
                    </li>
                  </ul>
                </div>
              </template>

              <!-- Regular items -->
              <ul
                v-else
                class="list-none p-0 m-0"
              >
                <li
                  v-for="(item, index) in currentItems"
                  :key="`item-${index}`"
                  class="border-b"
                  :style="{ borderColor: 'var(--tm-bd-light)' }"
                >
                  <!-- Item with submenu -->
                  <button
                    v-if="item.hasSubMenu"
                    class="flex items-center justify-between px-4 py-3 w-full no-underline transition-all active:bg-gray-100 dark:active:bg-gray-800 text-left border-none bg-transparent"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                    @click="handleNavigate(item)"
                  >
                    <span class="font-bold">{{ item.name }}</span>
                    <div class="i-carbon-chevron-right w-5 h-5 opacity-60"></div>
                  </button>
                  <!-- Item without submenu -->
                  <button
                    v-else
                    class="block px-4 py-3 no-underline text-base transition-all active:bg-gray-100 dark:active:bg-gray-800 w-full text-left"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                    @click="handleDirectNavigation(item, currentPath)"
                  >
                    {{ item.name }}
                  </button>
                </li>
              </ul>
            </div>

            <!-- Featured section for mobile -->
            <div
              v-if="currentFeatured"
              class="p-4 mt-8"
            >
              <h3
                class="text-sm font-bold mb-4 tracking-wider uppercase"
                :style="{ color: 'var(--tm-pri-0)' }"
              >
                {{ currentFeatured.title }}
              </h3>
              <div
                v-for="item in currentFeatured.items"
                :key="item.name"
                class="mb-2"
              >
                <NuxtLink
                  :to="item.link"
                  class="block no-underline"
                  @click="closeMenu"
                >
                  <h4
                    class="text-base font-semibold mb-2 transition-all active:text-[var(--tm-pri-0)] active:underline"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                  >
                    {{ item.name }}
                  </h4>
                  <p
                    v-if="item.description"
                    class="text-sm leading-relaxed"
                    :style="{ color: 'var(--tm-txt-secondary)' }"
                  >
                    {{ item.description }}
                  </p>
                </NuxtLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { navigateTo } from 'nuxt/app'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'
  import type { MenuItem, UnifiedMenuItem, BottomLink } from '~/components/NavMenu.types'
  import { generatePath, getMenuItemName } from '~/components/NavMenu.types'

  interface NavigationItem {
    items: UnifiedMenuItem[]
    title: string
    featured?: any
    exploreLink?: any
    parentName?: string // 添加父级名称
  }

  interface Props {
    open: boolean
    menuItems: MenuItem[]
    bottomLinks: BottomLink[]
  }

  const props = defineProps<Props>()
  const navigation = useNavigation()
  const { specialMenuConfigs } = useMenuData()

  const emit = defineEmits<{
    'update:open': [value: boolean]
  }>()

  const isOpen = computed({
    get: () => props.open,
    set: (value) => emit('update:open', value),
  })

  // Navigation stack to track current position
  const navigationStack = ref<NavigationItem[]>([])

  const currentTitle = computed(() => {
    if (navigationStack.value.length === 0) return 'McKinsey & Company'
    return navigationStack.value[navigationStack.value.length - 1].title
  })

  const currentItems = computed(() => {
    if (navigationStack.value.length === 0) return []
    return navigationStack.value[navigationStack.value.length - 1].items
  })

  const currentPath = computed(() => {
    return navigationStack.value.map((nav) => nav.title)
  })

  const currentFeatured = computed(() => {
    if (navigationStack.value.length === 0) return null
    return navigationStack.value[navigationStack.value.length - 1].featured
  })

  const currentExploreLink = computed(() => {
    if (navigationStack.value.length === 0) return null
    return navigationStack.value[navigationStack.value.length - 1].exploreLink
  })

  const hasGroups = computed(() => {
    return currentItems.value.some((item) => item.isGroup === true || !!item.title)
  })

  const closeMenu = () => {
    isOpen.value = false
    resetMenu()
  }

  const resetMenu = () => {
    navigationStack.value = []
  }

  const handleMenuClick = (item: MenuItem) => {
    console.log('Mobile - handleMenuClick:', item.name)

    // 更新选中的一级菜单
    navigation.setSelectedPath({ firstLevel: item.name })

    // 场景2：先检查一级菜单是否有特殊配置
    const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]

    if (firstLevelConfig) {
      console.log('Mobile - 场景2触发：', item.name, firstLevelConfig)
      navigation.switchToCustom(
        firstLevelConfig,
        `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
      )
      closeMenu()
      return
    }

    // 如果有子菜单，进入子菜单
    if (item.hasSubMenu && item.subItems) {
      navigationStack.value.push({
        items: item.subItems,
        title: item.name,
        featured: item.featured,
        exploreLink: item.exploreLink,
      })
    } else {
      // 没有子菜单，直接导航
      navigateTo(generatePath([item.name]))
      closeMenu()
    }
  }

  const handleNavigate = (item: UnifiedMenuItem) => {
    const currentNav = navigationStack.value[navigationStack.value.length - 1]
    const parentName = currentNav?.title || ''

    console.log('Mobile - handleNavigate:', parentName, '->', item.name)

    // 场景3：先检查二级菜单是否有特殊配置
    const menuKey = `${parentName}-${item.name}`
    const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

    if (secondLevelConfig) {
      console.log('Mobile - 场景3触发：', menuKey, secondLevelConfig)
      navigation.setSelectedPath({
        firstLevel: parentName,
        secondLevel: item.name,
      })
      const basePath = `/${parentName.toLowerCase().replace(/\s+/g, '-')}/${item.name.toLowerCase().replace(/\s+/g, '-')}`
      navigation.switchToCustom(secondLevelConfig, basePath)
      closeMenu()
      return
    }

    // 场景1：如果有三级菜单，进入下一级
    if (item.hasSubMenu && item.subItems) {
      console.log('Mobile - 场景1触发：显示三级菜单')
      navigationStack.value.push({
        items: item.subItems,
        title: getMenuItemName(item),
        featured: null,
        exploreLink: null,
        parentName: parentName,
      })
    } else {
      // 没有子菜单也没有特殊配置，恢复默认导航
      console.log('Mobile - 恢复默认导航并显示选中菜单')
      navigation.switchToDefaultWithPath(parentName, item.name)
      const path = item.link || generatePath([parentName, item.name])
      navigateTo(path)
      closeMenu()
    }
  }

  const handleDirectNavigation = (item: UnifiedMenuItem, path: string[]) => {
    const parentName = navigationStack.value[0]?.title || ''
    const secondLevelName =
      navigationStack.value.length > 1
        ? navigationStack.value[navigationStack.value.length - 1].title
        : ''

    console.log('Mobile - handleDirectNavigation:', path, '->', item.name)

    // 检查是否是二级菜单点击（navigationStack 只有一层）
    if (navigationStack.value.length === 1) {
      // 场景3：检查二级菜单是否有特殊配置
      const menuKey = `${parentName}-${item.name}`
      const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

      if (secondLevelConfig) {
        console.log('Mobile - 场景3触发（直接导航）：', menuKey, secondLevelConfig)
        navigation.setSelectedPath({
          firstLevel: parentName,
          secondLevel: item.name,
        })
        const basePath = `/${parentName.toLowerCase().replace(/\s+/g, '-')}/${item.name.toLowerCase().replace(/\s+/g, '-')}`
        navigation.switchToCustom(secondLevelConfig, basePath)
      } else {
        // 没有特殊配置，恢复默认导航并保留选中路径
        console.log('Mobile - 恢复默认导航并显示选中菜单')
        navigation.switchToDefaultWithPath(parentName, item.name)
        const navPath = item.link || generatePath([parentName, item.name])
        navigateTo(navPath)
      }
    } else {
      // 三级菜单点击
      navigation.setSelectedPath({
        firstLevel: parentName,
        secondLevel: secondLevelName,
        thirdLevel: item.name,
      })
      const navPath = item.link || generatePath([...path, item.name])
      navigateTo(navPath)
    }

    closeMenu()
  }

  const goBack = () => {
    navigationStack.value.pop()
  }
</script>

<style scoped>
  /* Transitions */
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }

  .slide-enter-from {
    transform: translateX(-100%);
  }

  .slide-leave-to {
    transform: translateX(-100%);
  }

  /* Smooth scrolling on iOS */
  .overflow-y-auto {
    -webkit-overflow-scrolling: touch;
  }

  /* Active state for touch devices */
  @media (hover: none) {
    button:active {
      opacity: 0.8;
    }
  }
</style>
