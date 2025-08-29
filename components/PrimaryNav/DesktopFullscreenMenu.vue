<template>
  <Transition name="menu-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9999"
      :style="{ backgroundColor: 'var(--tm-bg-primary)' }"
    >
      <!-- Header -->
      <div class="flex justify-between items-center p-8 pb-6">
        <div>
          <h1
            class="text-4xl font-thin tracking-wider"
            :style="{ color: 'var(--tm-accent-primary)' }"
          >
            VMMC
          </h1>
          <p
            class="text-sm opacity-70 mt-2"
            :style="{ color: 'var(--tm-txt-secondary)' }"
          >
            Victor Meridian Management Consultancies L.L.C
          </p>
        </div>

        <button
          class="p-3 hover:bg-[var(--tm-bg-hover)] rounded-lg transition-colors"
          @click="closeMenu"
        >
          <div
            class="i-carbon-close w-7 h-7"
            :style="{ color: 'var(--tm-txt-primary)' }"
          ></div>
        </button>
      </div>

      <!-- Main Content -->
      <div class="flex h-[calc(100vh-140px)]">
        <!-- Left Sidebar - Menu -->
        <div class="w-80 p-8 pr-4">
          <nav>
            <ul class="space-y-1">
              <li
                v-for="item in menuItems"
                :key="item.name"
              >
                <button
                  class="w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between group hover:bg-[var(--tm-bg-hover)]"
                  :class="{
                    'bg-[var(--tm-bg-active)] border border-[var(--tm-accent-primary)]':
                      selectedMenu === item.name,
                    'border border-transparent': selectedMenu !== item.name,
                  }"
                  @click="selectMenu(item)"
                >
                  <span
                    class="text-lg font-light"
                    :style="{
                      color:
                        selectedMenu === item.name
                          ? 'var(--tm-accent-primary)'
                          : 'var(--tm-txt-primary)',
                    }"
                  >
                    {{ item.name }}
                  </span>

                  <div
                    v-if="item.hasSubMenu"
                    class="i-carbon-chevron-right w-5 h-5 transition-transform duration-200 opacity-50 group-hover:opacity-100"
                    :class="{ 'rotate-90': selectedMenu === item.name }"
                    :style="{ color: 'var(--tm-txt-light)' }"
                  ></div>
                </button>
              </li>
            </ul>
          </nav>

          <!-- Bottom Links -->
          <div
            v-if="bottomLinks.length > 0"
            class="mt-8 pt-6 border-t border-[var(--tm-bd-light)]"
          >
            <div class="grid grid-cols-2 gap-3">
              <NuxtLink
                v-for="link in bottomLinks"
                :key="link.name"
                :to="link.path"
                class="p-3 rounded-lg text-center text-sm transition-colors hover:bg-[var(--tm-bg-hover)] border border-[var(--tm-bd-card)]"
                :style="{ color: 'var(--tm-txt-secondary)' }"
                @click="closeMenu"
              >
                {{ link.name }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Right Content Area -->
        <div
          class="flex-1 p-8 pl-4 overflow-y-auto"
          :style="{ borderLeft: '1px solid var(--tm-bd-light)' }"
        >
          <!-- Default State -->
          <div
            v-if="!selectedMenu"
            class="h-full flex items-center justify-center"
          >
            <div class="text-center">
              <div
                class="i-carbon-menu w-20 h-20 mx-auto mb-6 opacity-20"
                :style="{ color: 'var(--tm-txt-light)' }"
              ></div>
              <h3
                class="text-2xl font-light mb-3"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                Welcome to VMMC
              </h3>
              <p
                class="text-lg opacity-60"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                Select a menu item to explore our services
              </p>
            </div>
          </div>

          <!-- Menu Content -->
          <div v-else-if="currentSubmenu.length > 0">
            <h2
              class="text-5xl font-thin mb-8"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              {{ selectedMenu }}
            </h2>

            <div class="grid grid-cols-2 gap-6">
              <button
                v-for="subItem in currentSubmenu"
                :key="subItem.name"
                class="group p-6 rounded-xl text-left transition-all duration-200 border hover:shadow-lg"
                :class="{
                  'bg-[var(--tm-bg-active)] border-[var(--tm-accent-primary)] shadow-lg':
                    isActiveSubItem(subItem),
                  'bg-[var(--tm-bg-card)] border-[var(--tm-bd-card)] hover:bg-[var(--tm-bg-hover)]':
                    !isActiveSubItem(subItem),
                }"
                @click="navigateToSubItem(subItem)"
              >
                <h3
                  class="text-xl font-medium mb-2 group-hover:text-[var(--tm-accent-primary)] transition-colors"
                  :style="{
                    color: isActiveSubItem(subItem)
                      ? 'var(--tm-accent-primary)'
                      : 'var(--tm-txt-primary)',
                  }"
                >
                  {{ subItem.name }}
                </h3>

                <p
                  v-if="subItem.description"
                  class="text-sm opacity-70"
                  :style="{ color: 'var(--tm-txt-secondary)' }"
                >
                  {{ subItem.description }}
                </p>

                <!-- Arrow indicator -->
                <div
                  class="inline-flex items-center mt-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  :style="{ color: 'var(--tm-accent-primary)' }"
                >
                  Learn more
                  <div class="i-carbon-arrow-right w-4 h-4 ml-2"></div>
                </div>
              </button>
            </div>
          </div>

          <!-- No Submenu State -->
          <div
            v-else
            class="h-full flex items-center justify-center"
          >
            <div class="text-center">
              <h2
                class="text-4xl font-thin mb-6"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                {{ selectedMenu }}
              </h2>
              <p
                class="text-lg opacity-60 mb-8"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                This section is coming soon
              </p>
              <button
                class="px-6 py-3 rounded-lg border transition-colors hover:bg-[var(--tm-bg-hover)]"
                :style="{
                  color: 'var(--tm-accent-primary)',
                  borderColor: 'var(--tm-accent-primary)',
                }"
                @click="navigateToSection"
              >
                Go to {{ selectedMenu }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import type { MenuItem, UnifiedMenuItem, BottomLink } from '~/components/NavMenu.types'
  import { useNavigation } from '~/composables/useNavigation'
  import { useMenuHandler } from '~/composables/useMenuHandler'

  interface Props {
    open: boolean
    menuItems: MenuItem[]
    bottomLinks: BottomLink[]
  }

  const props = defineProps<Props>()
  const emit = defineEmits<{ 'update:open': [value: boolean] }>()

  const { generateSlug } = useMenuHandler()
  const navigation = useNavigation()
  const route = useRoute()

  const isOpen = computed({
    get: () => props.open,
    set: (value: boolean) => emit('update:open', value),
  })

  const selectedMenu = ref<string>('')

  // 获取当前选中菜单的子菜单项
  const currentSubmenu = computed((): UnifiedMenuItem[] => {
    if (!selectedMenu.value) return []

    const menuItem = props.menuItems.find((item) => item.name === selectedMenu.value)
    return menuItem?.subItems || []
  })

  // 生成路径
  const generatePath = (segments: string[]): string => {
    return '/' + segments.map(generateSlug).join('/')
  }

  // 检查子菜单项是否激活
  const isActiveSubItem = (subItem: UnifiedMenuItem): boolean => {
    if (!selectedMenu.value) return false

    const path = subItem.link || generatePath([selectedMenu.value, subItem.name])
    return route.path === path || route.path.startsWith(path + '/')
  }

  // 选择菜单项
  const selectMenu = (item: MenuItem) => {
    console.log(
      'Selecting menu:',
      item.name,
      'hasSubMenu:',
      item.hasSubMenu,
      'subItems:',
      item.subItems?.length
    )

    // 特殊处理首页
    if (item.isHome || item.link === '/') {
      navigation.clearSelectedPath()
      navigateTo('/')
      closeMenu()
      return
    }

    if (item.hasSubMenu && item.subItems && item.subItems.length > 0) {
      // 有子菜单项，显示子菜单
      selectedMenu.value = item.name
      navigation.setSelectedPath({ firstLevel: item.name })
      console.log('Set selectedMenu to:', selectedMenu.value, 'subItems:', item.subItems)
    } else {
      // 无子菜单，直接导航
      navigation.setSelectedPath({ firstLevel: item.name })
      navigation.switchToDefault()
      const path = item.link || generatePath([item.name])
      navigateTo(path)
      closeMenu()
    }
  }

  // 导航到子菜单项
  const navigateToSubItem = (subItem: UnifiedMenuItem) => {
    if (!selectedMenu.value) return

    console.log('Navigating to subItem:', selectedMenu.value, '->', subItem.name)

    navigation.setSelectedPath({
      firstLevel: selectedMenu.value,
      secondLevel: subItem.name,
    })

    navigation.switchToDefault()

    const path = subItem.link || generatePath([selectedMenu.value, subItem.name])

    // 处理锚点链接
    if (path.includes('#')) {
      const [pathname, hash] = path.split('#')

      if (!pathname || pathname === route.path) {
        // 同页面锚点导航
        nextTick(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        })
      } else {
        navigateTo(path)
      }
    } else {
      navigateTo(path)
    }

    closeMenu()
  }

  // 导航到当前选中的主菜单页面
  const navigateToSection = () => {
    if (!selectedMenu.value) return

    const menuItem = props.menuItems.find((item) => item.name === selectedMenu.value)
    const path = menuItem?.link || generatePath([selectedMenu.value])

    navigation.setSelectedPath({ firstLevel: selectedMenu.value })
    navigation.switchToDefault()
    navigateTo(path)
    closeMenu()
  }

  // 关闭菜单
  const closeMenu = () => {
    isOpen.value = false
    // 延迟重置以避免动画期间闪烁
    setTimeout(() => {
      selectedMenu.value = ''
    }, 300)
  }

  // 监听菜单开关状态，自动选择第一个有子菜单的项目
  watch(
    () => props.open,
    (newValue) => {
      if (newValue) {
        // 菜单打开时，自动选择第一个有子菜单的项目
        const firstWithSubmenu = props.menuItems.find(
          (item) => item.hasSubMenu && item.subItems && item.subItems.length > 0
        )

        if (firstWithSubmenu) {
          selectedMenu.value = firstWithSubmenu.name
          navigation.setSelectedPath({ firstLevel: firstWithSubmenu.name })
          console.log(
            'Auto-selected menu:',
            firstWithSubmenu.name,
            'with',
            firstWithSubmenu.subItems?.length,
            'sub items'
          )
        }
      } else {
        // 菜单关闭时重置状态
        setTimeout(() => {
          selectedMenu.value = ''
        }, 300)
      }
    }
  )
</script>

<style scoped>
  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .menu-fade-enter-from,
  .menu-fade-leave-to {
    opacity: 0;
  }
</style>
