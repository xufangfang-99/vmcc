<template>
  <nav class="custom-nav">
    <ul class="flex items-center gap-6 list-none p-0 m-0">
      <li
        v-for="(item, index) in menuItems"
        :key="`${item.name}-${index}`"
        class="relative"
      >
        <!-- 没有子菜单的项目 -->
        <NuxtLink
          v-if="!item.hasSubMenu"
          :to="item.link || generatePath(item.name)"
          class="nav-link text-base font-normal cursor-pointer transition-colors hover:text-[var(--tm-pri-0)] flex items-center py-4 px-2"
          :style="{ color: 'var(--tm-txt-primary)' }"
        >
          {{ item.name }}
        </NuxtLink>

        <!-- 有子菜单的项目 -->
        <div
          v-else
          class="relative nav-item-container"
          @mouseenter="handleMouseEnter(item)"
          @mouseleave="handleMouseLeave"
        >
          <a
            class="nav-link text-base font-normal cursor-pointer transition-colors hover:text-[var(--tm-pri-0)] flex items-center gap-1 py-4 px-2"
            :style="{
              color: activeItem?.name === item.name ? 'var(--tm-pri-0)' : 'var(--tm-txt-primary)',
            }"
            @click="handleClick(item)"
          >
            {{ item.name }}
            <span class="chevron-icon">
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

          <!-- 下拉菜单 -->
          <Transition name="dropdown">
            <div
              v-if="showDropdown && activeItem?.name === item.name && item.subItems"
              class="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 p-4 min-w-[200px] z-50"
            >
              <NuxtLink
                v-for="(subItem, subIndex) in item.subItems"
                :key="`${item.name}-${subItem.name}-${subIndex}`"
                :to="subItem.link || generatePath(subItem.name, item.name)"
                class="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
              >
                {{ subItem.name }}
              </NuxtLink>
            </div>
          </Transition>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'

  interface NavMenuItem {
    name: string
    link?: string
    hasSubMenu?: boolean
    subItems?: NavMenuItem[]
  }

  const navigation = useNavigation()
  const menuItems = computed(() => navigation.customMenuItems)
  const basePath = computed(() => navigation.basePath)

  const activeItem = ref<NavMenuItem | null>(null)
  const showDropdown = ref(false)

  // 生成路径
  const generatePath = (name: string, parentName?: string) => {
    const slug = name.toLowerCase().replace(/\s+/g, '-')
    if (parentName) {
      const parentSlug = parentName.toLowerCase().replace(/\s+/g, '-')
      return basePath.value ? `${basePath.value}/${parentSlug}/${slug}` : `/${parentSlug}/${slug}`
    }
    return basePath.value ? `${basePath.value}/${slug}` : `/${slug}`
  }

  // 处理鼠标悬停
  const handleMouseEnter = (item: NavMenuItem) => {
    if (item.hasSubMenu) {
      activeItem.value = item
      showDropdown.value = true
    }
  }

  // 处理鼠标离开
  const handleMouseLeave = () => {
    setTimeout(() => {
      showDropdown.value = false
      activeItem.value = null
    }, 200)
  }

  // 处理点击
  const handleClick = (item: NavMenuItem) => {
    if (item.hasSubMenu) {
      if (activeItem.value?.name === item.name && showDropdown.value) {
        showDropdown.value = false
        activeItem.value = null
      } else {
        activeItem.value = item
        showDropdown.value = true
      }
    }
  }
</script>

<style scoped>
  .custom-nav {
    display: flex;
    align-items: center;
  }

  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .chevron-icon {
    display: inline-flex;
    align-items: center;
    transition: transform 0.2s ease;
  }

  .nav-link:hover .chevron-icon {
    transform: rotate(180deg);
  }

  /* 下拉动画 */
  .dropdown-enter-active,
  .dropdown-leave-active {
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
</style>
