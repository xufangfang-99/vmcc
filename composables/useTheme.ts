import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useHead, useCookie } from 'nuxt/app'
import type { ThemeConfig, ThemeType } from '~/constants/themes'
import { themes } from '~/constants/themes'

const THEME_COOKIE_NAME = 'theme:currentTheme'
const DARK_MODE_COOKIE_NAME = 'theme:isDark'

export const useTheme = defineStore(
  'theme',
  () => {
    const currentTheme = ref<ThemeType>('blackGold')
    const isDark = ref(false)
    const isInitialized = ref(false)

    // 使用 cookie 存储主题选择
    const themeCookie = useCookie<ThemeType>(THEME_COOKIE_NAME, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    const darkModeCookie = useCookie<boolean>(DARK_MODE_COOKIE_NAME, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    const generateThemeVariables = () => {
      const theme = themes[currentTheme.value as keyof typeof themes]
      const variables: Record<string, string> = {}
      const config: ThemeConfig = isDark.value ? theme.dark : theme

      // 主题色
      config.primary.forEach((color: string, index: number) => {
        variables[`--tm-pri-${index}`] = color
      })

      // 文字颜色
      Object.entries(config.text).forEach(([key, value]: [string, string]) => {
        variables[`--tm-txt-${key}`] = value
      })

      // 背景颜色
      Object.entries(config.background).forEach(([key, value]: [string, string]) => {
        variables[`--tm-bg-${key}`] = value
      })

      // 边框颜色
      Object.entries(config.border).forEach(([key, value]: [string, string]) => {
        variables[`--tm-bd-${key}`] = value
      })

      // 按钮颜色
      Object.entries(config.button).forEach(([buttonType, buttonColors]) => {
        Object.entries(buttonColors).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((color: string, index: number) => {
              variables[`--tm-btn-${buttonType}-${key}-${index}`] = color
            })
          } else {
            variables[`--tm-btn-${buttonType}-${key}`] = value as string
          }
        })
      })

      return variables
    }

    const setTheme = (theme: ThemeType) => {
      currentTheme.value = theme
      themeCookie.value = theme

      if (process.client) {
        localStorage.setItem('theme:currentTheme', JSON.stringify(theme))
      }

      applyTheme()
    }

    const toggleDark = () => {
      isDark.value = !isDark.value
      darkModeCookie.value = isDark.value

      if (process.client) {
        localStorage.setItem('theme:isDark', JSON.stringify(isDark.value))
        if (isDark.value) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }

      applyTheme()
    }

    const applyTheme = () => {
      const variables = generateThemeVariables()

      if (process.client) {
        Object.entries(variables).forEach(([key, value]) => {
          document.documentElement.style.setProperty(key, value)
        })
      } else {
        useHead({
          style: [
            {
              innerHTML: Object.entries(variables)
                .map(([key, value]) => `${key}: ${value};`)
                .join('\n'),
            },
          ],
        })
      }
    }

    const initTheme = () => {
      if (isInitialized.value) return

      // 从 cookie 获取主题设置
      if (themeCookie.value) {
        currentTheme.value = themeCookie.value
      }

      // 从 cookie 获取暗色模式设置
      if (darkModeCookie.value !== undefined) {
        isDark.value = darkModeCookie.value
      }

      if (process.client) {
        // 如果 cookie 中没有主题设置，尝试从 localStorage 获取
        if (!themeCookie.value) {
          const savedTheme = localStorage.getItem('theme:currentTheme')
          if (savedTheme) {
            currentTheme.value = JSON.parse(savedTheme)
            themeCookie.value = currentTheme.value
          }
        }

        // 如果 cookie 中没有暗色模式设置，检查系统偏好
        if (darkModeCookie.value === undefined) {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
          isDark.value = prefersDark.matches
          darkModeCookie.value = isDark.value
        }

        if (isDark.value) {
          document.documentElement.classList.add('dark')
        }

        // 监听系统主题变化
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        prefersDark.addEventListener('change', (e) => {
          isDark.value = e.matches
          darkModeCookie.value = isDark.value
          if (isDark.value) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
          applyTheme()
        })
      }

      applyTheme()
      isInitialized.value = true
    }

    // 立即初始化主题
    initTheme()

    return {
      currentTheme,
      isDark,
      isInitialized,
      setTheme,
      toggleDark,
      applyTheme,
      initTheme,
    }
  },
  {
    persist: {
      storage: process.client ? localStorage : undefined,
    },
  }
)
