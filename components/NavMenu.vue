<template>
  <nav class="flex items-center">
    <ul class="flex items-center gap-6 list-none p-0 m-0">
      <li
        v-for="item in menuItems"
        :key="item.name"
        ref="menuItemRefs"
        class="relative"
      >
        <a
          class="group relative flex items-center gap-1 px-2 text-base font-normal cursor-pointer transition-colors hover:text-[var(--tm-accent-primary)] no-underline"
          :class="{
            'text-[var(--tm-accent-primary)]': isMenuActive(item),
            'py-2': hasVerticalLayout,
            'py-4': !hasVerticalLayout,
          }"
          :style="{
            color: isMenuActive(item) ? 'var(--tm-accent-primary)' : 'var(--tm-txt-primary)',
          }"
          @mouseenter="() => handleMouseEnter(item)"
          @click="handleNavClick(item)"
        >
          {{ item.name }}
          <span
            v-if="item.hasSubMenu"
            class="inline-flex items-center transition-transform duration-200"
            :class="{ 'rotate-180': activeItem?.name === item.name && showSubmenu }"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <!-- Underline animation -->
          <span
            class="absolute bottom-2 left-2 right-2 h-0.5 bg-[var(--tm-accent-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
            :class="{ '!scale-x-100': isMenuActive(item) }"
          ></span>
        </a>

        <!-- Dropdown submenu -->
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="showSubmenu && activeItem?.name === item.name && item.hasSubMenu"
            class="absolute top-full z-[9999]"
            :style="getSubmenuStyle(item)"
            @mouseenter="handleSubmenuMouseEnter"
            @mouseleave="handleSubmenuMouseLeave"
          >
            <!-- Connection area to prevent hover gap -->
            <div class="h-2"></div>

            <!-- Actual dropdown content -->
            <div
              class="rounded-lg p-6"
              :style="{
                backgroundColor: 'var(--tm-bg-card)',
                border: '1px solid var(--tm-bd-card)',
                boxShadow: 'var(--tm-shadow-hover)',
              }"
            >
              <!-- Layout with Featured section -->
              <div
                v-if="item.featured"
                class="flex gap-8"
              >
                <!-- Left: Main content -->
                <div class="flex-1">
                  <!-- Grouped menus (e.g., Our Insights, About Us) -->
                  <div v-if="hasGroups(item)">
                    <div
                      v-for="(group, groupIndex) in item.subItems"
                      :key="`group-${groupIndex}`"
                      class="mb-6 last:mb-0"
                    >
                      <h3
                        v-if="group.title || group.isGroup"
                        class="text-xs font-bold mb-3 tracking-wider uppercase"
                        :style="{ color: 'var(--tm-txt-light)' }"
                      >
                        {{ group.title || group.name }}
                      </h3>
                      <div
                        v-if="group.subItems && group.subItems.length > 0"
                        :class="getGridCols(item)"
                      >
                        <a
                          v-for="(subItem, index) in group.subItems"
                          :key="`${group.title || group.name}-${subItem.name}-${index}`"
                          :href="
                            subItem.link ||
                            generatePath([item.name, group.title || group.name, subItem.name])
                          "
                          class="group/item relative block px-3 py-2 text-sm rounded transition-all duration-200 cursor-pointer overflow-hidden no-underline"
                          :style="{ color: 'var(--tm-txt-secondary)' }"
                          @click.prevent="handleSubItemClick(item, subItem)"
                          @mouseenter="(e: any) => handleDropdownHover(e, true)"
                          @mouseleave="(e: any) => handleDropdownHover(e, false)"
                        >
                          <span class="relative z-10">{{ subItem.name }}</span>
                          <!-- Left border animation -->
                          <span
                            class="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-0 bg-[var(--tm-accent-primary)] group-hover/item:h-[70%] transition-all duration-300"
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- Regular list menus (e.g., Capabilities) -->
                  <div
                    v-else-if="item.subItems && item.subItems.length > 0"
                    :class="getGridCols(item)"
                  >
                    <a
                      v-for="(subItem, index) in item.subItems"
                      :key="`${subItem.name}-${index}`"
                      :href="subItem.link || generatePath([item.name, subItem.name])"
                      class="group/item relative block px-3 py-2 text-sm rounded transition-all duration-200 cursor-pointer overflow-hidden no-underline"
                      :style="{ color: 'var(--tm-txt-secondary)' }"
                      @click.prevent="handleSubItemClick(item, subItem)"
                      @mouseenter="(e: any) => handleDropdownHover(e, true)"
                      @mouseleave="(e: any) => handleDropdownHover(e, false)"
                    >
                      <span class="relative z-10">{{ subItem.name }}</span>
                      <!-- Left border animation -->
                      <span
                        class="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-0 bg-[var(--tm-accent-primary)] group-hover/item:h-[70%] transition-all duration-300"
                      ></span>
                    </a>
                  </div>
                </div>

                <!-- Right: Featured section -->
                <div
                  class="w-72 pl-8"
                  :style="{ borderLeft: '1px solid var(--tm-bd-light)' }"
                >
                  <h3
                    class="text-xs font-bold mb-4 tracking-wider uppercase"
                    :style="{ color: 'var(--tm-txt-light)' }"
                  >
                    {{ item.featured.title }}
                  </h3>
                  <div class="space-y-4">
                    <div
                      v-for="featuredItem in item.featured.items"
                      :key="featuredItem.name"
                    >
                      <NuxtLink
                        :to="featuredItem.link"
                        class="block group/featured no-underline"
                        @click="closeMenu"
                      >
                        <h4
                          class="text-sm font-semibold mb-1 transition-colors group-hover/featured:text-[var(--tm-accent-primary)]"
                          :style="{ color: 'var(--tm-txt-primary)' }"
                        >
                          {{ featuredItem.name }}
                        </h4>
                        <p
                          v-if="featuredItem.description"
                          class="text-xs leading-relaxed"
                          :style="{ color: 'var(--tm-txt-light)' }"
                        >
                          {{ featuredItem.description }}
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Menus without Featured section -->
              <div v-else>
                <!-- Grouped menus -->
                <div v-if="hasGroups(item)">
                  <div
                    v-for="(group, groupIndex) in item.subItems"
                    :key="`group-${groupIndex}`"
                    class="mb-6 last:mb-0"
                  >
                    <h3
                      v-if="group.title || group.isGroup"
                      class="text-xs font-bold mb-3 tracking-wider uppercase"
                      :style="{ color: 'var(--tm-txt-light)' }"
                    >
                      {{ group.title || group.name }}
                    </h3>
                    <div
                      v-if="group.subItems && group.subItems.length > 0"
                      :class="getGridCols(item)"
                    >
                      <a
                        v-for="(subItem, index) in group.subItems"
                        :key="`${group.title || group.name}-${subItem.name}-${index}`"
                        :href="
                          subItem.link ||
                          generatePath([item.name, group.title || group.name, subItem.name])
                        "
                        class="group/item relative block px-3 py-2 text-sm rounded transition-all duration-200 cursor-pointer overflow-hidden no-underline"
                        :style="{ color: 'var(--tm-txt-secondary)' }"
                        @click.prevent="handleSubItemClick(item, subItem)"
                        @mouseenter="(e: any) => handleDropdownHover(e, true)"
                        @mouseleave="(e: any) => handleDropdownHover(e, false)"
                      >
                        <span class="relative z-10">{{ subItem.name }}</span>
                        <!-- Left border animation -->
                        <span
                          class="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-0 bg-[var(--tm-accent-primary)] group-hover/item:h-[70%] transition-all duration-300"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Regular list menus -->
                <div
                  v-else-if="item.subItems && item.subItems.length > 0"
                  :class="getGridCols(item)"
                >
                  <a
                    v-for="(subItem, index) in item.subItems"
                    :key="`${subItem.name}-${index}`"
                    :href="subItem.link || generatePath([item.name, subItem.name])"
                    class="group/item relative block px-3 py-2 text-sm rounded transition-all duration-200 cursor-pointer overflow-hidden no-underline"
                    :style="{ color: 'var(--tm-txt-secondary)' }"
                    @click.prevent="handleSubItemClick(item, subItem)"
                    @mouseenter="(e: any) => handleDropdownHover(e, true)"
                    @mouseleave="(e: any) => handleDropdownHover(e, false)"
                  >
                    <span class="relative z-10">{{ subItem.name }}</span>
                    <!-- Left border animation -->
                    <span
                      class="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-0 bg-[var(--tm-accent-primary)] group-hover/item:h-[70%] transition-all duration-300"
                    ></span>
                  </a>
                </div>
              </div>

              <!-- Explore Link -->
              <div
                v-if="item.exploreLink"
                class="mt-6 pt-6"
                :style="{ borderTop: '1px solid var(--tm-bd-light)' }"
              >
                <NuxtLink
                  :to="item.exploreLink.url"
                  class="inline-flex items-center gap-2 text-sm font-semibold hover:underline no-underline transition-colors"
                  :style="{ color: 'var(--tm-accent-primary)' }"
                  @click="closeMenu"
                >
                  {{ item.exploreLink.text }}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </NuxtLink>
              </div>
            </div>
          </div>
        </Transition>
      </li>
    </ul>
  </nav>

  <!-- Debug info (hidden by default) -->
  <div
    v-if="false"
    class="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs z-[10000]"
  >
    <div>Active Item: {{ activeItem?.name || 'None' }}</div>
    <div>Show Submenu: {{ showSubmenu }}</div>
    <div>Submenu Items: {{ activeItem?.subItems?.length || 0 }}</div>
  </div>
</template>

<script setup lang="ts">
  import type { MenuItem, UnifiedMenuItem } from './NavMenu.types'
  import { generatePath } from './NavMenu.types'
  import { useNavigation } from '~/composables/useNavigation'

  interface Props {
    menuItems: MenuItem[]
    showSubmenuOnHover?: boolean
    onMenuClick?: (item: MenuItem) => void
    onSubMenuClick?: (parentItem: MenuItem, subItem: UnifiedMenuItem) => void
    hasVerticalLayout?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    showSubmenuOnHover: true,
    onMenuClick: () => undefined,
    onSubMenuClick: () => undefined,
    hasVerticalLayout: false,
  })

  const emit = defineEmits<{
    'menu-click': [item: MenuItem]
    'submenu-click': [parentItem: MenuItem, subItem: UnifiedMenuItem]
    'active-change': [item: MenuItem | null]
  }>()

  // 获取导航状态
  const navigation = useNavigation()

  // State
  const activeItem = ref<MenuItem | null>(null)
  const showSubmenu = ref(false)
  let closeTimer: NodeJS.Timeout | null = null
  const menuItemRefs = ref<HTMLElement[]>([])

  // 新增：判断菜单是否激活
  const isMenuActive = (item: MenuItem) => {
    // 检查是否是当前悬停激活的菜单
    if (activeItem.value?.name === item.name) {
      return true
    }

    // 检查是否是当前页面路径对应的菜单
    const selectedPath = navigation.selectedPath
    if (selectedPath.firstLevel === item.name) {
      return true
    }

    return false
  }

  // Get submenu width configuration
  const getSubmenuWidth = (item: MenuItem): string => {
    // Set different widths based on menu type
    const widthMap: Record<string, string> = {
      Industries: '1000px',
      Services: '600px',
      Staffing: '600px',
      About: '800px',
      Careers: '500px',
      default: '320px',
    }
    return widthMap[item.name] || widthMap.default
  }

  // Get grid columns configuration
  const getGridCols = (item: MenuItem): string => {
    const colsMap: Record<string, string> = {
      Industries: 'grid grid-cols-3 gap-2',
      Services: 'grid grid-cols-2 gap-2',
      Staffing: 'grid grid-cols-2 gap-2',
      About: 'grid grid-cols-3 gap-2',
      Careers: 'grid grid-cols-2 gap-2',
      default: 'grid grid-cols-2 gap-2',
    }
    return colsMap[item.name] || colsMap.default
  }

  // Check if menu has groups
  const hasGroups = (item: MenuItem): boolean => {
    return item.subItems?.some((subItem) => subItem.isGroup === true || !!subItem.title) || false
  }

  // Calculate submenu position and style
  const getSubmenuStyle = (item: MenuItem) => {
    const width = getSubmenuWidth(item)
    const index = props.menuItems.findIndex(
      (menuItem: { name: string }) => menuItem.name === item.name
    )
    const menuItemEl = menuItemRefs.value[index]

    if (!menuItemEl) {
      return { width, left: '0' }
    }

    // Get menu item position info
    const rect = menuItemEl.getBoundingClientRect()
    const submenuWidth = parseInt(width)
    const windowWidth = window.innerWidth
    const rightEdge = rect.left + submenuWidth
    const margin = 20 // Minimum distance from screen edge

    let left = '0'

    // If submenu would exceed right boundary
    if (rightEdge > windowWidth - margin) {
      // Calculate how much to shift left
      const offset = rightEdge - (windowWidth - margin)
      left = `-${offset}px`
    }

    // If submenu would exceed left boundary
    const leftEdge = rect.left + parseInt(left)
    if (leftEdge < margin) {
      left = `${margin - rect.left}px`
    }

    return {
      width,
      left,
    }
  }

  // Handle navigation click
  const handleNavClick = (item: MenuItem) => {
    console.log('Nav clicked:', item.name, 'hasSubMenu:', item.hasSubMenu)

    if (item.hasSubMenu) {
      if (activeItem.value?.name === item.name && showSubmenu.value) {
        closeMenu()
      } else {
        openMenu(item)
      }
    }

    props.onMenuClick?.(item)
    emit('menu-click', item)
  }

  // Handle submenu item click
  const handleSubItemClick = (parentItem: MenuItem, subItem: UnifiedMenuItem) => {
    console.log('Submenu item clicked:', parentItem.name, '->', subItem.name)

    // Emit submenu-click event
    props.onSubMenuClick?.(parentItem, subItem)
    emit('submenu-click', parentItem, subItem)

    // Navigate if subitem doesn't have submenu
    if (!subItem.hasSubMenu) {
      const path = subItem.link || generatePath([parentItem.name, subItem.name])

      // Check if it's an anchor link
      if (path.includes('#')) {
        const [pathname, hash] = path.split('#')
        const route = useRoute()
        const currentPath = route.path

        // Check if on same page
        if (!pathname || pathname === currentPath) {
          // Same page anchor navigation
          nextTick(() => {
            const element = document.getElementById(hash)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          })
        } else {
          // Navigate to anchor on different page
          navigateTo(path)
        }
      } else {
        navigateTo(path)
      }
    }

    closeMenu()
  }

  // Handle dropdown item hover
  const handleDropdownHover = (event: MouseEvent, isHovering: boolean) => {
    const target = event.currentTarget as HTMLElement
    if (isHovering) {
      target.style.backgroundColor = 'var(--tm-bg-hover)'
      target.style.color = 'var(--tm-txt-primary)'
    } else {
      target.style.backgroundColor = 'transparent'
      target.style.color = 'var(--tm-txt-secondary)'
    }
  }

  // Open menu
  const openMenu = (item: MenuItem) => {
    clearCloseTimer()
    activeItem.value = item
    showSubmenu.value = true
    emit('active-change', item)
    console.log('Menu opened:', item.name, 'subItems:', item.subItems?.length)
  }

  // Close menu
  const closeMenu = () => {
    console.log('Closing menu')
    showSubmenu.value = false
    activeItem.value = null
    emit('active-change', null)
  }

  // Clear close timer
  const clearCloseTimer = () => {
    if (closeTimer) {
      clearTimeout(closeTimer)
      closeTimer = null
    }
  }

  // Set close timer
  const setCloseTimer = () => {
    clearCloseTimer()
    closeTimer = setTimeout(() => {
      closeMenu()
    }, 300)
  }

  // Handle mouse enter on menu item
  const handleMouseEnter = (item: MenuItem) => {
    console.log('Mouse enter:', item.name)

    if (item.hasSubMenu && props.showSubmenuOnHover) {
      openMenu(item)
    }
  }

  // Handle mouse enter on submenu
  const handleSubmenuMouseEnter = () => {
    console.log('Mouse enter submenu')
    clearCloseTimer()
  }

  // Handle mouse leave from submenu
  const handleSubmenuMouseLeave = () => {
    console.log('Mouse leave submenu')
    setCloseTimer()
  }

  // Listen to mouse leave event on entire nav area
  onMounted(() => {
    const navElement = document.querySelector('nav')
    if (navElement) {
      navElement.addEventListener('mouseleave', () => {
        console.log('Mouse leave nav')
        setCloseTimer()
      })
    }
  })

  // Cleanup
  onUnmounted(() => {
    clearCloseTimer()
  })
</script>

<style scoped>
  /* Minimal styles that can't be easily expressed with UnoCSS */

  /* Dark mode specific shadow enhancement */
  .dark .dropdown-content {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  }

  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    nav ul {
      @apply gap-4;
    }
  }
</style>
