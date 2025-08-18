<template>
  <Teleport to="body">
    <!-- Desktop Fullscreen Menu -->
    <Responsive :not-mobile="true">
      <DesktopFullscreenMenu
        v-model:open="isOpen"
        :menu-items="menuItems"
        :bottom-links="bottomLinks"
      />
    </Responsive>

    <!-- Mobile Fullscreen Menu -->
    <Responsive :mobile="true">
      <MobileFullscreenMenu
        v-model:open="isOpen"
        :menu-items="menuItems"
        :bottom-links="bottomLinks"
      />
    </Responsive>
  </Teleport>
</template>

<script setup lang="ts">
  import { computed, watch } from 'vue'
  import DesktopFullscreenMenu from './DesktopFullscreenMenu.vue'
  import MobileFullscreenMenu from './MobileFullscreenMenu.vue'
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

  const isOpen = computed({
    get: () => props.open,
    set: (value) => emit('update:open', value),
  })

  // Handle body scroll when menu is open
  watch(isOpen, (newValue) => {
    document.body.style.overflow = newValue ? 'hidden' : ''
  })
</script>
