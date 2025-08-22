<template>
  <Transition name="slide">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9999 bg-[var(--tm-bg-primary)]"
    >
      <!-- Mobile Container -->
      <div class="h-full w-full flex flex-col">
        <!-- Mobile Header -->
        <div
          class="flex items-center justify-between p-4 border-b sticky top-0 z-10 backdrop-blur-sm"
          :style="{
            borderColor: 'var(--tm-bd-primary)',
            backgroundColor: 'var(--tm-bg-primary)',
            minHeight: navigationStack.length === 0 ? '80px' : '60px',
          }"
        >
          <!-- Back/Close Button -->
          <button
            class="p-2 -ml-2 rounded-lg active:bg-gray-100 dark:active:bg-gray-800 transition-colors"
            @click="navigationStack.length > 0 ? goBack() : closeMenu()"
          >
            <Transition
              name="icon-switch"
              mode="out-in"
            >
              <div
                v-if="navigationStack.length === 0"
                key="close"
                class="i-carbon-close w-6 h-6"
              ></div>
              <div
                v-else
                key="back"
                class="i-carbon-chevron-left w-6 h-6"
              ></div>
            </Transition>
          </button>

          <!-- Title with animation -->
          <div class="text-center flex-1 overflow-hidden">
            <Transition
              name="title-slide"
              mode="out-in"
            >
              <div
                :key="currentTitle"
                class="px-2"
              >
                <h2
                  class="text-lg font-medium m-0 truncate"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                >
                  {{ currentTitle }}
                </h2>
                <p
                  v-if="currentSubtitle"
                  class="text-xs op-70 mt-1 truncate"
                  :style="{ color: 'var(--tm-txt-secondary)' }"
                >
                  {{ currentSubtitle }}
                </p>
              </div>
            </Transition>
          </div>

          <!-- Placeholder for balance -->
          <div class="w-10"></div>
        </div>

        <!-- Mobile Content with slide transition -->
        <div class="flex-1 overflow-hidden relative">
          <Transition
            :name="transitionName"
            mode="out-in"
          >
            <div
              :key="navigationStack.length"
              class="absolute inset-0 overflow-y-auto overscroll-contain"
            >
              <!-- Main Menu (Root Level) -->
              <nav v-if="navigationStack.length === 0">
                <!-- Menu Items -->
                <ul class="list-none p-0 m-0">
                  <li
                    v-for="(item, index) in menuItems"
                    :key="item.name"
                    class="border-b border-[var(--tm-bd-light)] animate-fade-in"
                    :style="{ animationDelay: `${index * 50}ms` }"
                  >
                    <button
                      class="flex items-center justify-between px-6 py-4 w-full transition-colors active:bg-[var(--tm-bg-active)] text-left"
                      :style="{ color: 'var(--tm-txt-primary)' }"
                      @click="handleMenuClick(item)"
                    >
                      <span class="text-base font-normal">{{ item.name }}</span>
                      <div
                        v-if="hasSubItemsOrConfig(item)"
                        class="i-carbon-chevron-right w-5 h-5 op-60"
                      ></div>
                    </button>
                  </li>
                </ul>

                <!-- Bottom Links -->
                <div class="mt-8 py-6 px-6 border-t border-[var(--tm-bd-primary)]">
                  <div class="grid grid-cols-2 gap-3">
                    <NuxtLink
                      v-for="(link, index) in bottomLinks"
                      :key="link.name"
                      :to="link.path"
                      class="block py-3 px-4 text-center rounded-lg bg-[var(--tm-bg-secondary)] transition-all active:scale-95 animate-fade-in"
                      :style="{
                        color: 'var(--tm-txt-secondary)',
                        animationDelay: `${(menuItems.length + index) * 50}ms`,
                      }"
                      @click="closeMenu"
                    >
                      <span class="text-sm">{{ link.name }}</span>
                    </NuxtLink>
                  </div>
                </div>
              </nav>

              <!-- Submenu Navigation -->
              <nav
                v-else
                class="min-h-full"
              >
                <!-- Explore Link Banner -->
                <div
                  v-if="currentExploreLink"
                  class="sticky top-0 z-5 bg-[var(--tm-accent-primary)] px-6 py-4"
                >
                  <NuxtLink
                    :to="currentExploreLink.url"
                    class="flex items-center justify-between text-white no-underline"
                    @click="closeMenuAndUpdatePath"
                  >
                    <span class="text-sm font-semibold uppercase tracking-wider">
                      {{ currentExploreLink.text }}
                    </span>
                    <div class="i-carbon-arrow-right w-5 h-5"></div>
                  </NuxtLink>
                </div>

                <!-- Dynamic submenu content -->
                <div class="pb-20">
                  <!-- Handle groups -->
                  <template v-if="hasGroups">
                    <div
                      v-for="(group, groupIndex) in currentItems"
                      :key="`group-${groupIndex}`"
                      class="mb-6 animate-fade-in"
                      :style="{ animationDelay: `${groupIndex * 100}ms` }"
                    >
                      <h3
                        v-if="group.title || group.isGroup"
                        class="px-6 py-3 text-sm font-bold tracking-wider uppercase bg-[var(--tm-bg-secondary)]"
                        :style="{ color: 'var(--tm-accent-primary)' }"
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
                          class="border-b border-[var(--tm-bd-light)] animate-slide-up"
                          :style="{ animationDelay: `${groupIndex * 100 + itemIndex * 30}ms` }"
                        >
                          <button
                            class="flex items-center justify-between px-6 py-4 w-full transition-all active:bg-[var(--tm-bg-active)] text-left"
                            :style="{ color: 'var(--tm-txt-primary)' }"
                            @click="handleItemClick(item)"
                          >
                            <span
                              class="text-base"
                              :class="{ 'font-medium': hasSubItemsOrConfig(item) }"
                            >
                              {{ item.name }}
                            </span>
                            <div
                              v-if="hasSubItemsOrConfig(item)"
                              class="i-carbon-chevron-right w-5 h-5 op-60"
                            ></div>
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
                      class="border-b border-[var(--tm-bd-light)] animate-slide-up"
                      :style="{ animationDelay: `${index * 50}ms` }"
                    >
                      <button
                        class="flex items-center justify-between px-6 py-4 w-full transition-all active:bg-[var(--tm-bg-active)] text-left"
                        :style="{ color: 'var(--tm-txt-primary)' }"
                        @click="handleItemClick(item)"
                      >
                        <span
                          class="text-base"
                          :class="{ 'font-medium': hasSubItemsOrConfig(item) }"
                        >
                          {{ item.name }}
                        </span>
                        <div
                          v-if="hasSubItemsOrConfig(item)"
                          class="i-carbon-chevron-right w-5 h-5 op-60"
                        ></div>
                      </button>
                    </li>
                  </ul>

                  <!-- Featured section with better mobile design -->
                  <div
                    v-if="currentFeatured"
                    class="p-6 mt-8 bg-[var(--tm-bg-secondary)]"
                  >
                    <h3
                      class="text-sm font-bold mb-6 tracking-wider uppercase flex items-center gap-3"
                      :style="{ color: 'var(--tm-accent-primary)' }"
                    >
                      <span class="w-8 h-px bg-current"></span>
                      {{ currentFeatured.title }}
                    </h3>
                    <div class="space-y-4">
                      <NuxtLink
                        v-for="(item, index) in currentFeatured.items"
                        :key="item.name"
                        :to="item.link"
                        class="block p-4 rounded-lg bg-[var(--tm-bg-primary)] border border-[var(--tm-bd-light)] transition-all active:scale-98 animate-fade-in"
                        :style="{ animationDelay: `${index * 100 + 200}ms` }"
                        @click="closeMenuAndUpdatePath"
                      >
                        <h4
                          class="text-base font-semibold mb-2"
                          :style="{ color: 'var(--tm-txt-primary)' }"
                        >
                          {{ item.name }}
                        </h4>
                        <p
                          v-if="item.description"
                          class="text-sm leading-relaxed op-80"
                          :style="{ color: 'var(--tm-txt-secondary)' }"
                        >
                          {{ item.description }}
                        </p>
                        <div class="mt-3 flex items-center gap-2 text-[var(--tm-accent-primary)]">
                          <span class="text-xs font-medium uppercase">Learn More</span>
                          <div class="i-carbon-arrow-right w-3 h-3"></div>
                        </div>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </Transition>
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
    level: number
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
  const isGoingBack = ref(false)

  const currentTitle = computed(() => {
    if (navigationStack.value.length === 0) return 'VMMC'
    return navigationStack.value[navigationStack.value.length - 1].title
  })

  const currentSubtitle = computed(() => {
    if (navigationStack.value.length === 0) return 'Victor Meridian Management Consultancies'
    return null
  })

  const currentItems = computed(() => {
    if (navigationStack.value.length === 0) return []
    return navigationStack.value[navigationStack.value.length - 1].items
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

  // Dynamic transition based on navigation direction
  const transitionName = computed(() => {
    return isGoingBack.value ? 'slide-back' : 'slide-forward'
  })

  const closeMenu = () => {
    isOpen.value = false
    // 延迟重置，让关闭动画完成
    setTimeout(() => {
      resetMenu()
    }, 300)
  }

  const resetMenu = () => {
    navigationStack.value = []
    isGoingBack.value = false
  }

  // 检查是否有子项或特殊配置
  const hasSubItemsOrConfig = (item: MenuItem | UnifiedMenuItem) => {
    // 如果在第一级，检查是否有场景2配置
    if (navigationStack.value.length === 0) {
      const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]
      if (firstLevelConfig) return true
    }

    // 如果在第二级，检查是否有场景3配置
    if (navigationStack.value.length === 1) {
      const parentName = navigationStack.value[0].title
      const menuKey = `${parentName}-${item.name}`
      const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]
      if (secondLevelConfig) return true
    }

    // 检查是否有子菜单
    return item.hasSubMenu || (item.subItems && item.subItems.length > 0)
  }

  // 处理一级菜单点击
  const handleMenuClick = (item: MenuItem) => {
    console.log('Mobile - 一级菜单点击:', item.name)
    isGoingBack.value = false

    // 场景2：检查一级菜单是否有特殊配置
    const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]

    if (firstLevelConfig) {
      console.log('Mobile - 场景2：显示特殊配置项', item.name)
      navigationStack.value.push({
        items: firstLevelConfig,
        title: item.name,
        featured: null,
        exploreLink: null,
        level: 1,
      })
    } else if (item.hasSubMenu && item.subItems) {
      // 普通子菜单
      navigationStack.value.push({
        items: item.subItems,
        title: item.name,
        featured: item.featured,
        exploreLink: item.exploreLink,
        level: 1,
      })
    } else {
      // 没有子菜单，直接导航并记录路径
      navigation.setSelectedPath({ firstLevel: item.name })
      navigateTo(generatePath([item.name]))
      closeMenu()
    }
  }

  // 统一处理所有层级的点击
  const handleItemClick = (item: UnifiedMenuItem) => {
    const currentLevel = navigationStack.value.length
    console.log(`Mobile - 第${currentLevel}级菜单点击:`, item.name)
    isGoingBack.value = false

    // 构建当前路径
    const pathArray = navigationStack.value.map((nav) => nav.title)
    pathArray.push(item.name)

    // 在第二级检查场景3配置
    if (currentLevel === 1) {
      const parentName = navigationStack.value[0].title
      const menuKey = `${parentName}-${item.name}`
      const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

      if (secondLevelConfig) {
        console.log('Mobile - 场景3：显示特殊配置项', menuKey)
        navigationStack.value.push({
          items: secondLevelConfig,
          title: item.name,
          featured: null,
          exploreLink: null,
          level: 2,
        })
        return
      }
    }

    // 场景1：检查是否有三级菜单
    if (item.hasSubMenu && item.subItems) {
      console.log('Mobile - 场景1：进入下一级菜单')
      navigationStack.value.push({
        items: item.subItems,
        title: getMenuItemName(item),
        featured: null,
        exploreLink: null,
        level: currentLevel + 1,
      })
    } else {
      // 最终的菜单项，执行导航
      console.log('Mobile - 最终导航:', pathArray)

      // 根据层级设置选中路径
      const selectedPath: any = {}
      if (pathArray[0]) selectedPath.firstLevel = pathArray[0]
      if (pathArray[1]) selectedPath.secondLevel = pathArray[1]
      if (pathArray[2]) selectedPath.thirdLevel = pathArray[2]

      navigation.setSelectedPath(selectedPath)
      navigation.switchToDefault()

      // 导航到目标页面
      const path = item.link || generatePath(pathArray)
      navigateTo(path)
      closeMenu()
    }
  }

  // 关闭菜单并更新路径（用于 Featured 链接）
  const closeMenuAndUpdatePath = () => {
    // 设置当前路径
    const pathArray = navigationStack.value.map((nav) => nav.title)
    const selectedPath: any = {}
    if (pathArray[0]) selectedPath.firstLevel = pathArray[0]
    if (pathArray[1]) selectedPath.secondLevel = pathArray[1]

    navigation.setSelectedPath(selectedPath)
    closeMenu()
  }

  const goBack = () => {
    isGoingBack.value = true
    navigationStack.value.pop()
    // 重置方向标志
    setTimeout(() => {
      isGoingBack.value = false
    }, 300)
  }
</script>

<style scoped>
  /* Base Transitions */
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .slide-enter-from {
    transform: translateX(-100%);
  }

  .slide-leave-to {
    transform: translateX(-100%);
  }

  /* Icon switch transition */
  .icon-switch-enter-active,
  .icon-switch-leave-active {
    transition: all 0.2s ease;
  }

  .icon-switch-enter-from {
    opacity: 0;
    transform: rotate(-90deg);
  }

  .icon-switch-leave-to {
    opacity: 0;
    transform: rotate(90deg);
  }

  /* Title slide transition */
  .title-slide-enter-active,
  .title-slide-leave-active {
    transition: all 0.2s ease;
  }

  .title-slide-enter-from {
    opacity: 0;
    transform: translateX(20px);
  }

  .title-slide-leave-to {
    opacity: 0;
    transform: translateX(-20px);
  }

  /* Content navigation transitions */
  .slide-forward-enter-active,
  .slide-forward-leave-active,
  .slide-back-enter-active,
  .slide-back-leave-active {
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .slide-forward-enter-from {
    transform: translateX(100%);
  }

  .slide-forward-leave-to {
    transform: translateX(-30%);
    opacity: 0.5;
  }

  .slide-back-enter-from {
    transform: translateX(-30%);
    opacity: 0.5;
  }

  .slide-back-leave-to {
    transform: translateX(100%);
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    opacity: 0;
    animation: fadeIn 0.4s ease-out forwards;
  }

  .animate-slide-up {
    opacity: 0;
    animation: slideUp 0.5s ease-out forwards;
  }

  /* Smooth scrolling on iOS */
  .overscroll-contain {
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  /* Active states for better touch feedback */
  @media (hover: none) {
    button:active {
      transform: scale(0.98);
    }
  }

  /* Safe area for notched devices */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    .pb-20 {
      padding-bottom: calc(5rem + env(safe-area-inset-bottom));
    }
  }
</style>
