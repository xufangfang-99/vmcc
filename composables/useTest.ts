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
      Object.entries(config.text).forEach(([key, value]) => {
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        variables[`--tm-txt-${cssKey}`] = value
      })

      // 背景颜色
      Object.entries(config.background).forEach(([key, value]) => {
        if (key === 'gradient' && typeof value === 'object' && value !== null) {
          const gradientObj = value as Record<string, string>
          Object.entries(gradientObj).forEach(([gradientKey, gradientValue]) => {
            const cssKey = gradientKey.replace(/([A-Z])/g, '-$1').toLowerCase()
            variables[`--tm-bg-gradient-${cssKey}`] = gradientValue
          })
        } else if (key === 'heroGradient' && typeof value === 'object' && value !== null) {
          // 处理heroGradient
          const heroGradientObj = value as Record<string, string>
          Object.entries(heroGradientObj).forEach(([gradientKey, gradientValue]) => {
            const cssKey = gradientKey.replace(/([A-Z])/g, '-$1').toLowerCase()
            variables[`--tm-bg-heroGradient-${cssKey}`] = gradientValue
          })
        } else if (typeof value === 'string') {
          const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          variables[`--tm-bg-${cssKey}`] = value
        }
      })

      // 边框颜色
      Object.entries(config.border).forEach(([key, value]) => {
        const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
        variables[`--tm-bd-${cssKey}`] = value
      })

      // 阴影
      if (config.shadow) {
        Object.entries(config.shadow).forEach(([key, value]) => {
          const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          variables[`--tm-shadow-${cssKey}`] = value
        })
      }

      // 按钮颜色
      Object.entries(config.button).forEach(([buttonType, buttonColors]) => {
        Object.entries(buttonColors).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            value.forEach((color: string, index: number) => {
              variables[`--tm-btn-${buttonType}-${key}-${index}`] = color
            })
          } else if (typeof value === 'string') {
            variables[`--tm-btn-${buttonType}-${key}`] = value
          }
        })
      })

      // 装饰色 (新增)
      if (config.accent) {
        // 基础装饰色
        variables[`--tm-accent-primary`] = config.accent.primary
        variables[`--tm-accent-secondary`] = config.accent.secondary
        variables[`--tm-accent-tertiary`] = config.accent.tertiary

        // 渐变色
        if (config.accent.gradient) {
          variables[`--tm-accent-gradient-from`] = config.accent.gradient.from
          variables[`--tm-accent-gradient-to`] = config.accent.gradient.to
          if (config.accent.gradient.angle) {
            variables[`--tm-accent-gradient-angle`] = config.accent.gradient.angle
          }
        }

        // Hero渐变
        if (config.accent.hero) {
          variables[`--tm-accent-hero-from`] = config.accent.hero.from
          variables[`--tm-accent-hero-to`] = config.accent.hero.to
          if (config.accent.hero.angle) {
            variables[`--tm-accent-hero-angle`] = config.accent.hero.angle
          }
        }

        // Feature渐变
        if (config.accent.feature) {
          variables[`--tm-accent-feature-from`] = config.accent.feature.from
          variables[`--tm-accent-feature-to`] = config.accent.feature.to
        }
      }

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
              innerHTML: `:root {\n${Object.entries(variables)
                .map(([key, value]) => `  ${key}: ${value};`)
                .join('\n')}\n}`,
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
