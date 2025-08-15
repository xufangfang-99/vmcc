<template>
  <Transition name="menu-fade">
    <div
      v-if="isOpen"
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
          <button
            class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            @click="closeMenu"
          >
            <div class="i-carbon-close w-6 h-6"></div>
          </button>
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
                class="flex items-center justify-between px-8 py-5 no-underline text-lg font-normal cursor-pointer transition-all hover:bg-black/5"
                :style="{
                  color: activeMenu === item.name ? 'var(--tm-pri-0)' : 'var(--tm-txt-primary)',
                }"
                @click="handleMenuClick(item)"
              >
                {{ item.name }}
                <div
                  v-if="item.hasSubMenu"
                  class="i-carbon-chevron-right w-5 h-5 opacity-60 transition-transform"
                  :class="{ 'rotate-90': activeMenu === item.name }"
                ></div>
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
        class="flex-1 flex flex-col h-screen overflow-hidden"
        :style="{ backgroundColor: 'var(--tm-bg-secondary)' }"
      >
        <!-- Search Bar -->
        <div class="p-16 pb-8">
          <div class="relative">
            <input
              type="text"
              placeholder="Type to search..."
              class="w-full py-4 pr-12 bg-transparent border-0 border-b-2 text-lg outline-none transition-colors"
              :style="{
                borderColor: 'var(--tm-bd-light)',
                color: 'var(--tm-txt-primary)',
              }"
              @focus="handleSearchFocus"
              @blur="handleSearchBlur"
            />
            <button
              class="absolute right-0 top-1/2 -translate-y-1/2 p-2"
              aria-label="Search"
            >
              <div class="i-carbon-search w-6 h-6"></div>
            </button>
          </div>
        </div>

        <!-- Content Area -->
        <div class="flex-1 px-16 pb-16 overflow-y-auto">
          <!-- Submenu Title -->
          <h2
            class="text-5xl font-light mb-12"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            {{ activeMenu }}
          </h2>

          <!-- Submenu Items -->
          <div class="flex gap-16">
            <!-- Main submenu content -->
            <div class="flex-1">
              <div
                v-if="activeSubmenu && activeSubmenu.length > 0"
                class="grid grid-cols-2 gap-x-16 gap-y-2"
              >
                <div
                  v-for="(subItem, index) in activeSubmenu"
                  :key="`${activeMenu}-${typeof subItem === 'string' ? subItem : subItem.name}-${index}`"
                  class="submenu-item"
                >
                  <!-- String type submenu -->
                  <NuxtLink
                    v-if="typeof subItem === 'string'"
                    :to="`/${activeMenu.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`"
                    class="block py-3 no-underline text-base font-normal leading-relaxed transition-colors hover:text-[var(--tm-pri-0)]"
                    :style="{ color: 'var(--tm-txt-primary)' }"
                    @click="closeMenu"
                  >
                    {{ subItem }}
                  </NuxtLink>

                  <!-- Object type submenu (with third level) -->
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

            <!-- Featured section -->
            <div
              v-if="activeFeatured"
              class="w-[320px] border-l pl-12"
              :style="{ borderColor: 'var(--tm-bd-light)' }"
            >
              <h3
                class="text-sm font-semibold mb-6 tracking-wider"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                {{ activeFeatured.title }}
              </h3>
              <div
                v-for="item in activeFeatured.items"
                :key="item.name"
                class="mb-8"
              >
                <NuxtLink
                  :to="item.link"
                  class="block no-underline group"
                  @click="closeMenu"
                >
                  <h4
                    class="text-lg font-semibold mb-3 transition-colors group-hover:text-[var(--tm-pri-0)]"
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
          </div>
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

  const activeMenu = ref<string | null>(null)
  const activeThirdMenu = ref<string | null>(null)

  const activeSubmenu = computed(() => {
    const item = props.menuItems.find((i) => i.name === activeMenu.value)
    return item?.subItems || []
  })

  const activeFeatured = computed(() => {
    const item = props.menuItems.find((i) => i.name === activeMenu.value)
    return item?.featured || null
  })

  const closeMenu = () => {
    isOpen.value = false
    activeMenu.value = null
    activeThirdMenu.value = null
  }

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

  // Initialize with first submenu item
  if (props.menuItems.length > 0) {
    const firstWithSubmenu = props.menuItems.find((item) => item.hasSubMenu)
    if (firstWithSubmenu) {
      activeMenu.value = firstWithSubmenu.name
    }
  }

  const handleSearchFocus = (event: FocusEvent) => {
    const input = event.target as HTMLInputElement
    input.style.borderColor = 'var(--tm-pri-0)'
  }

  const handleSearchBlur = (event: FocusEvent) => {
    const input = event.target as HTMLInputElement
    input.style.borderColor = 'var(--tm-bd-light)'
  }
</script>

<style scoped>
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
</style>
