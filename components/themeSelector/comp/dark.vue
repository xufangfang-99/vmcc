<template>
  <button
    class="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    @click="theme.toggleDark"
  >
    <div class="i-carbon-sun dark:i-carbon-moon w-5 h-5 text-gray-800 dark:text-gray-200"></div>
  </button>
</template>

<script setup lang="ts">
  import { useTheme } from '~/composables/useTheme'

  const theme = useTheme()
</script>
