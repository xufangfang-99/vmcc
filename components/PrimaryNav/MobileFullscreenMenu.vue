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
          class="flex items-center justify-between p-6 border-b"
          :style="{ borderColor: 'var(--tm-bd-primary)' }"
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
              class="text-lg font-light m-0"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              {{ menuTitle }}
            </h2>
          </div>
          <div class="w-10"></div>
        </div>

        <!-- Mobile Content -->
        <div class="flex-1 overflow-y-auto">
          <!-- Level 0: Main Menu -->
          <nav
            v-if="menuLevel === 0"
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
                  @click="handleMenuClick(item)"
                >
                  <span class="text-base font-normal">{{ item.name }}</span>
                  <div
                    v-if="item.hasSubMenu"
                    class="i-carbon-chevron-right w-5 h-5"
                  ></div>
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
            v-else-if="menuLevel === 1"
            class="py-4"
          >
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
                  class="block px-6 py-4 no-underline text-base"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="closeMenu"
                >
                  {{ subItem }}
                </NuxtLink>

                <!-- Object type -->
                <a
                  v-else
                  class="flex items-center justify-between px-6 py-4 no-underline"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click="handleSubMenuClick(subItem)"
                >
                  {{ subItem.name }}
                  <div class="i-carbon-chevron-right w-5 h-5"></div>
                </a>
              </li>
            </ul>
          </nav>

          <!-- Level 2: Third Menu -->
          <nav
            v-else-if="menuLevel === 2"
            class="py-4"
          >
            <ul class="list-none p-0 m-0">
              <li
                v-for="(thirdItem, index) in activeThirdMenu"
                :key="`third-${index}`"
                class="border-b"
                :style="{ borderColor: 'var(--tm-bd-light)' }"
              >
                <NuxtLink
                  :to="`/${activeMenuName.toLowerCase()}/${activeSubMenuName.toLowerCase().replace(/\s+/g, '-')}/${thirdItem.toLowerCase().replace(/\s+/g, '-')}`"
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
