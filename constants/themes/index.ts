import { blackGoldTheme } from './blackGold'
import { blueWhiteTheme } from './blueWhite'
import { darkGreenTheme } from './darkGreen'
import { darkRedTheme } from './darkRed'
import { earthYellowTheme } from './earthYellow'
import type { ThemeColors, ThemeType } from './types'

export const themes: Record<ThemeType, ThemeColors> = {
  blackGold: blackGoldTheme,
  blueWhite: blueWhiteTheme,
  darkGreen: darkGreenTheme,
  darkRed: darkRedTheme,
  earthYellow: earthYellowTheme,
}

export * from './types'
export type { ThemeColors, ThemeType }
