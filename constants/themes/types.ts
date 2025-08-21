// types.ts

// 文字颜色接口
interface TextColors {
  primary: string
  secondary: string
  light: string
  lighter?: string // 新增，可选
  label: string
  placeholder: string
  disabled: string
  // 扩展文字颜色
  white: string
  whiteAlpha90: string
  whiteAlpha85?: string // 新增，可选
  whiteAlpha80: string
  whiteAlpha70: string
  accent: string
  accentDark: string
}

// 渐变配置
interface GradientConfig {
  from: string
  to: string
  fromDark?: string
  toDark?: string
  angle?: string
}

// 背景颜色接口
interface BackgroundColors {
  primary: string
  secondary: string
  tertiary: string
  active: string
  disabled: string
  mask: string
  // 扩展背景颜色
  card: string
  hover: string
  accent: string
  accentLight: string
  gradient: GradientConfig
  // 白色透明度系列
  whiteAlpha10: string
  whiteAlpha20: string
  whiteAlpha30: string
  whiteAlpha05?: string // 新增，可选
  whiteAlpha70?: string // 可选
  whiteAlpha80?: string // 可选
  whiteAlpha90?: string // 可选
  // 黑色透明度系列（深色模式用）
  blackAlpha30?: string // 新增，可选
  // 特殊背景效果
  overlay: string
  overlayDark: string
  badge?: string // 可选，因为可能使用 whiteAlpha05
  feature: string
  accentGradient: Omit<GradientConfig, 'fromDark' | 'toDark'> // 原 heroGradient
}

// 边框颜色接口
interface BorderColors {
  primary: string
  secondary: string
  light: string
  focus: string
  disabled: string
  // 扩展边框颜色
  card: string
  transparent: string
  // 透明度边框
  whiteAlpha30?: string // 新增，可选
  whiteAlpha10?: string // 新增，可选
  whiteAlpha05?: string // 新增，可选
  accentAlpha15?: string // 新增，可选
  accentAlpha20?: string // 新增，可选
}

// 阴影效果接口
interface ShadowColors {
  default: string
  hover: string
  accent: string
  card: string
  // 扩展阴影效果
  accentLight?: string // 原 feature
  whiteAlpha10?: string // 原 stats
  blackAlpha50?: string // 新增，深色模式用
  large?: string // 原 hero
}

// 按钮状态颜色
interface ButtonStateColors {
  background: string[]
  text: string[]
  border: string[]
  hoverBg: string[]
  activeBg: string[]
  disabledBg: string[]
  shadow?: string[]
}

// 文字按钮颜色
interface TextButtonColors {
  color: string[]
  hoverColor: string[]
  activeColor: string[]
  disabledColor: string[]
}

// 透明按钮颜色
interface TransparentButtonColors {
  background: string[]
  text: string[]
  border: string[]
  hoverBg: string[]
}

// 按钮颜色系统
interface ButtonColors {
  primary: ButtonStateColors
  secondary: Omit<ButtonStateColors, 'shadow'>
  text: TextButtonColors
  transparent: TransparentButtonColors
}

// 装饰色配置
interface AccentColors {
  primary: string
  secondary: string
  tertiary: string
  gradient: GradientConfig
  hero: Omit<GradientConfig, 'fromDark' | 'toDark'>
  feature: Pick<GradientConfig, 'from' | 'to'>
}

// 主题配置
export interface ThemeConfig {
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  shadow: ShadowColors
  accent: AccentColors
}

// 完整主题颜色
export interface ThemeColors {
  name: string
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  shadow: ShadowColors
  accent: AccentColors
  dark: ThemeConfig
}

// 主题类型定义
export type ThemeType = 'blackGold' | 'blueWhite' | 'darkGreen' | 'darkRed' | 'earthYellow'
