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
  accent: string
  accentDark: string
  // About模块专用
  hero: string
  heroSubtitle: string
  heroAccent: string
}

interface BackgroundColors {
  primary: string
  secondary: string
  tertiary: string
  active: string
  disabled: string
  mask: string
  // 新增
  card: string
  hover: string
  accent: string
  accentLight: string
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
  // About模块专用
  overlay: string
  overlayDark: string
  badge: string
  feature: string
  stats: string
  heroGradient: {
    from: string
    to: string
  }
}

interface BorderColors {
  primary: string
  secondary: string
  light: string
  focus: string
  disabled: string
  // 新增
  card: string
  transparent: string
  // About模块专用
  hero: string
  feature: string
  stats: string
}

interface ShadowColors {
  default: string
  hover: string
  accent: string
  card: string
  // About模块专用
  feature: string
  stats: string
  hero: string
}

interface ButtonColors {
  primary: {
    background: string[]
    text: string[]
    border: string[]
    hoverBg: string[]
    activeBg: string[]
    disabledBg: string[]
    shadow?: string[]
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
  transparent: {
    background: string[]
    text: string[]
    border: string[]
    hoverBg: string[]
  }
}

// 新增装饰色配置
interface AccentColors {
  primary: string
  secondary: string
  tertiary: string
  gradient: {
    from: string
    to: string
    angle?: string
  }
  // About模块专用渐变
  hero: {
    from: string
    to: string
    angle?: string
  }
  feature: {
    from: string
    to: string
  }
}

export interface ThemeConfig {
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  shadow: ShadowColors
  accent: AccentColors // 新增
}

export interface ThemeColors {
  name: string
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  shadow: ShadowColors
  accent: AccentColors // 新增
  dark: ThemeConfig
}

// 添加 ThemeType 类型定义
export type ThemeType = 'blackGold' | 'blueWhite' | 'darkGreen' | 'darkRed' | 'earthYellow'
