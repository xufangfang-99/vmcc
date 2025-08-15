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
                class="flex items-center justify-between px-8 py-4 no-underline text-lg font-light cursor-pointer transition-colors hover:bg-black/5"
                :style="{ color: 'var(--tm-txt-primary)' }"
                @click="handleMenuClick(item)"
              >
                {{ item.name }}
                <div
                  v-if="item.hasSubMenu"
                  class="i-carbon-chevron-right w-4 h-4 opacity-60"
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
            <!-- String type submenu -->
            <NuxtLink
              v-if="typeof subItem === 'string'"
              :to="`/${activeMenu.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-')}`"
              class="no-underline text-base font-normal leading-relaxed transition-colors hover:text-[var(--tm-pri-0)]"
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
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { navigateTo } from 'nuxt/app'
  import type { MenuItem, SubMenuItem, BottomLink } from './types'

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
