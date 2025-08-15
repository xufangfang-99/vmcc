import type { ThemeColors } from './types'

export const blackGoldTheme: ThemeColors = {
  name: '黑金',
  primary: ['#846D1B', '#715C17', '#574612'], // 蓝白色系列
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#999999',
    label: '#222222',
    placeholder: '#CCCCCC',
    disabled: '#999999',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F8F8',
    tertiary: '#F2F2F2',
    active: '#FBF6E7',
    disabled: '#F5F5F5',
    mask: 'rgba(0, 0, 0, 0.75)',
  },
  border: {
    primary: '#846D1B',
    secondary: '#E6E6E6',
    light: '#F0F0F0',
    focus: '#715C17',
    disabled: '#E6E6E6',
  },
  button: {
    primary: {
      background: ['#846D1B', '#715C17', '#574612'],
      text: ['#FFFFFF'],
      border: ['#846D1B', '#715C17', '#574612'],
      hoverBg: ['#715C17'],
      activeBg: ['#574612'],
      disabledBg: ['#262626'],
    },
    secondary: {
      background: ['#1C1C1C'],
      text: ['#846D1B', '#715C17', '#574612'],
      border: ['#846D1B', '#715C17', '#574612'],
      hoverBg: ['#262626'],
      activeBg: ['#333333'],
      disabledBg: ['#1C1C1C'],
    },
    text: {
      color: ['#846D1B'],
      hoverColor: ['#715C17'],
      activeColor: ['#574612'],
      disabledColor: ['#666666'],
    },
  },
  dark: {
    primary: ['#A38A2A', '#846D1B', '#715C17'],
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      light: '#CCCCCC',
      label: '#FFFFFF',
      placeholder: '#999999',
      disabled: '#666666',
    },
    background: {
      primary: '#0D0D0D',
      secondary: '#1C1C1C',
      tertiary: '#262626',
      active: '#333333',
      disabled: '#404040',
      mask: 'rgba(0, 0, 0, 0.75)',
    },
    border: {
      primary: '#A38A2A',
      secondary: '#333333',
      light: '#404040',
      focus: '#846D1B',
      disabled: '#262626',
    },
    button: {
      primary: {
        background: ['#A38A2A', '#846D1B', '#715C17'],
        text: ['#FFFFFF'],
        border: ['#A38A2A', '#846D1B', '#715C17'],
        hoverBg: ['#846D1B'],
        activeBg: ['#715C17'],
        disabledBg: ['#262626'],
      },
      secondary: {
        background: ['#1C1C1C'],
        text: ['#A38A2A', '#846D1B', '#715C17'],
        border: ['#A38A2A', '#846D1B', '#715C17'],
        hoverBg: ['#262626'],
        activeBg: ['#333333'],
        disabledBg: ['#1C1C1C'],
      },
      text: {
        color: ['#A38A2A'],
        hoverColor: ['#846D1B'],
        activeColor: ['#715C17'],
        disabledColor: ['#666666'],
      },
    },
  },
}
