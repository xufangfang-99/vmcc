<template>
  <Transition name="slide">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9999"
    >
      <!-- Background gradient -->
      <div class="absolute inset-0">
        <div
          class="absolute inset-0"
          :style="{
            background: `linear-gradient(135deg, var(--tm-bg-primary) 0%, var(--tm-bg-secondary) 100%)`,
          }"
        ></div>
        <!-- Decorative elements -->
        <div
          class="absolute -top-20 -right-20 w-80 h-80 rounded-full op-5"
          :style="{
            background: `radial-gradient(circle, var(--tm-accent-primary), transparent)`,
          }"
        ></div>
      </div>

      <!-- Mobile Container -->
      <div class="relative h-full w-full flex flex-col">
        <!-- Mobile Header -->
        <div
          class="relative overflow-hidden"
          :style="{
            background:
              navigationStack.length === 0
                ? `linear-gradient(to bottom, var(--tm-bg-primary), transparent)`
                : 'transparent',
          }"
        >
          <div
            class="flex items-center justify-between p-5 transition-all duration-300"
            :style="{
              paddingTop: navigationStack.length === 0 ? '2rem' : '1.25rem',
              paddingBottom: navigationStack.length === 0 ? '1.5rem' : '1.25rem',
            }"
          >
            <!-- Back/Close Button -->
            <button
              class="relative p-3 -ml-3 rounded-2xl transition-all duration-300 hover:bg-white/10 active:scale-95"
              @click="navigationStack.length > 0 ? goBack() : closeMenu()"
            >
              <div class="relative">
                <Transition
                  name="icon-switch"
                  mode="out-in"
                >
                  <div
                    v-if="navigationStack.length === 0"
                    key="close"
                    class="i-carbon-close w-6 h-6"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                  ></div>
                  <div
                    v-else
                    key="back"
                    class="i-carbon-arrow-left w-6 h-6"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                  ></div>
                </Transition>
              </div>
              <!-- Ripple effect -->
              <div
                class="absolute inset-0 rounded-2xl bg-white/20 scale-0 active:scale-100 transition-transform duration-300"
              ></div>
            </button>

            <!-- Title with animation -->
            <div class="text-center flex-1 overflow-hidden px-4">
              <Transition
                name="title-slide"
                mode="out-in"
              >
                <div :key="currentTitle">
                  <h2
                    class="font-light m-0 transition-all duration-300"
                    :class="navigationStack.length === 0 ? 'text-2xl tracking-wider' : 'text-lg'"
                    :style="{
                      color:
                        navigationStack.length === 0
                          ? 'var(--tm-accent-primary)'
                          : 'var(--tm-txt-primary)',
                    }"
                  >
                    {{ currentTitle }}
                  </h2>
                  <p
                    v-if="currentSubtitle"
                    class="text-xs op-60 mt-2 font-light tracking-wide animate-fade-in"
                    :style="{ color: 'var(--tm-txt-secondary)' }"
                  >
                    {{ currentSubtitle }}
                  </p>
                </div>
              </Transition>
            </div>

            <!-- Balance placeholder -->
            <div class="w-12"></div>
          </div>

          <!-- Decorative line -->
          <div
            class="absolute bottom-0 left-0 right-0 h-px"
            :style="{
              background: `linear-gradient(to right, transparent, var(--tm-bd-light), transparent)`,
            }"
          ></div>
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
              <nav
                v-if="navigationStack.length === 0"
                class="py-4"
              >
                <!-- Menu Items with cards -->
                <ul class="list-none p-4 m-0 space-y-3">
                  <li
                    v-for="(item, index) in menuItems"
                    :key="item.name"
                    class="animate-slide-up op-0"
                    :style="{ animationDelay: `${index * 60}ms` }"
                  >
                    <button
                      class="group relative w-full p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 active:scale-98 active:bg-white/10"
                      @click="handleMenuClick(item)"
                    >
                      <div class="flex items-center justify-between">
                        <span
                          class="text-base font-normal transition-colors duration-300 group-active:text-[var(--tm-accent-primary)]"
                          :style="{ color: 'var(--tm-txt-primary)' }"
                        >
                          {{ item.name }}
                        </span>
                        <div
                          v-if="hasSubItemsOrConfig(item)"
                          class="i-carbon-chevron-right w-5 h-5 op-40 transition-all duration-300 group-active:translate-x-1 group-active:op-70"
                        ></div>
                      </div>
                      <!-- Gradient overlay on hover -->
                      <div
                        class="absolute inset-0 rounded-2xl op-0 group-active:op-100 transition-opacity duration-300 pointer-events-none"
                        :style="{
                          background: `linear-gradient(135deg, var(--tm-accent-primary) 0%, transparent 60%)`,
                        }"
                      ></div>
                    </button>
                  </li>
                </ul>

                <!-- Bottom Links with modern design -->
                <div class="mt-auto p-6">
                  <div
                    class="mb-6 h-px"
                    :style="{
                      background: `linear-gradient(to right, transparent 20%, var(--tm-bd-light) 50%, transparent 80%)`,
                    }"
                  ></div>
                  <div class="grid grid-cols-2 gap-3">
                    <NuxtLink
                      v-for="(link, index) in bottomLinks"
                      :key="link.name"
                      :to="link.path"
                      class="group relative py-4 px-5 text-center rounded-xl bg-gradient-to-br from-white/5 to-white/8 backdrop-blur-sm transition-all duration-300 active:scale-95 animate-fade-in op-0 overflow-hidden"
                      :style="{
                        animationDelay: `${(menuItems.length + index) * 60}ms`,
                      }"
                      @click="closeMenu"
                    >
                      <span
                        class="relative text-sm font-light transition-colors duration-300 group-active:text-[var(--tm-accent-primary)]"
                        :style="{ color: 'var(--tm-txt-secondary)' }"
                      >
                        {{ link.name }}
                      </span>
                      <!-- Shine effect -->
                      <div
                        class="absolute inset-0 -translate-x-full group-active:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      ></div>
                    </NuxtLink>
                  </div>
                </div>
              </nav>

              <!-- Submenu Navigation -->
              <nav
                v-else
                class="min-h-full"
              >
                <!-- Explore Link Banner with gradient -->
                <div
                  v-if="currentExploreLink"
                  class="sticky top-0 z-5 overflow-hidden"
                >
                  <div
                    class="absolute inset-0"
                    :style="{
                      background: `linear-gradient(135deg, var(--tm-accent-primary), var(--tm-accent-secondary))`,
                    }"
                  ></div>
                  <NuxtLink
                    :to="currentExploreLink.url"
                    class="relative flex items-center justify-between text-white no-underline px-6 py-5 group"
                    @click="closeMenuAndUpdatePath"
                  >
                    <div>
                      <span class="text-sm font-semibold uppercase tracking-wider">
                        {{ currentExploreLink.text }}
                      </span>
                      <div
                        class="h-0.5 w-0 bg-white/80 transition-all duration-300 group-active:w-full mt-1"
                      ></div>
                    </div>
                    <div
                      class="i-carbon-arrow-right w-5 h-5 transition-transform duration-300 group-active:translate-x-2"
                    ></div>
                  </NuxtLink>
                </div>

                <!-- Dynamic submenu content -->
                <div class="p-4 pb-20">
                  <!-- Handle groups -->
                  <template v-if="hasGroups">
                    <div
                      v-for="(group, groupIndex) in currentItems"
                      :key="`group-${groupIndex}`"
                      class="mb-8 animate-fade-in op-0"
                      :style="{ animationDelay: `${groupIndex * 100}ms` }"
                    >
                      <h3
                        v-if="group.title || group.isGroup"
                        class="flex items-center gap-3 mb-4 px-2"
                      >
                        <span
                          class="w-8 h-px"
                          :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
                        ></span>
                        <span
                          class="text-xs font-bold tracking-wider uppercase"
                          :style="{ color: 'var(--tm-accent-primary)' }"
                        >
                          {{ group.title || group.name }}
                        </span>
                      </h3>
                      <ul
                        v-if="group.subItems"
                        class="list-none p-0 m-0 space-y-2"
                      >
                        <li
                          v-for="(item, itemIndex) in group.subItems"
                          :key="`${group.title || group.name}-${item.name}-${itemIndex}`"
                          class="animate-slide-up op-0"
                          :style="{ animationDelay: `${groupIndex * 100 + itemIndex * 40}ms` }"
                        >
                          <button
                            class="group relative w-full p-4 rounded-xl bg-white/3 transition-all duration-300 active:bg-white/8 active:scale-98 text-left"
                            @click="handleItemClick(item)"
                          >
                            <div class="flex items-center justify-between">
                              <span
                                class="text-base transition-colors duration-300"
                                :class="{
                                  'font-medium': hasSubItemsOrConfig(item),
                                  'group-active:text-[var(--tm-accent-primary)]': true,
                                }"
                                :style="{ color: 'var(--tm-txt-primary)' }"
                              >
                                {{ item.name }}
                              </span>
                              <div
                                v-if="hasSubItemsOrConfig(item)"
                                class="i-carbon-chevron-right w-5 h-5 op-40 transition-all duration-300 group-active:translate-x-1"
                              ></div>
                            </div>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </template>

                  <!-- Regular items -->
                  <ul
                    v-else
                    class="list-none p-0 m-0 space-y-2"
                  >
                    <li
                      v-for="(item, index) in currentItems"
                      :key="`item-${index}`"
                      class="animate-slide-up op-0"
                      :style="{ animationDelay: `${index * 60}ms` }"
                    >
                      <button
                        class="group relative w-full p-4 rounded-xl bg-white/3 transition-all duration-300 active:bg-white/8 active:scale-98 text-left"
                        @click="handleItemClick(item)"
                      >
                        <div class="flex items-center justify-between">
                          <span
                            class="text-base transition-colors duration-300"
                            :class="{
                              'font-medium': hasSubItemsOrConfig(item),
                              'group-active:text-[var(--tm-accent-primary)]': true,
                            }"
                            :style="{ color: 'var(--tm-txt-primary)' }"
                          >
                            {{ item.name }}
                          </span>
                          <div
                            v-if="hasSubItemsOrConfig(item)"
                            class="i-carbon-chevron-right w-5 h-5 op-40 transition-all duration-300 group-active:translate-x-1"
                          ></div>
                        </div>
                      </button>
                    </li>
                  </ul>

                  <!-- Featured section with modern cards -->
                  <div
                    v-if="currentFeatured"
                    class="mt-10"
                  >
                    <h3 class="flex items-center gap-3 mb-6 px-2">
                      <span
                        class="w-8 h-px"
                        :style="{ backgroundColor: 'var(--tm-accent-primary)' }"
                      ></span>
                      <span
                        class="text-xs font-bold tracking-wider uppercase"
                        :style="{ color: 'var(--tm-accent-primary)' }"
                      >
                        {{ currentFeatured.title }}
                      </span>
                    </h3>
                    <div class="space-y-4">
                      <NuxtLink
                        v-for="(item, index) in currentFeatured.items"
                        :key="item.name"
                        :to="item.link"
                        class="group block relative p-5 rounded-2xl overflow-hidden transition-all duration-300 active:scale-98 animate-fade-in op-0"
                        :style="{
                          animationDelay: `${index * 100 + 300}ms`,
                          background: `linear-gradient(135deg, var(--tm-bg-accent-gradient-from) 0%, var(--tm-bg-accent-gradient-to) 100%)`,
                        }"
                        @click="closeMenuAndUpdatePath"
                      >
                        <div class="relative z-10">
                          <h4
                            class="text-lg font-medium mb-2"
                            :style="{ color: 'var(--tm-txt-white)' }"
                          >
                            {{ item.name }}
                          </h4>
                          <p
                            v-if="item.description"
                            class="text-sm leading-relaxed op-90 mb-3"
                            :style="{ color: 'var(--tm-txt-white)' }"
                          >
                            {{ item.description }}
                          </p>
                          <div class="flex items-center gap-2 text-white">
                            <span class="text-xs font-medium uppercase tracking-wider op-80">
                              Learn More
                            </span>
                            <div
                              class="i-carbon-arrow-right w-4 h-4 transition-transform duration-300 group-active:translate-x-2"
                            ></div>
                          </div>
                        </div>
                        <!-- Gradient overlay -->
                        <div
                          class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent op-0 group-active:op-100 transition-opacity duration-300"
                        ></div>
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
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
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
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .icon-switch-enter-from {
    opacity: 0;
    transform: scale(0.8) rotate(-90deg);
  }

  .icon-switch-leave-to {
    opacity: 0;
    transform: scale(0.8) rotate(90deg);
  }

  /* Title slide transition */
  .title-slide-enter-active,
  .title-slide-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .title-slide-enter-from {
    opacity: 0;
    transform: translateY(-10px);
  }

  .title-slide-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }

  /* Content navigation transitions */
  .slide-forward-enter-active,
  .slide-forward-leave-active,
  .slide-back-enter-active,
  .slide-back-leave-active {
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .slide-forward-enter-from {
    transform: translateX(100%);
    opacity: 0.5;
  }

  .slide-forward-leave-to {
    transform: translateX(-50%);
    opacity: 0;
  }

  .slide-back-enter-from {
    transform: translateX(-50%);
    opacity: 0;
  }

  .slide-back-leave-to {
    transform: translateX(100%);
    opacity: 0.5;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
    animation: fadeIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .animate-slide-up {
    animation: slideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  /* Smooth scrolling on iOS */
  .overscroll-contain {
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }

  /* Safe area for notched devices */
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    .pb-20 {
      padding-bottom: calc(5rem + env(safe-area-inset-bottom));
    }
  }
</style>
