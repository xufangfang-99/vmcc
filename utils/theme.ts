import type { ThemeColors } from '~/constants/themes'

export function generateThemeVariables(theme: ThemeColors): Record<string, string> {
  const variables: Record<string, string> = {}

  // 处理主题色
  theme.primary.forEach((color, index) => {
    variables[`--tm-pri-${index}`] = color
  })

  // 处理文字颜色
  Object.entries(theme.text).forEach(([key, value]) => {
    variables[`--tm-txt-${key}`] = value
  })

  // 处理背景颜色
  Object.entries(theme.background).forEach(([key, value]) => {
    variables[`--tm-bg-${key}`] = value
  })

  // 处理边框颜色
  Object.entries(theme.border).forEach(([key, value]) => {
    variables[`--tm-bd-${key}`] = value
  })

  // 处理按钮颜色
  Object.entries(theme.button).forEach(([buttonType, buttonColors]) => {
    Object.entries(buttonColors).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((color, index) => {
          variables[`--tm-btn-${buttonType}-${key}-${index}`] = color
        })
      } else {
        variables[`--tm-btn-${buttonType}-${key}`] = value as string
      }
    })
  })

  return variables
}
