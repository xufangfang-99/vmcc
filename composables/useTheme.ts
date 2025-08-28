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
    const currentTheme = ref<ThemeType>('blueWhite')
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

      // 文字颜色 - 处理所有文字相关颜色
      Object.entries(config.text).forEach(([key, value]) => {
        if (value !== undefined) {
          // 只处理已定义的属性
          const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          variables[`--tm-txt-${cssKey}`] = value
        }
      })

      // 背景颜色 - 处理所有背景相关颜色
      Object.entries(config.background).forEach(([key, value]) => {
        if (value === undefined) return // 跳过未定义的可选属性

        if (typeof value === 'object' && value !== null) {
          // 处理嵌套对象（如 gradient, accentGradient）
          const prefix = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (typeof subValue === 'string') {
              const subCssKey = subKey.replace(/([A-Z])/g, '-$1').toLowerCase()
              variables[`--tm-bg-${prefix}-${subCssKey}`] = subValue
            }
          })
        } else if (typeof value === 'string') {
          const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          variables[`--tm-bg-${cssKey}`] = value
        }
      })

      // 边框颜色 - 处理所有边框相关颜色
      Object.entries(config.border).forEach(([key, value]) => {
        if (value !== undefined) {
          // 只处理已定义的属性
          const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
          variables[`--tm-bd-${cssKey}`] = value
        }
      })

      // 阴影 - 处理所有阴影效果
      if (config.shadow) {
        Object.entries(config.shadow).forEach(([key, value]) => {
          if (value !== undefined) {
            // 只处理已定义的属性
            const cssKey = key.replace(/([A-Z])/g, '-$1').toLowerCase()
            variables[`--tm-shadow-${cssKey}`] = value
          }
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

      // 装饰色系统 - 全局可用的装饰色
      if (config.accent) {
        // 基础装饰色
        variables[`--tm-accent-primary`] = config.accent.primary
        variables[`--tm-accent-secondary`] = config.accent.secondary
        variables[`--tm-accent-tertiary`] = config.accent.tertiary

        // 装饰色渐变
        if (config.accent.gradient) {
          variables[`--tm-accent-gradient-from`] = config.accent.gradient.from
          variables[`--tm-accent-gradient-to`] = config.accent.gradient.to
          variables[`--tm-accent-gradient-angle`] = config.accent.gradient.angle || '135deg'
        }

        // Hero渐变
        if (config.accent.hero) {
          variables[`--tm-accent-hero-from`] = config.accent.hero.from
          variables[`--tm-accent-hero-to`] = config.accent.hero.to
          variables[`--tm-accent-hero-angle`] = config.accent.hero.angle || '45deg'
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
