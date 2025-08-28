<template>
  <Transition name="fade">
    <div
      v-if="hasSelection && navigation.isDefaultNav"
      class="px-4 py-2 border-b"
      :style="{ borderColor: 'var(--tm-bd-light)', backgroundColor: 'var(--tm-bg-secondary)' }"
    >
      <div class="flex items-center gap-2 text-sm">
        <span
          v-if="selectedPath.firstLevel"
          :style="{ color: 'var(--tm-txt-secondary)' }"
        >
          {{ selectedPath.firstLevel }}
        </span>

        <svg
          v-if="selectedPath.firstLevel && selectedPath.secondLevel"
          class="w-3 h-3"
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

        <span
          v-if="selectedPath.secondLevel"
          class="font-medium"
          :style="{ color: 'var(--tm-txt-primary)' }"
        >
          {{ selectedPath.secondLevel }}
        </span>

        <svg
          v-if="selectedPath.secondLevel && selectedPath.thirdLevel"
          class="w-3 h-3"
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
  const hasSelection = computed(
    () => !!(selectedPath.value.firstLevel || selectedPath.value.secondLevel)
  )
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
</style>
