// types.ts
interface TextColors {
  primary: string
  secondary: string
  light: string
  label: string
  placeholder: string
  disabled: string
}

interface BackgroundColors {
  primary: string
  secondary: string
  tertiary: string
  active: string
  disabled: string
  mask: string
}

interface BorderColors {
  primary: string
  secondary: string
  light: string
  focus: string
  disabled: string
}

interface ButtonColors {
  primary: {
    background: string[]
    text: string[]
    border: string[]
    hoverBg: string[]
    activeBg: string[]
    disabledBg: string[]
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
}

export interface ThemeConfig {
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
}

export interface ThemeColors {
  name: string
  primary: string[]
  text: TextColors
  background: BackgroundColors
  border: BorderColors
  button: ButtonColors
  dark: ThemeConfig
}

export type ThemeType = 'blackGold' | 'blueWhite' | 'darkGreen' | 'darkRed' | 'earthYellow'

export type { BackgroundColors, BorderColors, ButtonColors, TextColors }
