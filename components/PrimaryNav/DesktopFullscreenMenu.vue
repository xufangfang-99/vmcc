<template>
  <Transition name="menu-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9999 flex"
    >
      <!-- Animated Background -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute inset-0"
          :style="{
            background: `linear-gradient(to bottom right, var(--tm-bg-primary), var(--tm-bg-secondary), var(--tm-bg-primary))`,
          }"
        ></div>
        <div
          class="absolute top-0 right-0 w-200 h-200 rounded-full op-5 animate-float"
          :style="{
            background: `radial-gradient(circle, var(--tm-accent-primary) 0%, transparent 70%)`,
          }"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-150 h-150 rounded-full op-5 animate-float-reverse"
          :style="{
            background: `radial-gradient(circle, var(--tm-accent-secondary) 0%, transparent 70%)`,
          }"
        ></div>
      </div>

      <!-- Left Panel - Navigation -->
      <div
        class="relative w-1/3 min-w-100 flex flex-col h-screen overflow-y-auto"
        :style="{
          backgroundColor: 'var(--tm-bg-primary)',
          borderRight: '1px solid var(--tm-bd-secondary)',
        }"
      >
        <!-- Header with Close Button -->
        <div class="p-10 pb-8">
          <div class="flex items-start justify-between">
            <div class="logo-section">
              <!-- Animated Logo -->
              <div class="relative">
                <h2
                  class="text-4xl font-thin m-0 tracking-wider animate-slide-in-left"
                  :style="{ color: 'var(--tm-accent-primary)' }"
                >
                  VMMC
                </h2>
                <div
                  class="absolute -bottom-2 left-0 h-px w-full animate-expand"
                  :style="{
                    background: `linear-gradient(to right, var(--tm-accent-primary), transparent)`,
                  }"
                ></div>
              </div>
              <p
                class="text-xs font-light mt-3 op-80 tracking-wide"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                Victor Meridian Management
                <br />
                Consultancies L.L.C
              </p>
            </div>

            <!-- Close Button -->
            <button
              class="group relative p-3 -mr-3 -mt-3"
              @click="closeMenu"
            >
              <div
                class="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"
              ></div>
              <div
                class="relative i-carbon-close w-6 h-6 transition-transform duration-300 group-hover:rotate-90"
              ></div>
            </button>
          </div>
        </div>

        <!-- Main Menu Items -->
        <nav class="flex-1 px-10">
          <ul class="list-none p-0 m-0">
            <li
              v-for="(item, index) in menuItems"
              :key="item.name"
              class="relative mb-2 animate-slide-in-left op-0"
              :style="{ animationDelay: `${index * 50}ms` }"
            >
              <button
                class="group flex items-center justify-between px-6 py-5 w-full rounded-lg transition-all duration-300 hover:bg-white/10"
                :class="{
                  'bg-white/5': activeMenu === item.name,
                }"
                @click="handleMenuClick(item)"
              >
                <!-- Hover Background -->
                <div
                  class="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent op-0 group-hover:op-100 transition-opacity duration-300"
                ></div>

                <!-- Menu Text -->
                <span
                  class="relative text-lg font-light tracking-wide transition-all duration-300"
                  :style="{
                    color:
                      activeMenu === item.name
                        ? 'var(--tm-accent-primary)'
                        : 'var(--tm-txt-primary)',
                  }"
                >
                  {{ item.name }}
                </span>

                <!-- Arrow Icon -->
                <div
                  v-if="item.hasSubMenu"
                  class="i-carbon-chevron-right w-6 h-6 transition-transform duration-300"
                  :class="{
                    'rotate-90': activeMenu === item.name,
                  }"
                ></div>
              </button>

              <!-- Active Indicator -->
              <div
                v-if="activeMenu === item.name"
                class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full"
                :style="{
                  backgroundColor: 'var(--tm-accent-primary)',
                  boxShadow: '0 0 10px var(--tm-accent-primary)',
                }"
              ></div>
            </li>
          </ul>
        </nav>

        <!-- Bottom Links with Creative Design -->
        <div class="p-10 pt-8">
          <div class="relative mb-8">
            <div
              class="h-px"
              :style="{
                background: `linear-gradient(to right, transparent, var(--tm-bd-primary), transparent)`,
              }"
            ></div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <a
              v-for="(link, index) in bottomLinks"
              :key="link.name"
              :href="link.path"
              class="group relative p-4 rounded-lg text-center overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 animate-fade-in-up op-0"
              :style="{ animationDelay: `${index * 100 + 300}ms` }"
              @click="closeMenu"
            >
              <span
                class="relative text-sm font-light op-70 group-hover:op-100 transition-opacity duration-300"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                {{ link.name }}
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Panel - Submenu Content -->
      <div
        v-if="activeMenu"
        class="relative flex-1 flex flex-col h-screen overflow-hidden"
        :style="{
          backgroundColor: 'var(--tm-bg-secondary)',
        }"
      >
        <!-- Top Spacing -->
        <div class="h-16"></div>

        <!-- Content Area with Animations -->
        <div class="flex-1 px-16 pb-16 overflow-y-auto">
          <!-- Animated Header -->
          <div class="flex items-end justify-between mb-12">
            <div>
              <h2
                class="text-6xl font-thin leading-tight animate-slide-in-right"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                {{ activeMenu }}
              </h2>
              <div
                class="mt-4 h-1 w-50 rounded-full animate-expand"
                :style="{
                  background: `linear-gradient(to right, var(--tm-accent-primary), transparent)`,
                }"
              ></div>
            </div>

            <NuxtLink
              v-if="activeExploreLink"
              :to="activeExploreLink.url"
              class="group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 hover:bg-[var(--tm-accent-primary)] animate-fade-in-up"
              :style="{ borderColor: 'var(--tm-accent-primary)' }"
              @click="closeMenu"
            >
              <span
                class="text-sm font-medium tracking-wider uppercase transition-colors duration-300 group-hover:text-white"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                {{ activeExploreLink.text }}
              </span>
              <div
                class="i-carbon-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              ></div>
            </NuxtLink>
          </div>

          <!-- Submenu Items with Cards -->
          <div class="flex gap-16">
            <!-- Main submenu content -->
            <div class="flex-1">
              <!-- Grouped Menu Style -->
              <div v-if="isGroupedMenu">
                <div
                  v-for="(group, groupIndex) in activeSubmenu"
                  :key="`group-${groupIndex}`"
                  class="mb-16 animate-fade-in-up op-0"
                  :style="{ animationDelay: `${groupIndex * 100}ms` }"
                >
                  <h3
                    v-if="group.title || group.isGroup"
                    class="text-sm font-bold mb-6 tracking-0.2em uppercase flex items-center gap-4"
                    :style="{ color: 'var(--tm-accent-primary)' }"
                  >
                    <span class="block w-12 h-px bg-current"></span>
                    {{ group.title || group.name }}
                  </h3>
                  <div
                    v-if="group.subItems && group.subItems.length > 0"
                    class="grid grid-cols-2 gap-4"
                  >
                    <a
                      v-for="(item, itemIndex) in group.subItems"
                      :key="`${group.title || group.name}-${item.name}-${itemIndex}`"
                      :href="
                        item.link ||
                        generatePath([activeMenu, group.title || group.name, item.name])
                      "
                      class="group relative p-5 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-[var(--tm-accent-primary)] animate-fade-in-up op-0"
                      :style="{ animationDelay: `${itemIndex * 50}ms` }"
                      @click.prevent="handleNavigation(item, activeMenu)"
                    >
                      <span
                        class="text-base font-light leading-relaxed transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
                        :style="{ color: 'var(--tm-txt-primary)' }"
                      >
                        {{ item.name }}
                      </span>
                      <div
                        class="absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                        :style="{
                          background: `linear-gradient(to right, var(--tm-accent-primary), transparent)`,
                        }"
                      ></div>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Regular Grid Layout -->
              <div
                v-else-if="activeSubmenu && activeSubmenu.length > 0"
                class="grid grid-cols-2 gap-4"
              >
                <a
                  v-for="(subItem, index) in activeSubmenu"
                  :key="`${activeMenu}-${subItem.name}-${index}`"
                  :href="subItem.link || generatePath([activeMenu, subItem.name])"
                  class="group relative p-5 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-[var(--tm-accent-primary)] animate-fade-in-up op-0"
                  :style="{ animationDelay: `${index * 50}ms` }"
                  @click.prevent="handleNavigation(subItem, activeMenu)"
                >
                  <span
                    class="text-base font-light leading-relaxed transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                  >
                    {{ subItem.name }}
                  </span>
                  <div
                    class="absolute bottom-0 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    :style="{
                      background: `linear-gradient(to right, var(--tm-accent-primary), transparent)`,
                    }"
                  ></div>
                </a>
              </div>
            </div>

            <!-- Featured section with modern design -->
            <div
              v-if="activeFeatured"
              class="w-95 sticky top-0"
            >
              <h3
                class="text-sm font-bold mb-8 tracking-0.2em uppercase flex items-center gap-4"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                <span class="block w-12 h-px bg-current"></span>
                {{ activeFeatured.title }}
              </h3>
              <div class="space-y-6">
                <NuxtLink
                  v-for="(item, index) in activeFeatured.items"
                  :key="item.name"
                  :to="item.link"
                  class="group block p-6 rounded-xl bg-white/8 border border-white/15 transition-all duration-300 hover:scale-105 hover:border-[var(--tm-accent-primary)] hover:bg-white/12 animate-slide-in-right op-0"
                  :style="{ animationDelay: `${index * 100 + 200}ms` }"
                  @click="closeMenu"
                >
                  <h4
                    class="text-xl font-medium mb-3 transition-colors duration-300 group-hover:text-[var(--tm-accent-primary)]"
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
                  <div class="mt-4 flex items-center gap-2 text-[var(--tm-accent-primary)]">
                    <span class="text-xs font-medium uppercase tracking-wider">Learn More</span>
                    <div
                      class="i-carbon-arrow-right w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    ></div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
  import { navigateTo } from 'nuxt/app'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuData } from '~/composables/useMenuData'
  import type { MenuItem, UnifiedMenuItem, BottomLink } from '~/components/NavMenu.types'
  import { generatePath } from '~/components/NavMenu.types'

  interface Props {
    open: boolean
    menuItems: MenuItem[]
    bottomLinks: BottomLink[]
  }

  const props = defineProps<Props>()
  const navigation = useNavigation()
  const { specialMenuConfigs, industriesThirdLevelItems } = useMenuData()

  const emit = defineEmits<{
    'update:open': [value: boolean]
  }>()

  const isOpen = computed({
    get: () => props.open,
    set: (value) => {
      emit('update:open', value)
      // 当菜单打开时，检查是否需要设置默认选中项
      if (value && !activeMenu.value) {
        const firstWithSubmenu = props.menuItems.find((item) => item.hasSubMenu)
        if (firstWithSubmenu) {
          activeMenu.value = firstWithSubmenu.name
        }
      }
    },
  })

  const activeMenu = ref<string>('')

  const activeSubmenu = computed(() => {
    const item = props.menuItems.find((i) => i.name === activeMenu.value)
    return item?.subItems || []
  })

  const activeFeatured = computed(() => {
    const item = props.menuItems.find((i) => i.name === activeMenu.value)
    return item?.featured || null
  })

  const activeExploreLink = computed(() => {
    const item = props.menuItems.find((i) => i.name === activeMenu.value)
    return item?.exploreLink || null
  })

  const isGroupedMenu = computed(() => {
    const submenu = activeSubmenu.value
    return submenu.length > 0 && (submenu[0].isGroup === true || !!submenu[0].title)
  })

  // 监听菜单打开状态
  watch(
    () => props.open,
    (newValue) => {
      if (newValue && !activeMenu.value) {
        // 如果打开菜单但没有选中项，默认选中第一个有子菜单的项
        const firstWithSubmenu = props.menuItems.find((item) => item.hasSubMenu)
        if (firstWithSubmenu) {
          activeMenu.value = firstWithSubmenu.name
        }
      }
    }
  )

  const closeMenu = () => {
    isOpen.value = false
    // 关闭菜单时不清空选中状态，保留用户上次的选择
    // activeMenu.value = ''
  }

  const handleMenuClick = (item: MenuItem) => {
    if (item.hasSubMenu) {
      activeMenu.value = item.name
      navigation.setSelectedPath({ firstLevel: item.name })
    } else {
      const firstLevelConfig = specialMenuConfigs.firstLevel[item.name]

      if (firstLevelConfig) {
        console.log('Desktop menu - 场景2触发：', item.name)
        navigation.setSelectedPath({ firstLevel: item.name })
        navigation.switchToCustom(
          firstLevelConfig,
          `/${item.name.toLowerCase().replace(/\s+/g, '-')}`
        )
      } else {
        navigation.setSelectedPath({ firstLevel: item.name })
        navigateTo(generatePath([item.name]))
      }
      closeMenu()
    }
  }

  // 🔥 修复后的 handleNavigation 函数
  const handleNavigation = (item: UnifiedMenuItem, parentName: string) => {
    console.log('Desktop menu navigation:', parentName, '->', item.name)

    // 🔥 新增：特殊处理 Industries 的二级菜单 - 显示固定的三级菜单
    if (parentName === 'Industries') {
      console.log('Desktop menu - Industries 二级菜单触发：显示固定三级菜单')

      // 构建基础路径
      const basePath = `/industries/${item.name.toLowerCase().replace(/\s+/g, '-')}`

      // 生成固定的三级菜单结构
      const thirdLevelItems = industriesThirdLevelItems.map((thirdItem) => ({
        name: thirdItem,
        link: `${basePath}/${thirdItem.toLowerCase().replace(/\s+/g, '-')}`,
        hasSubMenu: false,
      }))

      // 更新选中路径
      navigation.setSelectedPath({
        firstLevel: parentName,
        secondLevel: item.name,
      })

      // 切换到自定义导航显示三级菜单
      navigation.switchToCustom(thirdLevelItems, basePath)
      closeMenu()
      return
    }

    // 原有逻辑保持不变
    const basePath = `/${parentName.toLowerCase().replace(/\s+/g, '-')}/${item.name.toLowerCase().replace(/\s+/g, '-')}`

    const menuKey = `${parentName}-${item.name}`
    const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

    if (secondLevelConfig) {
      console.log('Desktop menu - 场景3触发：', menuKey)
      navigation.setSelectedPath({
        firstLevel: parentName,
        secondLevel: item.name,
      })
      navigation.switchToCustom(secondLevelConfig, basePath)
    } else if (item.hasSubMenu && item.subItems) {
      console.log('Desktop menu - 场景1触发：显示三级菜单')
      navigation.setSelectedPath({
        firstLevel: parentName,
        secondLevel: item.name,
      })
      navigation.switchToCustom(
        item.subItems.map((subItem) => ({
          name: subItem.name,
          link: subItem.link || `${basePath}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`,
        })),
        basePath
      )
    } else {
      console.log('Desktop menu - 恢复默认导航并显示选中菜单')
      navigation.switchToDefaultWithPath(parentName, item.name)
      const path = item.link || generatePath([parentName, item.name])
      navigateTo(path)
    }

    closeMenu()
  }
</script>

<style scoped>
  /* 基础动画定义 */
  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0) scale(1);
    }
    33% {
      transform: translate(30px, -30px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
  }

  @keyframes expand {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* UnoCSS 动画类 */
  .animate-float {
    animation: float 20s ease-in-out infinite;
  }

  .animate-float-reverse {
    animation: float 25s ease-in-out infinite reverse;
  }

  .animate-expand {
    animation: expand 1s ease-out forwards;
  }

  .animate-slide-in-left {
    animation: slideInLeft 0.5s ease-out forwards;
  }

  .animate-slide-in-right {
    animation: slideInRight 0.5s ease-out forwards;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.5s ease-out forwards;
  }

  /* 过渡效果 */
  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: opacity 0.4s ease;
  }

  .menu-fade-enter-from,
  .menu-fade-leave-to {
    opacity: 0;
  }

  .menu-fade-enter-active .animate-slide-in-left,
  .menu-fade-enter-active .animate-slide-in-right,
  .menu-fade-enter-active .animate-fade-in-up {
    animation-play-state: running;
  }
</style>
