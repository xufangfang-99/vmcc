<template>
  <div class="flex items-center gap-4">
    <DarkModeSwitch />
    <!-- 仅在非移动端显示颜色主题和语言切换 -->
    <Responsive :not-mobile="true">
      <ColorThemeSwitch />
      <!-- <LangTheme /> -->
    </Responsive>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { useTheme } from '~/composables/useTheme'
  import { useDevice } from '~/composables/useDevice'
  import DarkModeSwitch from './comp/dark.vue'
  import ColorThemeSwitch from './comp/color.vue'
  // import LangTheme from './comp/lang.vue'

  const theme = useTheme()
  const device = useDevice()

  onMounted(() => {
    theme.initTheme()
    // 确保设备检测已初始化
    device.initDevice()
  })
</script>
