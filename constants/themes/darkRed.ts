import type { ThemeColors } from './types'

export const darkRedTheme: ThemeColors = {
  name: '暗红',
  primary: ['#8B1E3F', '#7A1835', '#69142B'], // 暗红色系列
  text: {
    primary: '#2D0F15',
    secondary: '#693344',
    light: '#8B475C',
    label: '#2D0F15',
    placeholder: '#D1B2BB',
    disabled: '#E5D1D7',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#FDF6F8',
    tertiary: '#F9EDF0',
    active: '#F6E5E9',
    disabled: '#FDF6F8',
    mask: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    primary: '#8B1E3F',
    secondary: '#E5D1D7',
    light: '#F6E5E9',
    focus: '#7A1835',
    disabled: '#E6E6E6',
  },
  button: {
    primary: {
      background: ['#8B1E3F', '#7A1835', '#69142B'],
      text: ['#FFFFFF'],
      border: ['#8B1E3F', '#7A1835', '#69142B'],
      hoverBg: ['#7A1835'],
      activeBg: ['#69142B'],
      disabledBg: ['#FDF6F8'],
    },
    secondary: {
      background: ['#FFFFFF'],
      text: ['#8B1E3F', '#7A1835', '#69142B'],
      border: ['#8B1E3F', '#7A1835', '#69142B'],
      hoverBg: ['#F6E5E9'],
      activeBg: ['#E5D1D7'],
      disabledBg: ['#FDF6F8'],
    },
    text: {
      color: ['#8B1E3F'],
      hoverColor: ['#7A1835'],
      activeColor: ['#69142B'],
      disabledColor: ['#D1B2BB'],
    },
  },
  dark: {
    primary: ['#A82C4D', '#8B1E3F', '#7A1835'],
    text: {
      primary: '#FFFFFF',
      secondary: '#FFE6ED',
      light: '#FFBFCD',
      label: '#FFFFFF',
      placeholder: '#FF8CA7',
      disabled: '#85586F',
    },
    background: {
      primary: '#1F0F15',
      secondary: '#2B1118',
      tertiary: '#37141B',
      active: '#42181F',
      disabled: '#4D1B23',
      mask: 'rgba(0, 0, 0, 0.65)',
    },
    border: {
      primary: '#A82C4D',
      secondary: '#2B1118',
      light: '#37141B',
      focus: '#8B1E3F',
      disabled: '#1F0F15',
    },
    button: {
      primary: {
        background: ['#A82C4D', '#8B1E3F', '#7A1835'],
        text: ['#FFFFFF'],
        border: ['#A82C4D', '#8B1E3F', '#7A1835'],
        hoverBg: ['#8B1E3F'],
        activeBg: ['#7A1835'],
        disabledBg: ['#1F0F15'],
      },
      secondary: {
        background: ['#1F0F15'],
        text: ['#A82C4D', '#8B1E3F', '#7A1835'],
        border: ['#A82C4D', '#8B1E3F', '#7A1835'],
        hoverBg: ['#2B1118'],
        activeBg: ['#37141B'],
        disabledBg: ['#1F0F15'],
      },
      text: {
        color: ['#A82C4D'],
        hoverColor: ['#8B1E3F'],
        activeColor: ['#7A1835'],
        disabledColor: ['#85586F'],
      },
    },
  },
}
