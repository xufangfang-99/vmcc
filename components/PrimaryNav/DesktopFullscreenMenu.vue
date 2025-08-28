<template>
  <Transition name="menu-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-9999 flex"
    >
      <!-- Background -->
      <div
        class="absolute inset-0"
        :style="{ backgroundColor: 'var(--tm-bg-primary)' }"
      ></div>

      <!-- Left Panel - Navigation -->
      <div
        class="relative w-1/3 min-w-100 flex flex-col h-screen overflow-y-auto"
        :style="{
          backgroundColor: 'var(--tm-bg-primary)',
          borderRight: '1px solid var(--tm-bd-secondary)',
        }"
      >
        <!-- Header -->
        <div class="p-10 pb-8">
          <div class="flex items-start justify-between">
            <div>
              <h2
                class="text-4xl font-thin m-0 tracking-wider"
                :style="{ color: 'var(--tm-accent-primary)' }"
              >
                VMMC
              </h2>
              <p
                class="text-xs font-light mt-3 op-80"
                :style="{ color: 'var(--tm-txt-secondary)' }"
              >
                Victor Meridian Management
                <br />
                Consultancies L.L.C
              </p>
            </div>
            <button
              class="p-3 -mr-3 -mt-3"
              @click="closeMenu"
            >
              <div class="i-carbon-close w-6 h-6"></div>
            </button>
          </div>
        </div>

        <!-- Menu Items -->
        <nav class="flex-1 px-10">
          <ul class="list-none p-0 m-0">
            <li
              v-for="item in menuItems"
              :key="item.name"
              class="mb-2"
            >
              <button
                class="flex items-center justify-between px-6 py-5 w-full rounded-lg transition-all duration-300"
                :class="{ 'bg-white/5': activeMenu === item.name }"
                @click="handleMenuClick(item)"
              >
                <span
                  class="text-lg font-light"
                  :style="{
                    color:
                      activeMenu === item.name
                        ? 'var(--tm-accent-primary)'
                        : 'var(--tm-txt-primary)',
                  }"
                >
                  {{ item.name }}
                </span>
                <div
                  v-if="item.hasSubMenu"
                  class="i-carbon-chevron-right w-6 h-6"
                  :class="{ 'rotate-90': activeMenu === item.name }"
                ></div>
              </button>
            </li>
          </ul>
        </nav>

        <!-- Bottom Links -->
        <div class="p-10">
          <div class="grid grid-cols-2 gap-4">
            <a
              v-for="link in bottomLinks"
              :key="link.name"
              :href="link.path"
              class="p-4 rounded-lg text-center transition-all"
              @click="closeMenu"
            >
              <span
                class="text-sm font-light"
                :style="{ color: 'var(--tm-txt-primary)' }"
              >
                {{ link.name }}
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Panel - Content -->
      <div
        v-if="activeMenu"
        class="flex-1 flex flex-col h-screen overflow-hidden"
        :style="{ backgroundColor: 'var(--tm-bg-secondary)' }"
      >
        <div class="h-16"></div>
        <div class="flex-1 px-16 pb-16 overflow-y-auto">
          <h2
            class="text-6xl font-thin mb-12"
            :style="{ color: 'var(--tm-txt-primary)' }"
          >
            {{ activeMenu }}
          </h2>

          <div class="grid grid-cols-2 gap-4">
            <a
              v-for="subItem in activeSubmenu"
              :key="subItem.name"
              :href="subItem.link || generatePath([activeMenu, subItem.name])"
              class="p-5 rounded-lg border transition-all duration-300"
              :class="{
                'bg-white/10 border-[var(--tm-accent-primary)]': isSubMenuItemActive(subItem, {
                  name: activeMenu,
                }),
                'bg-white/5 border-white/10': !isSubMenuItemActive(subItem, { name: activeMenu }),
              }"
              @click.prevent="handleNavigation(subItem, activeMenu)"
            >
              <span
                class="text-base font-light"
                :style="{
                  color: isSubMenuItemActive(subItem, { name: activeMenu })
                    ? 'var(--tm-accent-primary)'
                    : 'var(--tm-txt-primary)',
                }"
              >
                {{ subItem.name }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { ref, computed, watch } from 'vue'
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

  const activeMenu = ref<string>('')
  const activeSubmenu = computed(
    () => props.menuItems.find((i) => i.name === activeMenu.value)?.subItems || []
  )

  const generatePath = (segments: string[]): string => '/' + segments.map(generateSlug).join('/')

  // 简化的激活状态检测
  const isSubMenuItemActive = (subItem: UnifiedMenuItem, parentItem: { name: string }): boolean => {
    const path = subItem.link || generatePath([parentItem.name, subItem.name])
    return route.path === path || route.path.startsWith(path + '/')
  }

  const closeMenu = () => {
    isOpen.value = false
  }

  const handleMenuClick = (item: MenuItem) => {
    if (item.hasSubMenu) {
      activeMenu.value = item.name
    } else {
      navigation.setSelectedPath({ firstLevel: item.name })
      navigateTo(item.link || generatePath([item.name]))
      closeMenu()
    }
  }

  const handleNavigation = async (item: UnifiedMenuItem, parentName: string) => {
    if (item.hasSubMenu) return

    navigation.switchToDefault()
    navigation.setSelectedPath({ firstLevel: parentName, secondLevel: item.name })

    const path = item.link || generatePath([parentName, item.name])
    await navigateTo(path)
    closeMenu()
  }

  watch(
    () => props.open,
    (newValue) => {
      if (newValue && !activeMenu.value) {
        const firstWithSubmenu = props.menuItems.find((item: MenuItem) => item.hasSubMenu)
        if (firstWithSubmenu) activeMenu.value = firstWithSubmenu.name
      }
    }
  )
</script>

<style scoped>
  .menu-fade-enter-active,
  .menu-fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .menu-fade-enter-from,
  .menu-fade-leave-to {
    opacity: 0;
  }
</style>
