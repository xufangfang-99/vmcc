<template>
  <Teleport to="body">
    <!-- Desktop Fullscreen Menu -->
    <Responsive :not-mobile="true">
      <DesktopFullscreenMenu
        v-model:open="isOpen"
        :menu-items="menuItems"
        :bottom-links="bottomLinks"
        @menu-click="handleMenuClick"
        @submenu-click="handleSubmenuClick"
      />
    </Responsive>

    <!-- Mobile Fullscreen Menu -->
    <Responsive :mobile="true">
      <MobileFullscreenMenu
        v-model:open="isOpen"
        :menu-items="menuItems"
        :bottom-links="bottomLinks"
        @menu-click="handleMenuClick"
        @submenu-click="handleSubmenuClick"
      />
    </Responsive>
  </Teleport>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue'
  import DesktopFullscreenMenu from './DesktopFullscreenMenu.vue'
  import MobileFullscreenMenu from './MobileFullscreenMenu.vue'
  import { useMenuHandler } from '~/composables/useMenuHandler'
  import type { MenuItem } from '~/components/NavMenu.types'

  interface Props {
    open?: boolean
    menuItems: MenuItem[]
    bottomLinks?: BottomLink[]
  }

  interface BottomLink {
    name: string
    path: string
  }

  const props = withDefaults(defineProps<Props>(), {
    open: false,
    bottomLinks: () => [
      { name: 'Email Subscriptions', path: '/subscriptions' },
      { name: 'Profile', path: '/profile' },
      { name: 'Saved Articles', path: '/saved' },
    ],
  })

  const emit = defineEmits<{
    'update:open': [value: boolean]
  }>()

  // 引入统一的菜单处理逻辑
  const { handleMenuClick, handleSubmenuClick } = useMenuHandler()

  const isOpen = computed({
    get: () => props.open,
    set: (value) => emit('update:open', value),
  })

  // Handle body scroll when menu is open
  watch(isOpen, (newValue) => {
    document.body.style.overflow = newValue ? 'hidden' : ''
  })
</script>
