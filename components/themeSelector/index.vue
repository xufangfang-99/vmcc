<template>
  <div class="flex items-center gap-4">
    <DarkModeSwitch />
    <ColorThemeSwitch />
    <LangTheme />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import DarkModeSwitch from './comp/dark.vue'
  import ColorThemeSwitch from './comp/color.vue'
  import LangTheme from './comp/lang.vue'

  const theme = useTheme()

  onMounted(() => {
    theme.initTheme()
  })
</script>
