<template>
  <div>
    <!-- Menu Toggle Button -->
    <button
      class="bg-transparent border-none cursor-pointer p-2 w-10 h-10 flex items-center justify-center"
      @click="toggleMenu"
    >
      <span
        class="menu-icon w-6 h-5 relative block"
        :class="{ 'is-open': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>

    <!-- Menu Content -->
    <PrimaryNav
      v-model:open="isMenuOpen"
      :menu-items="props.menuItems"
      :bottom-links="props.bottomLinks"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import type { MenuItem } from '~/components/NavMenu.types'

  interface Props {
    menuItems?: MenuItem[]
    bottomLinks?: Array<{ name: string; path: string }>
  }

  const props = withDefaults(defineProps<Props>(), {
    menuItems: () => [],
    bottomLinks: () => [
      { name: 'Email Subscriptions', path: '/subscriptions' },
      { name: 'Profile', path: '/profile' },
      { name: 'Saved Articles', path: '/saved' },
    ],
  })

  const isMenuOpen = ref(false)

  const emit = defineEmits<{
    (e: 'click'): void
    (e: 'toggle', value: boolean): void
  }>()

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    emit('toggle', isMenuOpen.value)
    emit('click')
  }
</script>

<style scoped>
  /* Menu icon animation */
  .menu-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--tm-txt-primary);
    left: 0;
    transition: all 0.3s ease;
  }

  .menu-icon span:nth-child(1) {
    top: 0;
  }

  .menu-icon span:nth-child(2) {
    top: 9px;
  }

  .menu-icon span:nth-child(3) {
    bottom: 0;
  }

  /* X animation */
  .menu-icon.is-open span:nth-child(1) {
    transform: rotate(45deg);
    top: 9px;
  }

  .menu-icon.is-open span:nth-child(2) {
    opacity: 0;
  }

  .menu-icon.is-open span:nth-child(3) {
    transform: rotate(-45deg);
    bottom: 9px;
  }
</style>
