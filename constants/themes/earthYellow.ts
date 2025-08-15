import type { ThemeColors } from './types'

export const earthYellowTheme: ThemeColors = {
  name: '土黄',
  primary: ['#B8860B', '#A67A0A', '#946E09'], // 土黄色系列
  text: {
    primary: '#332810',
    secondary: '#7A6434',
    light: '#998542',
    label: '#332810',
    placeholder: '#D4C9A6',
    disabled: '#E5DCC8',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FDFAF5',
    tertiary: '#F7F2E8',
    active: '#F2EAD7',
    disabled: '#FDFAF5',
    mask: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    primary: '#B8860B',
    secondary: '#E5DCC8',
    light: '#F2EAD7',
    focus: '#A67A0A',
    disabled: '#E6E6E6',
  },
  button: {
    primary: {
      background: ['#B8860B', '#A67A0A', '#946E09'],
      text: ['#FFFFFF'],
      border: ['#B8860B', '#A67A0A', '#946E09'],
      hoverBg: ['#A67A0A'],
      activeBg: ['#946E09'],
      disabledBg: ['#FDFAF5'],
    },
    secondary: {
      background: ['#FFFFFF'],
      text: ['#B8860B', '#A67A0A', '#946E09'],
      border: ['#B8860B', '#A67A0A', '#946E09'],
      hoverBg: ['#F2EAD7'],
      activeBg: ['#E5DCC8'],
      disabledBg: ['#FDFAF5'],
    },
    text: {
      color: ['#B8860B'],
      hoverColor: ['#A67A0A'],
      activeColor: ['#946E09'],
      disabledColor: ['#D4C9A6'],
    },
  },
  dark: {
    primary: ['#DAA520', '#B8860B', '#A67A0A'],
    text: {
      primary: '#FFFFFF',
      secondary: '#FFF8E6',
      light: '#FFE9B3',
      label: '#FFFFFF',
      placeholder: '#D4B106',
      disabled: '#8D7B3D',
    },
    background: {
      primary: '#1D1A12',
      secondary: '#292418',
      tertiary: '#332D1F',
      active: '#3D3524',
      disabled: '#463D2A',
      mask: 'rgba(0, 0, 0, 0.65)',
    },
    border: {
      primary: '#DAA520',
      secondary: '#292418',
      light: '#332D1F',
      focus: '#B8860B',
      disabled: '#1D1A12',
    },
    button: {
      primary: {
        background: ['#DAA520', '#B8860B', '#A67A0A'],
        text: ['#FFFFFF'],
        border: ['#DAA520', '#B8860B', '#A67A0A'],
        hoverBg: ['#B8860B'],
        activeBg: ['#A67A0A'],
        disabledBg: ['#1D1A12'],
      },
      secondary: {
        background: ['#1D1A12'],
        text: ['#DAA520', '#B8860B', '#A67A0A'],
        border: ['#DAA520', '#B8860B', '#A67A0A'],
        hoverBg: ['#292418'],
        activeBg: ['#332D1F'],
        disabledBg: ['#1D1A12'],
      },
      text: {
        color: ['#DAA520'],
        hoverColor: ['#B8860B'],
        activeColor: ['#A67A0A'],
        disabledColor: ['#8D7B3D'],
      },
    },
  },
}
