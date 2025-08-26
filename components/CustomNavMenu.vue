<template>
  <nav class="flex items-center">
    <ul class="flex items-center gap-6 list-none p-0 m-0">
      <li
        v-for="(item, index) in menuItems"
        :key="`${item.name}-${index}`"
        class="relative"
      >
        <!-- Items without submenu -->
        <NuxtLink
          v-if="!item.hasSubMenu"
          :to="item.link || generatePath(item.name)"
          class="group relative flex items-center text-base font-normal cursor-pointer transition-colors hover:text-[var(--tm-accent-primary)] py-4 px-2 no-underline"
          :style="{ color: 'var(--tm-txt-primary)' }"
        >
          {{ item.name }}
          <!-- Underline animation -->
          <span
            class="absolute bottom-3 left-2 right-2 h-0.5 bg-[var(--tm-accent-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
          ></span>
        </NuxtLink>

        <!-- Items with submenu -->
        <div
          v-else
          class="relative"
          @mouseenter="handleMouseEnter(item)"
          @mouseleave="handleMouseLeave"
        >
          <a
            class="group relative flex items-center gap-1 text-base font-normal cursor-pointer transition-colors hover:text-[var(--tm-accent-primary)] py-4 px-2 no-underline"
            :style="{
              color:
                activeItem?.name === item.name
                  ? 'var(--tm-accent-primary)'
                  : 'var(--tm-txt-primary)',
            }"
            @click="handleClick(item)"
          >
            {{ item.name }}
            <span
              class="inline-flex items-center transition-transform duration-200 group-hover:rotate-180"
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
              class="absolute bottom-3 left-2 right-2 h-0.5 bg-[var(--tm-accent-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
            ></span>
          </a>

          <!-- Dropdown menu -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
          >
            <div
              v-if="showDropdown && activeItem?.name === item.name && item.subItems"
              class="absolute top-full left-0 mt-2 rounded-lg p-4 min-w-[200px] z-50"
              :style="{
                backgroundColor: 'var(--tm-bg-card)',
                border: '1px solid var(--tm-bd-card)',
                boxShadow: 'var(--tm-shadow-hover)',
              }"
            >
              <NuxtLink
                v-for="(subItem, subIndex) in item.subItems"
                :key="`${item.name}-${subItem.name}-${subIndex}`"
                :to="subItem.link || generatePath(subItem.name, item.name)"
                class="dropdown-item group relative block px-3 py-2 text-sm rounded transition-all duration-200 overflow-hidden no-underline"
                :class="dropdownItemClass"
              >
                <!-- Left border animation -->
                <span
                  class="absolute left-0 top-1/2 -translate-y-1/2 w-0.75 h-0 bg-[var(--tm-accent-primary)] group-hover:h-[70%] transition-all duration-300"
                ></span>
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

  // Dynamic class for dropdown items
  const dropdownItemClass = computed(() => {
    return {
      'text-[var(--tm-txt-secondary)]': true,
      'hover:text-[var(--tm-txt-primary)]': true,
      'hover:bg-[var(--tm-bg-hover)]': true,
    }
  })

  // Generate URL path from menu item name
  const generatePath = (name: string, parentName?: string) => {
    // 正确处理 & 符号和空格
    const slug = name
      .toLowerCase()
      .replace(/\s*&\s*/g, '-') // "Aerospace & Defense" → "aerospace-defense"
      .replace(/\s+/g, '-') // 处理其他空格
      .replace(/[^a-z0-9-]/g, '') // 移除其他特殊字符

    if (parentName) {
      const parentSlug = parentName
        .toLowerCase()
        .replace(/\s*&\s*/g, '-')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
      return basePath.value ? `${basePath.value}/${parentSlug}/${slug}` : `/${parentSlug}/${slug}`
    }
    return basePath.value ? `${basePath.value}/${slug}` : `/${slug}`
  }

  // Handle mouse enter on menu item
  const handleMouseEnter = (item: NavMenuItem) => {
    if (item.hasSubMenu) {
      activeItem.value = item
      showDropdown.value = true
    }
  }

  // Handle mouse leave from menu item
  const handleMouseLeave = () => {
    setTimeout(() => {
      showDropdown.value = false
      activeItem.value = null
    }, 200)
  }

  // Handle click on menu item
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
  /* Dark mode specific shadow */
  .dark .dropdown-menu {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    nav ul {
      @apply gap-4;
    }

    .nav-link {
      @apply text-sm p-2;
    }

    .dropdown-menu {
      @apply min-w-[180px];
    }
  }
</style>
