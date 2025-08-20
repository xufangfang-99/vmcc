// types.ts
interface TextColors {
  primary: string
  secondary: string
  light: string
  label: string
  placeholder: string
  disabled: string
  // 新增
  white: string
  whiteAlpha90: string
  whiteAlpha80: string
  whiteAlpha70: string
  accent: string // 用于强调色（蓝色/紫色）
  accentDark: string
}

interface BackgroundColors {
  primary: string
  secondary: string
  tertiary: string
  active: string
  disabled: string
  mask: string
  // 新增
  card: string // 卡片背景
  hover: string // 悬停背景
  accent: string // 强调色背景
  accentLight: string // 浅强调色背景
  gradient: {
    from: string
    to: string
    fromDark: string
    toDark: string
  }
  whiteAlpha10: string
  whiteAlpha20: string
  whiteAlpha30: string
  whiteAlpha70: string
  whiteAlpha80: string
  whiteAlpha90: string
}

interface BorderColors {
  primary: string
  secondary: string
  light: string
  focus: string
  disabled: string
  // 新增
  card: string // 卡片边框
  transparent: string // 透明边框
}

interface ShadowColors {
  default: string
  hover: string
  accent: string
  card: string
}

interface ButtonColors {
  primary: {
    background: string[]
    text: string[]
    border: string[]
    hoverBg: string[]
    activeBg: string[]
    disabledBg: string[]
    shadow?: string[] // 新增阴影
  }
  secondary: {
    background: string[]
    text: string[]
    border: string[]
    hoverBg: string[]
    activeBg: string[]
    disabledBg: string[]
  }
  text: {
    color: string[]
    hoverColor: string[]
    activeColor: string[]
    disabledColor: string[]
  }
  // 新增透明按钮
  transparent: {
    background: string[]
    text: string[]
    border: string[]
    hoverBg: string[]
  }
}

export interface ThemeConfig {
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  shadow: ShadowColors // 新增阴影配置
}

export interface ThemeColors {
  name: string
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  shadow: ShadowColors
  dark: ThemeConfig
}

// 添加 ThemeType 类型定义
export type ThemeType = 'blackGold' | 'blueWhite' | 'darkGreen' | 'darkRed' | 'earthYellow'
