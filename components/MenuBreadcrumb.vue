<template>
  <Transition name="fade">
    <div
      v-if="hasSelection"
      class="flex items-center gap-2 w-full pl-0 mt-0.5"
    >
      <span
        class="text-lg leading-none"
        :style="{ color: 'var(--tm-txt-light)' }"
      >
        /
      </span>

      <span
        v-if="selectedPath.firstLevel"
        class="text-sm font-normal"
        :style="{ color: 'var(--tm-txt-secondary)' }"
      >
        {{ selectedPath.firstLevel }}
      </span>

      <span
        v-if="selectedPath.firstLevel && selectedPath.secondLevel"
        class="text-lg leading-none"
        :style="{ color: 'var(--tm-txt-light)' }"
      >
        /
      </span>

      <span
        v-if="selectedPath.secondLevel"
        class="text-sm font-medium"
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
    transform: translateY(-4px);
  }
</style>
