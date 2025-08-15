<template>
  <div>
    <!-- Menu Toggle Button -->
    <button
      class="bg-transparent border-none cursor-pointer p-2 w-10 h-10 flex items-center justify-center"
      @click="toggleMenu"
    >
      <span
        class="menu-icon w-6 h-5 relative block"
        :class="{ 'is-open': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <!-- Desktop Menu (两栏布局) -->
    <Transition name="menu-fade">
      <div
        v-if="isMenuOpen && !isMobile"
        class="fixed top-0 left-0 w-full h-full z-[9999] flex"
        :style="{ backgroundColor: 'var(--tm-bg-secondary)' }"
      >
        <!-- Left Panel - Navigation -->
        <div
          class="w-1/4 min-w-[320px] flex flex-col h-screen overflow-y-auto"
          :style="{ backgroundColor: 'var(--tm-bg-primary)' }"
        >
          <!-- Close Button -->
          <div
            class="p-8 flex items-center gap-8 border-b"
            :style="{ borderColor: 'var(--tm-bd-primary)' }"
          >
            <SvgIcon
              name="close"
              size="24"
              :color="'var(--tm-txt-primary)'"
              clickable
              @click="closeMenu"
            />
            <div class="logo-section">
              <h2
                class="text-2xl font-light m-0"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                McKinsey
              </h2>
              <span
                class="text-lg font-light"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                &amp; Company
              </span>
            </div>
          </div>

          <!-- Main Menu Items -->
          <nav class="flex-1 py-8">
            <ul class="list-none p-0 m-0">
              <li
                v-for="item in menuItems"
                :key="item.name"
                class="relative"
                :class="{ active: activeMenu === item.name }"
              >
                <a
                  class="flex items-center justify-between px-8 py-4 no-underline text-lg font-light cursor-pointer transition-colors hover:bg-black/5"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="handleMenuClick(item)"
                >
                  {{ item.name }}
                  <svg
                    v-if="item.hasSubMenu"
                    class="w-4 h-4 opacity-60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>

          <!-- Bottom Links -->
          <div class="p-8">
            <div
              class="h-px mb-6"
              :style="{ backgroundColor: 'var(--tm-bd-primary)' }"
            ></div>
            <ul class="list-none p-0 m-0">
              <li
                v-for="link in bottomLinks"
                :key="link.name"
                class="mb-4"
              >
                <NuxtLink
                  :to="link.path"
                  class="no-underline text-sm font-light opacity-80 hover:opacity-100 transition-opacity"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="closeMenu"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- Right Panel - Submenu Content -->
        <div
          v-if="activeMenu"
          class="flex-1 p-16 overflow-y-auto"
          :style="{ backgroundColor: 'var(--tm-bg-secondary)' }"
        >
          <!-- Submenu Title -->
          <h2
            class="text-5xl font-light mb-12"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            {{ activeMenu }}
          </h2>

          <!-- Submenu Items -->
          <div
            v-if="activeSubmenu"
            class="grid grid-cols-3 gap-8"
          >
            <div
              v-for="(subItem, index) in activeSubmenu"
              :key="`${activeMenu}-${typeof subItem === 'string' ? subItem : subItem.name}-${index}`"
              class="submenu-item"
            >
              <!-- 字符串类型的子菜单 -->
              <NuxtLink
                v-if="typeof subItem === 'string'"
                :to="`/${activeMenu.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`"
                class="no-underline text-base font-normal leading-relaxed transition-colors hover:text-[var(--tm-pri-0)]"
                :style="{ color: 'var(--tm-txt-primary)' }"
                @click="closeMenu"
              >
                {{ subItem }}
              </NuxtLink>

              <!-- 对象类型的子菜单（有第三层） -->
              <div v-else>
                <h3
                  class="text-lg font-medium mb-4 cursor-pointer transition-colors hover:text-[var(--tm-pri-0)]"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="handleSubMenuClick(activeMenu, subItem)"
                >
                  {{ subItem.name }}
                </h3>
                <ul
                  v-if="activeThirdMenu === `${activeMenu}-${subItem.name}` && subItem.subItems"
                  class="list-none p-0 m-0"
                >
                  <li
                    v-for="(thirdItem, thirdIndex) in subItem.subItems"
                    :key="`${activeMenu}-${subItem.name}-${thirdItem}-${thirdIndex}`"
                    class="mb-2"
                  >
                    <NuxtLink
                      :to="`/${activeMenu.toLowerCase()}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}/${thirdItem.toLowerCase().replace(/\s+/g, '-')}`"
                      class="no-underline text-sm transition-colors hover:text-[var(--tm-pri-0)]"
                      :style="{ color: 'var(--tm-txt-secondary)' }"
                      @click="closeMenu"
                    >
                      {{ thirdItem }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div
        v-if="isMenuOpen && isMobile"
        class="fixed inset-0 z-[9999]"
      >
        <div
          class="absolute inset-0 h-full w-full overflow-hidden flex flex-col"
          :style="{ backgroundColor: 'var(--tm-bg-primary)' }"
        >
          <!-- Mobile Header -->
          <div
            class="flex items-center justify-between p-6 border-b"
            :style="{ borderColor: 'var(--tm-bd-primary)' }"
          >
            <button
              class="p-2 -ml-2"
              @click="mobileMenuLevel > 0 ? goBack() : closeMenu()"
            >
              <svg
                v-if="mobileMenuLevel === 0"
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="'var(--tm-txt-primary)'"
                stroke-width="2"
              >
                <line
                  x1="18"
                  y1="6"
                  x2="6"
                  y2="18"
                />
                <line
                  x1="6"
                  y1="6"
                  x2="18"
                  y2="18"
                />
              </svg>
              <svg
                v-else
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                :stroke="'var(--tm-txt-primary)'"
                stroke-width="2"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div class="text-center flex-1">
              <h2
                class="text-lg font-light m-0"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                {{ mobileMenuTitle }}
              </h2>
            </div>
            <div class="w-10"></div>
          </div>

          <!-- Mobile Content -->
          <div class="flex-1 overflow-y-auto">
            <!-- Level 0: Main Menu -->
            <nav
              v-if="mobileMenuLevel === 0"
              class="py-4"
            >
              <ul class="list-none p-0 m-0">
                <li
                  v-for="item in menuItems"
                  :key="item.name"
                  class="border-b"
                  :style="{ borderColor: 'var(--tm-bd-light)' }"
                >
                  <a
                    class="flex items-center justify-between px-6 py-4 no-underline transition-colors"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                    @click="handleMobileMenuClick(item)"
                  >
                    <span class="text-base font-normal">{{ item.name }}</span>
                    <svg
                      v-if="item.hasSubMenu"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
              </ul>

              <!-- Bottom Links -->
              <div
                class="border-t mt-4 py-4"
                :style="{ borderColor: 'var(--tm-bd-primary)' }"
              >
                <ul class="list-none p-0 m-0">
                  <li
                    v-for="link in bottomLinks"
                    :key="link.name"
                    class="mb-2"
                  >
                    <NuxtLink
                      :to="link.path"
                      class="block px-6 py-2 no-underline text-sm"
                      :style="{ color: 'var(--tm-txt-secondary)' }"
                      @click="closeMenu"
                    >
                      {{ link.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </nav>

            <!-- Level 1: Submenu -->
            <nav
              v-else-if="mobileMenuLevel === 1"
              class="py-4"
            >
              <ul class="list-none p-0 m-0">
                <li
                  v-for="(subItem, index) in mobileActiveSubmenu"
                  :key="`sub-${index}`"
                  class="border-b"
                  :style="{ borderColor: 'var(--tm-bd-light)' }"
                >
                  <!-- 字符串类型 -->
                  <NuxtLink
                    v-if="typeof subItem === 'string'"
                    :to="`/${mobileActiveMenu.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`"
                    class="block px-6 py-4 no-underline text-base"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                    @click="closeMenu"
                  >
                    {{ subItem }}
                  </NuxtLink>

                  <!-- 对象类型 -->
                  <a
                    v-else
                    class="flex items-center justify-between px-6 py-4 no-underline"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                    @click="handleMobileSubMenuClick(subItem)"
                  >
                    {{ subItem.name }}
                    <svg
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>

            <!-- Level 2: Third Menu -->
            <nav
              v-else-if="mobileMenuLevel === 2"
              class="py-4"
            >
              <ul class="list-none p-0 m-0">
                <li
                  v-for="(thirdItem, index) in mobileActiveThirdMenu"
                  :key="`third-${index}`"
                  class="border-b"
                  :style="{ borderColor: 'var(--tm-bd-light)' }"
                >
                  <NuxtLink
                    :to="`/${mobileActiveMenu.toLowerCase()}/${mobileActiveSubMenu.toLowerCase().replace(/\s+/g, '-')}/${thirdItem.toLowerCase().replace(/\s+/g, '-')}`"
                    class="block px-6 py-4 no-underline text-base"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                    @click="closeMenu"
                  >
                    {{ thirdItem }}
                  </NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onUnmounted, onMounted } from 'vue'
  import { navigateTo } from 'nuxt/app'

  interface SubMenuItem {
    name: string
    hasSubMenu?: boolean
    subItems?: string[]
  }

  interface MenuItem {
    name: string
    hasSubMenu: boolean
    subItems?: SubMenuItem[] | string[]
  }

  const isMenuOpen = ref(false)
  const activeMenu = ref<string | null>(null)
  const activeThirdMenu = ref<string | null>(null)
  const isMobile = ref(false)

  // Mobile specific states
  const mobileMenuLevel = ref(0) // 0: main, 1: sub, 2: third
  const mobileActiveMenu = ref('')
  const mobileActiveSubmenu = ref<SubMenuItem[] | string[]>([])
  const mobileActiveSubMenu = ref('')
  const mobileActiveThirdMenu = ref<string[]>([])

  const emit = defineEmits<{
    (e: 'click'): void
    (e: 'toggle', value: boolean): void
  }>()

  const menuItems: MenuItem[] = [
    {
      name: 'Industries',
      hasSubMenu: true,
      subItems: [
        {
          name: 'Aerospace & Defense',
          hasSubMenu: true,
          subItems: ['How We Help Clients', 'Our Insights', 'Our People', 'Contact Us'],
        },
        // ... 其他行业项目
      ],
    },
    {
      name: 'Capabilities',
      hasSubMenu: true,
      subItems: [
        'Strategy & Corporate Finance',
        'Operations',
        'Risk & Resilience',
        'People & Organizational Performance',
        'Technology',
        'Marketing & Sales',
        'Implementation',
      ],
    },
    {
      name: 'Our Insights',
      hasSubMenu: true,
      subItems: [
        'Featured Insights',
        'McKinsey Quarterly',
        'Most Popular',
        'McKinsey Global Institute',
        'Sustainability',
        'Chief Marketing Officer',
        'Digital',
      ],
    },
    { name: 'Locations', hasSubMenu: false },
    {
      name: 'Careers',
      hasSubMenu: true,
      subItems: ['Overview', 'Search Jobs', 'Life at McKinsey', 'Interview Process'],
    },
    {
      name: 'About Us',
      hasSubMenu: true,
      subItems: ['Overview', 'Our People', 'Social Impact', 'Alumni', 'Media Center'],
    },
    { name: 'McKinsey Blog', hasSubMenu: false },
  ]

  const bottomLinks = [
    { name: 'Email Subscriptions', path: '/subscriptions' },
    { name: 'Profile', path: '/profile' },
    { name: 'Saved Articles', path: '/saved' },
  ]

  const activeSubmenu = computed(() => {
    const item = menuItems.find((i) => i.name === activeMenu.value)
    return item?.subItems || []
  })

  const mobileMenuTitle = computed(() => {
    if (mobileMenuLevel.value === 0) return 'McKinsey & Company'
    if (mobileMenuLevel.value === 1) return mobileActiveMenu.value
    return mobileActiveSubMenu.value
  })

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 1024
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
    document.body.style.overflow = ''
  })

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    emit('toggle', isMenuOpen.value)
    emit('click')

    if (isMenuOpen.value) {
      document.body.style.overflow = 'hidden'
      const firstWithSubmenu = menuItems.find((item) => item.hasSubMenu)
      if (firstWithSubmenu && !isMobile.value) {
        activeMenu.value = firstWithSubmenu.name
      }
    } else {
      document.body.style.overflow = ''
      resetMenu()
    }
  }

  const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
    resetMenu()
    emit('toggle', false)
  }

  const resetMenu = () => {
    activeMenu.value = null
    activeThirdMenu.value = null
    mobileMenuLevel.value = 0
    mobileActiveMenu.value = ''
    mobileActiveSubmenu.value = []
    mobileActiveSubMenu.value = ''
    mobileActiveThirdMenu.value = []
  }

  // Desktop handlers
  const handleMenuClick = (item: MenuItem) => {
    if (item.hasSubMenu) {
      activeMenu.value = item.name
    } else {
      navigateTo(`/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
      closeMenu()
    }
  }

  const handleSubMenuClick = (parentName: string, subItem: SubMenuItem) => {
    if (subItem.hasSubMenu) {
      const key = `${parentName}-${subItem.name}`
      activeThirdMenu.value = activeThirdMenu.value === key ? null : key
    } else {
      navigateTo(`/${parentName.toLowerCase()}/${subItem.name.toLowerCase().replace(/\s+/g, '-')}`)
      closeMenu()
    }
  }

  // Mobile handlers
  const handleMobileMenuClick = (item: MenuItem) => {
    if (item.hasSubMenu) {
      mobileMenuLevel.value = 1
      mobileActiveMenu.value = item.name
      mobileActiveSubmenu.value = item.subItems || []
    } else {
      navigateTo(`/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
      closeMenu()
    }
  }

  const handleMobileSubMenuClick = (subItem: SubMenuItem) => {
    if (subItem.hasSubMenu && subItem.subItems) {
      mobileMenuLevel.value = 2
      mobileActiveSubMenu.value = subItem.name
      mobileActiveThirdMenu.value = subItem.subItems
    }
  }

  const goBack = () => {
    if (mobileMenuLevel.value === 2) {
      mobileMenuLevel.value = 1
      mobileActiveThirdMenu.value = []
    } else if (mobileMenuLevel.value === 1) {
      mobileMenuLevel.value = 0
      mobileActiveSubmenu.value = []
    }
  }
</script>

<style scoped>
  /* Menu icon animation */
  .menu-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--tm-txt-primary);
    left: 0;
    transition: all 0.3s ease;
  }

  .menu-icon span:nth-child(1) {
    top: 0;
  }

  .menu-icon span:nth-child(2) {
    top: 9px;
  }

  .menu-icon span:nth-child(3) {
    bottom: 0;
  }

  /* X animation */
  .menu-icon.is-open span:nth-child(1) {
    transform: rotate(45deg);
    top: 9px;
  }

  .menu-icon.is-open span:nth-child(2) {
    opacity: 0;
  }

  .menu-icon.is-open span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 9px;
  }

  /* Active menu item indicator */
  .active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: var(--tm-pri-0);
  }

  /* Transitions */
  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .menu-fade-enter-from,
  .menu-fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: opacity 0.3s ease;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }

  /* Smooth scrolling on iOS */
  .overflow-y-auto {
    -webkit-overflow-scrolling: touch;
  }
</style>
