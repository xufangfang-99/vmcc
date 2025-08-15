import type { ThemeColors } from './types'

export const darkGreenTheme: ThemeColors = {
  name: '墨绿',
  primary: ['#2C4F3D', '#1B4032', '#0D3321'], // 深绿色系列
  text: {
    primary: '#1A332B',
    secondary: '#2C4F3D',
    light: '#40745C',
    label: '#0D3321',
    placeholder: '#A8C2B6',
    disabled: '#C2D5CC',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F8F7',
    tertiary: '#EBF1EF',
    active: '#E6F0EC',
    disabled: '#F5F8F7',
    mask: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    primary: '#2C4F3D',
    secondary: '#CAD9D3',
    light: '#E6F0EC',
    focus: '#1B4032',
    disabled: '#E6E6E6',
  },
  button: {
    primary: {
      background: ['#2C4F3D', '#1B4032', '#0D3321'],
      text: ['#FFFFFF'],
      border: ['#2C4F3D', '#1B4032', '#0D3321'],
      hoverBg: ['#1B4032'],
      activeBg: ['#0D3321'],
      disabledBg: ['#F5F8F7'],
    },
    secondary: {
      background: ['#FFFFFF'],
      text: ['#2C4F3D', '#1B4032', '#0D3321'],
      border: ['#2C4F3D', '#1B4032', '#0D3321'],
      hoverBg: ['#E6F0EC'],
      activeBg: ['#CAD9D3'],
      disabledBg: ['#F5F8F7'],
    },
    text: {
      color: ['#2C4F3D'],
      hoverColor: ['#1B4032'],
      activeColor: ['#0D3321'],
      disabledColor: ['#C2D5CC'],
    },
  },
  dark: {
    primary: ['#3DAE6C', '#2C4F3D', '#1B4032'],
    text: {
      primary: '#FFFFFF',
      secondary: '#E3F2E9',
      light: '#B7DFC7',
      label: '#FFFFFF',
      placeholder: '#8AC7A3',
      disabled: '#537D63',
    },
    background: {
      primary: '#0A1F13',
      secondary: '#122A1C',
      tertiary: '#1A3526',
      active: '#214531',
      disabled: '#2C3E35',
      mask: 'rgba(0, 0, 0, 0.65)',
    },
    border: {
      primary: '#3DAE6C',
      secondary: '#122A1C',
      light: '#1A3526',
      focus: '#2C4F3D',
      disabled: '#0A1F13',
    },
    button: {
      primary: {
        background: ['#3DAE6C', '#2C4F3D', '#1B4032'],
        text: ['#FFFFFF'],
        border: ['#3DAE6C', '#2C4F3D', '#1B4032'],
        hoverBg: ['#2C4F3D'],
        activeBg: ['#1B4032'],
        disabledBg: ['#0A1F13'],
      },
      secondary: {
        background: ['#0A1F13'],
        text: ['#3DAE6C', '#2C4F3D', '#1B4032'],
        border: ['#3DAE6C', '#2C4F3D', '#1B4032'],
        hoverBg: ['#122A1C'],
        activeBg: ['#1A3526'],
        disabledBg: ['#0A1F13'],
      },
      text: {
        color: ['#3DAE6C'],
        hoverColor: ['#2C4F3D'],
        activeColor: ['#1B4032'],
        disabledColor: ['#537D63'],
      },
    },
  },
}
