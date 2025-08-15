<template>
  <div class="flex items-center gap-4">
    <DarkModeSwitch />
    <ColorThemeSwitch />
    <LangTheme />
    <Menu />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import DarkModeSwitch from './comp/dark.vue'
  import ColorThemeSwitch from './comp/color.vue'
  import LangTheme from './comp/lang.vue'
  import Menu from './comp/menu.vue'

  const theme = useTheme()

  onMounted(() => {
    theme.initTheme()
  })
</script>
