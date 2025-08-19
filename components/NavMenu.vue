<template>
  <nav class="primary-nav">
    <ul class="flex items-center gap-6 list-none p-0 m-0">
      <li
        v-for="item in menuItems"
        :key="item.name"
        ref="menuItemRefs"
        class="relative nav-item-container"
      >
        <a
          class="nav-link text-base font-normal cursor-pointer transition-colors hover:text-[var(--tm-pri-0)] flex items-center gap-1 py-4 px-2"
          :class="{ 'active-menu-item': activeItem?.name === item.name }"
          :style="{
            color: activeItem?.name === item.name ? 'var(--tm-pri-0)' : 'var(--tm-txt-primary)',
          }"
          @mouseenter="() => handleMouseEnter(item)"
          @click="handleNavClick(item)"
        >
          {{ item.name }}
          <span
            v-if="item.hasSubMenu"
            class="chevron-icon"
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
        </a>

        <!-- 下拉子菜单 -->
        <Transition name="submenu-fade">
          <div
            v-if="showSubmenu && activeItem?.name === item.name && item.hasSubMenu"
            class="submenu-wrapper absolute top-full z-[9999]"
            :style="getSubmenuStyle(item)"
            @mouseenter="handleSubmenuMouseEnter"
            @mouseleave="handleSubmenuMouseLeave"
          >
            <!-- 连接区域 -->
            <div class="h-2"></div>

            <!-- 实际的下拉内容 -->
            <div
              class="bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <!-- 如果有 Featured，使用左右布局 -->
              <div
                v-if="item.featured"
                class="flex gap-8"
              >
                <!-- 左侧：主要内容 -->
                <div class="flex-1">
                  <!-- 有分组的菜单 (如 Our Insights, About Us) -->
                  <div v-if="hasGroups(item)">
                    <div
                      v-for="(group, groupIndex) in item.subItems"
                      :key="`group-${groupIndex}`"
                      class="mb-6 last:mb-0"
                    >
                      <h3
                        v-if="group.title || group.isGroup"
                        class="text-xs font-bold mb-3 tracking-wider uppercase text-gray-600 dark:text-gray-400"
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
                          class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors cursor-pointer"
                          @click.prevent="handleSubItemClick(item, subItem)"
                        >
                          {{ subItem.name }}
                        </a>
                      </div>
                    </div>
                  </div>

                  <!-- 普通列表菜单 (如 Capabilities) -->
                  <div
                    v-else-if="item.subItems && item.subItems.length > 0"
                    :class="getGridCols(item)"
                  >
                    <a
                      v-for="(subItem, index) in item.subItems"
                      :key="`${subItem.name}-${index}`"
                      :href="subItem.link || generatePath([item.name, subItem.name])"
                      class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors cursor-pointer"
                      @click.prevent="handleSubItemClick(item, subItem)"
                    >
                      {{ subItem.name }}
                    </a>
                  </div>
                </div>

                <!-- 右侧：Featured 部分 -->
                <div class="w-72 border-l border-gray-200 dark:border-gray-700 pl-8">
                  <h3
                    class="text-xs font-bold mb-4 tracking-wider uppercase text-gray-600 dark:text-gray-400"
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
                        class="block group"
                        @click="closeMenu"
                      >
                        <h4
                          class="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-[var(--tm-pri-0)] mb-1"
                        >
                          {{ featuredItem.name }}
                        </h4>
                        <p
                          v-if="featuredItem.description"
                          class="text-xs text-gray-600 dark:text-gray-400 leading-relaxed"
                        >
                          {{ featuredItem.description }}
                        </p>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>

              <!-- 没有 Featured 的菜单保持原样 -->
              <div v-else>
                <!-- 有分组的菜单 (如没有 Featured 的分组菜单) -->
                <div v-if="hasGroups(item)">
                  <div
                    v-for="(group, groupIndex) in item.subItems"
                    :key="`group-${groupIndex}`"
                    class="mb-6 last:mb-0"
                  >
                    <h3
                      v-if="group.title || group.isGroup"
                      class="text-xs font-bold mb-3 tracking-wider uppercase text-gray-600 dark:text-gray-400"
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
                        class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors cursor-pointer"
                        @click.prevent="handleSubItemClick(item, subItem)"
                      >
                        {{ subItem.name }}
                      </a>
                    </div>
                  </div>
                </div>

                <!-- 普通列表菜单 (如 Industries, Careers) -->
                <div
                  v-else-if="item.subItems && item.subItems.length > 0"
                  :class="getGridCols(item)"
                >
                  <a
                    v-for="(subItem, index) in item.subItems"
                    :key="`${subItem.name}-${index}`"
                    :href="subItem.link || generatePath([item.name, subItem.name])"
                    class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors cursor-pointer"
                    @click.prevent="handleSubItemClick(item, subItem)"
                  >
                    {{ subItem.name }}
                  </a>
                </div>
              </div>

              <!-- Explore Link -->
              <div
                v-if="item.exploreLink"
                class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
              >
                <NuxtLink
                  :to="item.exploreLink.url"
                  class="inline-flex items-center gap-2 text-sm font-semibold text-[var(--tm-pri-0)] hover:underline"
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

  <!-- 调试信息 -->
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
  import { ref, onUnmounted, onMounted } from 'vue'
  import { navigateTo } from 'nuxt/app'
  import type { MenuItem, UnifiedMenuItem } from './NavMenu.types'
  import { generatePath } from './NavMenu.types'

  interface Props {
    menuItems: MenuItem[]
    showSubmenuOnHover?: boolean
    onMenuClick?: (item: MenuItem) => void
    onSubMenuClick?: (parentItem: MenuItem, subItem: UnifiedMenuItem) => void
  }

  const props = withDefaults(defineProps<Props>(), {
    showSubmenuOnHover: true,
    onMenuClick: () => undefined,
    onSubMenuClick: () => undefined,
  })

  const emit = defineEmits<{
    'menu-click': [item: MenuItem]
    'submenu-click': [parentItem: MenuItem, subItem: UnifiedMenuItem]
    'active-change': [item: MenuItem | null]
  }>()

  // 状态
  const activeItem = ref<MenuItem | null>(null)
  const showSubmenu = ref(false)
  let closeTimer: NodeJS.Timeout | null = null
  const menuItemRefs = ref<HTMLElement[]>([])

  // 获取子菜单宽度配置
  const getSubmenuWidth = (item: MenuItem): string => {
    // 根据不同菜单设置不同宽度
    const widthMap: Record<string, string> = {
      Industries: '1200px',
      Capabilities: '1000px',
      'Our Insights': '1000px',
      Careers: '500px',
      'About Us': '1200px',
      行业: '1200px',
      能力: '1000px',
      洞察: '1000px',
      职业发展: '500px',
      关于我们: '1200px',
      default: '400px',
    }
    return widthMap[item.name] || widthMap.default
  }

  // 获取网格列数
  const getGridCols = (item: MenuItem): string => {
    const colsMap: Record<string, string> = {
      Industries: 'grid grid-cols-3 gap-2',
      Capabilities: 'grid grid-cols-2 gap-2',
      'Our Insights': 'grid grid-cols-2 gap-2',
      Careers: 'grid grid-cols-2 gap-2',
      'About Us': 'grid grid-cols-3 gap-2',
      行业: 'grid grid-cols-3 gap-2',
      能力: 'grid grid-cols-2 gap-2',
      洞察: 'grid grid-cols-2 gap-2',
      职业发展: 'grid grid-cols-2 gap-2',
      关于我们: 'grid grid-cols-3 gap-2',
      default: 'grid grid-cols-2 gap-2',
    }
    return colsMap[item.name] || colsMap.default
  }

  // 判断是否有分组
  const hasGroups = (item: MenuItem): boolean => {
    return item.subItems?.some((subItem) => subItem.isGroup === true || !!subItem.title) || false
  }

  // 计算子菜单样式
  const getSubmenuStyle = (item: MenuItem) => {
    const width = getSubmenuWidth(item)
    const index = props.menuItems.findIndex((menuItem) => menuItem.name === item.name)
    const menuItemEl = menuItemRefs.value[index]

    if (!menuItemEl) {
      return { width, left: '0' }
    }

    // 获取菜单项的位置信息
    const rect = menuItemEl.getBoundingClientRect()
    const submenuWidth = parseInt(width)
    const windowWidth = window.innerWidth
    const rightEdge = rect.left + submenuWidth
    const margin = 20 // 距离屏幕边缘的最小距离

    let left = '0'

    // 如果子菜单会超出右边界
    if (rightEdge > windowWidth - margin) {
      // 计算需要向左偏移多少
      const offset = rightEdge - (windowWidth - margin)
      left = `-${offset}px`
    }

    // 如果子菜单会超出左边界
    const leftEdge = rect.left + parseInt(left)
    if (leftEdge < margin) {
      left = `${margin - rect.left}px`
    }

    return {
      width,
      left,
    }
  }

  // 处理导航点击
  const handleNavClick = (item: MenuItem) => {
    console.log('Nav clicked:', item.name, 'hasSubMenu:', item.hasSubMenu)

    if (item.hasSubMenu) {
      if (activeItem.value?.name === item.name && showSubmenu.value) {
        closeMenu()
      } else {
        openMenu(item)
      }
    } else {
      // 不需要在这里导航，让 handleMenuClick 处理
    }

    props.onMenuClick?.(item)
    emit('menu-click', item)
  }

  // 处理子菜单项点击
  const handleSubItemClick = (parentItem: MenuItem, subItem: UnifiedMenuItem) => {
    console.log('Submenu item clicked:', parentItem.name, '->', subItem.name)

    // 触发 submenu-click 事件
    props.onSubMenuClick?.(parentItem, subItem)
    emit('submenu-click', parentItem, subItem)

    // 如果子项没有子菜单，则导航
    if (!subItem.hasSubMenu) {
      const path = subItem.link || generatePath([parentItem.name, subItem.name])
      navigateTo(path)
    }

    closeMenu()
  }

  // 打开菜单
  const openMenu = (item: MenuItem) => {
    clearCloseTimer()
    activeItem.value = item
    showSubmenu.value = true
    emit('active-change', item)
    console.log('Menu opened:', item.name, 'subItems:', item.subItems?.length)
  }

  // 关闭菜单
  const closeMenu = () => {
    console.log('Closing menu')
    showSubmenu.value = false
    activeItem.value = null
    emit('active-change', null)
  }

  // 清除关闭定时器
  const clearCloseTimer = () => {
    if (closeTimer) {
      clearTimeout(closeTimer)
      closeTimer = null
    }
  }

  // 设置关闭定时器
  const setCloseTimer = () => {
    clearCloseTimer()
    closeTimer = setTimeout(() => {
      closeMenu()
    }, 300)
  }

  // 处理鼠标进入菜单项
  const handleMouseEnter = (item: MenuItem) => {
    console.log('Mouse enter:', item.name)

    if (item.hasSubMenu && props.showSubmenuOnHover) {
      openMenu(item)
    }
  }

  // 处理鼠标进入子菜单
  const handleSubmenuMouseEnter = () => {
    console.log('Mouse enter submenu')
    clearCloseTimer()
  }

  // 处理鼠标离开子菜单
  const handleSubmenuMouseLeave = () => {
    console.log('Mouse leave submenu')
    setCloseTimer()
  }

  // 监听整个导航区域的鼠标离开事件
  onMounted(() => {
    const navElement = document.querySelector('.primary-nav')
    if (navElement) {
      navElement.addEventListener('mouseleave', () => {
        console.log('Mouse leave nav')
        setCloseTimer()
      })
    }
  })

  // 清理
  onUnmounted(() => {
    clearCloseTimer()
  })
</script>

<style scoped>
  .primary-nav {
    display: flex;
    align-items: center;
  }

  /* 导航项容器 */
  .nav-item-container {
    position: relative;
  }

  /* 菜单链接 */
  .nav-link {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
  }

  /* 子菜单包装器 */
  .submenu-wrapper {
    pointer-events: auto;
  }

  /* 箭头图标 */
  .chevron-icon {
    display: inline-flex;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .nav-link:hover .chevron-icon {
    transform: rotate(180deg);
  }

  /* 子菜单过渡动画 */
  .submenu-fade-enter-active,
  .submenu-fade-leave-active {
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .submenu-fade-enter-from,
  .submenu-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
