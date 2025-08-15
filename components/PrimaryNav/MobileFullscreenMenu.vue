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
            @click="menuLevel > 0 ? goBack() : closeMenu()"
          >
            <div
              v-if="menuLevel === 0"
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
              {{ menuTitle }}
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
          <!-- Level 0: Main Menu -->
          <nav v-if="menuLevel === 0">
            <ul class="list-none p-0 m-0">
              <li
                v-for="item in menuItems"
                :key="item.name"
                class="border-b"
                :style="{ borderColor: 'var(--tm-bd-light)' }"
              >
                <a
                  class="flex items-center justify-between px-4 py-4 no-underline transition-colors active:bg-gray-100 dark:active:bg-gray-800"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="handleMenuClick(item)"
                >
                  <span class="text-base font-normal">{{ item.name }}</span>
                  <div
                    v-if="item.hasSubMenu"
                    class="i-carbon-chevron-right w-5 h-5 opacity-60"
                  ></div>
                </a>
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

          <!-- Level 1: Submenu -->
          <nav v-else-if="menuLevel === 1">
            <!-- Regular submenu items -->
            <ul class="list-none p-0 m-0">
              <li
                v-for="(subItem, index) in activeSubmenu"
                :key="`sub-${index}`"
                class="border-b"
                :style="{ borderColor: 'var(--tm-bd-light)' }"
              >
                <!-- String type -->
                <NuxtLink
                  v-if="typeof subItem === 'string'"
                  :to="`/${activeMenuName.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`"
                  class="block px-4 py-4 no-underline text-base transition-colors active:bg-gray-100 dark:active:bg-gray-800"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="closeMenu"
                >
                  {{ subItem }}
                </NuxtLink>

                <!-- Object type -->
                <a
                  v-else
                  class="flex items-center justify-between px-4 py-4 no-underline transition-colors active:bg-gray-100 dark:active:bg-gray-800"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="handleSubMenuClick(subItem)"
                >
                  {{ subItem.name }}
                  <div class="i-carbon-chevron-right w-5 h-5 opacity-60"></div>
                </a>
              </li>
            </ul>

            <!-- Featured section for mobile (after submenu items) -->
            <div
              v-if="activeFeatured"
              class="p-4 mt-8"
            >
              <h3
                class="text-xs font-semibold mb-4 tracking-wider uppercase"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                {{ activeFeatured.title }}
              </h3>
              <div
                v-for="item in activeFeatured.items"
                :key="item.name"
                class="mb-4"
              >
                <NuxtLink
                  :to="item.link"
                  class="block no-underline"
                  @click="closeMenu"
                >
                  <h4
                    class="text-base font-semibold mb-2"
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

          <!-- Level 2: Third Menu -->
          <nav v-else-if="menuLevel === 2">
            <ul class="list-none p-0 m-0">
              <li
                v-for="(thirdItem, index) in activeThirdMenu"
                :key="`third-${index}`"
                class="border-b"
                :style="{ borderColor: 'var(--tm-bd-light)' }"
              >
                <NuxtLink
                  :to="`/${activeMenuName.toLowerCase()}/${activeSubMenuName.toLowerCase().replace(/\s+/g, '-')}/${thirdItem.toLowerCase().replace(/\s+/g, '-')}`"
                  class="block px-4 py-4 no-underline text-base transition-colors active:bg-gray-100 dark:active:bg-gray-800"
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
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { navigateTo } from 'nuxt/app'
  import type { MenuItem, SubMenuItem, BottomLink } from './types/index'

  interface Props {
    open: boolean
    menuItems: MenuItem[]
    bottomLinks: BottomLink[]
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    'update:open': [value: boolean]
  }>()

  const isOpen = computed({
    get: () => props.open,
    set: (value) => emit('update:open', value),
  })

  // Mobile navigation state
  const menuLevel = ref(0) // 0: main, 1: sub, 2: third
  const activeMenuName = ref('')
  const activeSubmenu = ref<SubMenuItem[] | string[]>([])
  const activeSubMenuName = ref('')
  const activeThirdMenu = ref<string[]>([])

  const menuTitle = computed(() => {
    if (menuLevel.value === 0) return 'McKinsey & Company'
    if (menuLevel.value === 1) return activeMenuName.value
    return activeSubMenuName.value
  })

  // Get featured content for current menu
  const activeFeatured = computed(() => {
    if (menuLevel.value === 1) {
      const item = props.menuItems.find((i) => i.name === activeMenuName.value)
      return item?.featured || null
    }
    return null
  })

  const closeMenu = () => {
    isOpen.value = false
    resetMenu()
  }

  const resetMenu = () => {
    menuLevel.value = 0
    activeMenuName.value = ''
    activeSubmenu.value = []
    activeSubMenuName.value = ''
    activeThirdMenu.value = []
  }

  const handleMenuClick = (item: MenuItem) => {
    if (item.hasSubMenu) {
      menuLevel.value = 1
      activeMenuName.value = item.name
      activeSubmenu.value = item.subItems || []
    } else {
      navigateTo(`/${item.name.toLowerCase().replace(/\s+/g, '-')}`)
      closeMenu()
    }
  }

  const handleSubMenuClick = (subItem: SubMenuItem) => {
    if (subItem.hasSubMenu && subItem.subItems) {
      menuLevel.value = 2
      activeSubMenuName.value = subItem.name
      activeThirdMenu.value = subItem.subItems
    }
  }

  const goBack = () => {
    if (menuLevel.value === 2) {
      menuLevel.value = 1
      activeThirdMenu.value = []
    } else if (menuLevel.value === 1) {
      menuLevel.value = 0
      activeSubmenu.value = []
    }
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
    a:active {
      opacity: 0.8;
    }
  }
</style>
