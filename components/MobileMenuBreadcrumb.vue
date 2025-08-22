<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-if="hasSelection && navigation.isDefaultNav"
      class="px-4 py-2 border-b"
      :style="{
        borderColor: 'var(--tm-bd-light)',
        backgroundColor: 'var(--tm-bg-secondary)',
      }"
    >
      <div class="flex items-center gap-2 text-sm">
        <!-- First level breadcrumb -->
        <span
          v-if="selectedPath.firstLevel"
          class="flex-shrink-0"
          :style="{ color: 'var(--tm-txt-secondary)' }"
        >
          {{ selectedPath.firstLevel }}
        </span>

        <!-- First separator -->
        <svg
          v-if="selectedPath.firstLevel && selectedPath.secondLevel"
          class="w-3 h-3 flex-shrink-0"
          :style="{ color: 'var(--tm-txt-light)' }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>

        <!-- Second level breadcrumb -->
        <span
          v-if="selectedPath.secondLevel"
          class="font-medium flex-shrink-0"
          :style="{ color: 'var(--tm-txt-primary)' }"
        >
          {{ selectedPath.secondLevel }}
        </span>

        <!-- Second separator -->
        <svg
          v-if="selectedPath.secondLevel && selectedPath.thirdLevel"
          class="w-3 h-3 flex-shrink-0"
          :style="{ color: 'var(--tm-txt-light)' }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>

        <!-- Third level breadcrumb -->
        <span
          v-if="selectedPath.thirdLevel"
          class="font-medium truncate"
          :style="{ color: 'var(--tm-txt-primary)' }"
        >
          {{ selectedPath.thirdLevel }}
        </span>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'

  const navigation = useNavigation()
  const selectedPath = computed(() => navigation.selectedPath)

  // Check if there's any breadcrumb selection
  const hasSelection = computed(() => {
    return selectedPath.value.firstLevel || selectedPath.value.secondLevel
  })
</script>

<style scoped>
  /* Minimal custom styles that can't be expressed with UnoCSS */

  /* Enhanced mobile touch feedback */
  @media (hover: none) {
    .mobile-menu-breadcrumb {
      -webkit-tap-highlight-color: transparent;
    }
  }

  /* Ensure proper text rendering on mobile */
  @media (max-width: 640px) {
    span {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
</style>
