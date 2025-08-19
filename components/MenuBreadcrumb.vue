<template>
  <div
    v-if="hasSelection"
    class="menu-breadcrumb flex items-center gap-2 ml-4"
  >
    <span class="separator text-gray-400">/</span>
    <span
      v-if="selectedPath.firstLevel"
      class="breadcrumb-item text-sm font-normal"
      :style="{ color: 'var(--tm-txt-secondary)' }"
    >
      {{ selectedPath.firstLevel }}
    </span>
    <span
      v-if="selectedPath.secondLevel"
      class="separator text-gray-400"
    >
      /
    </span>
    <span
      v-if="selectedPath.secondLevel"
      class="breadcrumb-item text-sm font-medium"
      :style="{ color: 'var(--tm-txt-primary)' }"
    >
      {{ selectedPath.secondLevel }}
    </span>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useNavigation } from '~/composables/useNavigation'

  const navigation = useNavigation()
  const selectedPath = computed(() => navigation.selectedPath)

  const hasSelection = computed(() => {
    return selectedPath.value.firstLevel || selectedPath.value.secondLevel
  })
</script>

<style scoped>
  .menu-breadcrumb {
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .separator {
    font-size: 18px;
    line-height: 1;
  }
</style>
