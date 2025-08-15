import { defineNuxtPlugin } from 'nuxt/app'
import { useTheme } from '~/composables/useTheme'

export default defineNuxtPlugin(() => {
  if (process.client) {
    const theme = useTheme()
    if (!theme.isInitialized) {
      theme.initTheme()
    }
    // 应用持久化的主题
    theme.applyTheme()

    // 检查系统主题
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDark.matches) {
      theme.toggleDark()
    }

    // 监听系统主题变化
    prefersDark.addEventListener('change', (e) => {
      if (e.matches) {
        theme.toggleDark()
      } else {
        theme.toggleDark()
      }
    })
  }
})
