<template>
  <div
    v-if="hasSelection && navigation.isDefaultNav"
    class="mobile-menu-breadcrumb px-4 py-2 border-b"
    :style="{
      borderColor: 'var(--tm-bd-light)',
      backgroundColor: 'var(--tm-bg-secondary)',
    }"
  >
    <div class="flex items-center gap-2 text-sm">
      <span
        v-if="selectedPath.firstLevel"
        class="breadcrumb-item"
        :style="{ color: 'var(--tm-txt-secondary)' }"
      >
        {{ selectedPath.firstLevel }}
      </span>
      <span
        v-if="selectedPath.secondLevel"
        class="separator text-gray-400"
      >
        ›
      </span>
      <span
        v-if="selectedPath.secondLevel"
        class="breadcrumb-item font-medium"
        :style="{ color: 'var(--tm-txt-primary)' }"
      >
        {{ selectedPath.secondLevel }}
      </span>
      <span
        v-if="selectedPath.thirdLevel"
        class="separator text-gray-400"
      >
        ›
      </span>
      <span
        v-if="selectedPath.thirdLevel"
        class="breadcrumb-item font-medium"
        :style="{ color: 'var(--tm-txt-primary)' }"
      >
        {{ selectedPath.thirdLevel }}
      </span>
    </div>
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
  .mobile-menu-breadcrumb {
    animation: slideDown 0.3s ease;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .separator {
    font-size: 16px;
    line-height: 1;
  }
</style>
