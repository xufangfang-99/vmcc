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
              <button
                class="flex items-center justify-between px-8 py-5 w-full no-underline text-lg font-normal cursor-pointer transition-all hover:bg-black/5 text-left border-none bg-transparent"
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
              </button>
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
          <!-- Header with Title and Explore Link -->
          <div class="flex items-center justify-between mb-12">
            <h2
              class="text-5xl font-light"
              :style="{ color: 'var(--tm-txt-primary)' }"
            >
              {{ activeMenu }}
            </h2>
            <NuxtLink
              v-if="activeExploreLink"
              :to="activeExploreLink.url"
              class="flex items-center gap-2 no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-[var(--tm-pri-0)]"
              :style="{ color: 'var(--tm-txt-primary)' }"
              @click="closeMenu"
            >
              {{ activeExploreLink.text }}
              <div class="i-carbon-arrow-right w-4 h-4"></div>
            </NuxtLink>
          </div>

          <!-- Submenu Items -->
          <div class="flex gap-16">
            <!-- Main submenu content -->
            <div class="flex-1">
              <!-- Check if subItems are grouped -->
              <div v-if="isGroupedMenu">
                <div
                  v-for="(group, groupIndex) in activeSubmenu"
                  :key="`group-${groupIndex}`"
                  class="mb-12"
                >
                  <h3
                    v-if="group.title || group.isGroup"
                    class="text-base font-bold mb-4 tracking-wider uppercase"
                    :style="{ color: 'var(--tm-pri-0)' }"
                  >
                    {{ group.title || group.name }}
                  </h3>
                  <div
                    v-if="group.subItems && group.subItems.length > 0"
                    class="grid grid-cols-2 gap-x-16 gap-y-1"
                  >
                    <a
                      v-for="(item, itemIndex) in group.subItems"
                      :key="`${group.title || group.name}-${item.name}-${itemIndex}`"
                      :href="
                        item.link ||
                        generatePath([activeMenu, group.title || group.name, item.name])
                      "
                      class="block py-2 no-underline text-base font-normal leading-relaxed transition-all hover:text-[var(--tm-pri-0)] hover:underline cursor-pointer"
                      :style="{ color: 'var(--tm-txt-primary)' }"
                      @click.prevent="handleNavigation(item, activeMenu)"
                    >
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- Regular grid layout (Industries/Capabilities style) -->
              <div
                v-else-if="activeSubmenu && activeSubmenu.length > 0"
                class="grid grid-cols-2 gap-x-16 gap-y-1"
              >
                <a
                  v-for="(subItem, index) in activeSubmenu"
                  :key="`${activeMenu}-${subItem.name}-${index}`"
                  :href="subItem.link || generatePath([activeMenu, subItem.name])"
                  class="block py-2 no-underline text-base font-normal leading-relaxed transition-all hover:text-[var(--tm-pri-0)] hover:underline cursor-pointer"
                  :style="{ color: 'var(--tm-txt-primary)' }"
                  @click.prevent="handleNavigation(subItem, activeMenu)"
                >
                  {{ subItem.name }}
                </a>
              </div>
            </div>

            <!-- Featured section -->
            <div
              v-if="activeFeatured"
              class="w-[320px] border-l pl-12"
              :style="{ borderColor: 'var(--tm-bd-light)' }"
            >
              <h3
                class="text-base font-bold mb-6 tracking-wider uppercase"
                :style="{ color: 'var(--tm-pri-0)' }"
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
                    class="text-lg font-semibold mb-3 transition-all group-hover:text-[var(--tm-pri-0)] group-hover:underline"
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
  const { specialMenuConfigs } = useMenuData()

  const emit = defineEmits<{
    'update:open': [value: boolean]
  }>()

  const isOpen = computed({
    get: () => props.open,
    set: (value) => emit('update:open', value),
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

  const closeMenu = () => {
    isOpen.value = false
    activeMenu.value = ''
  }

  const handleMenuClick = (item: MenuItem) => {
    if (item.hasSubMenu) {
      activeMenu.value = item.name
      // 更新选中的一级菜单
      navigation.setSelectedPath({ firstLevel: item.name })
    } else {
      // 检查是否有特殊配置（场景2）
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

  // 处理二级菜单点击
  const handleNavigation = (item: UnifiedMenuItem, parentName: string) => {
    console.log('Desktop menu navigation:', parentName, '->', item.name)

    const basePath = `/${parentName.toLowerCase().replace(/\s+/g, '-')}/${item.name.toLowerCase().replace(/\s+/g, '-')}`

    // 场景3：检查二级菜单是否有特殊配置
    const menuKey = `${parentName}-${item.name}`
    const secondLevelConfig = specialMenuConfigs.secondLevel[menuKey]

    if (secondLevelConfig) {
      console.log('Desktop menu - 场景3触发：', menuKey)
      // 更新选中路径
      navigation.setSelectedPath({
        firstLevel: parentName,
        secondLevel: item.name,
      })
      navigation.switchToCustom(secondLevelConfig, basePath)
    } else if (item.hasSubMenu && item.subItems) {
      // 场景1：显示三级菜单
      console.log('Desktop menu - 场景1触发：显示三级菜单')
      // 更新选中路径
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
      // 没有特殊配置，恢复默认导航并保留选中路径
      console.log('Desktop menu - 恢复默认导航并显示选中菜单')
      navigation.switchToDefaultWithPath(parentName, item.name)
      const path = item.link || generatePath([parentName, item.name])
      navigateTo(path)
    }

    // 关闭全屏菜单
    closeMenu()
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
