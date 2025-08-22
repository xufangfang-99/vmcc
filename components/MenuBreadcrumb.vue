<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1"
  >
    <div
      v-if="hasSelection"
      class="flex items-center gap-2 w-full pl-0 mt-0.5"
    >
      <!-- Leading separator -->
      <span
        class="text-lg leading-none"
        :style="{ color: 'var(--tm-txt-light)' }"
      >
        /
      </span>

      <!-- First level breadcrumb -->
      <span
        v-if="selectedPath.firstLevel"
        class="text-sm font-normal transition-colors duration-200"
        :style="{ color: 'var(--tm-txt-secondary)' }"
      >
        {{ selectedPath.firstLevel }}
      </span>

      <!-- First separator -->
      <span
        v-if="selectedPath.firstLevel && selectedPath.secondLevel"
        class="text-lg leading-none"
        :style="{ color: 'var(--tm-txt-light)' }"
      >
        /
      </span>

      <!-- Second level breadcrumb -->
      <span
        v-if="selectedPath.secondLevel"
        class="text-sm font-medium transition-colors duration-200"
        :style="{ color: 'var(--tm-txt-primary)' }"
      >
        {{ selectedPath.secondLevel }}
      </span>
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
  /* Mobile responsive adjustments */
  @media (max-width: 768px) {
    /* Use UnoCSS classes in template instead */
    .text-sm {
      font-size: 0.875rem;
    }

    span[class*='text-lg'] {
      font-size: 1rem;
    }
  }
</style>
