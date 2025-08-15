import type { ThemeColors } from './types'

export const blueWhiteTheme: ThemeColors = {
  name: '蓝白',
  primary: ['#1890FF', '#40A9FF', '#096DD9'], // 蓝白色系列
  text: {
    primary: '#2C3E50',
    secondary: '#5E6D82',
    light: '#8492A6',
    label: '#1F2D3D',
    placeholder: '#C0CCDA',
    disabled: '#C0C4CC',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F7FA',
    tertiary: '#EEF2F6',
    active: '#E6F7FF',
    disabled: '#F5F7FA',
    mask: 'rgba(0, 0, 0, 0.5)',
  },
  border: {
    primary: '#1890FF',
    secondary: '#E6F7FF',
    light: '#F0F7FF',
    focus: '#40A9FF',
    disabled: '#E6E6E6',
  },
  button: {
    primary: {
      background: ['#1890FF', '#40A9FF', '#096DD9'],
      text: ['#FFFFFF'],
      border: ['#1890FF', '#40A9FF', '#096DD9'],
      hoverBg: ['#40A9FF'],
      activeBg: ['#096DD9'],
      disabledBg: ['#F5F7FA'],
    },
    secondary: {
      background: ['#FFFFFF'],
      text: ['#1890FF', '#40A9FF', '#096DD9'],
      border: ['#1890FF', '#40A9FF', '#096DD9'],
      hoverBg: ['#E6F7FF'],
      activeBg: ['#F0F7FF'],
      disabledBg: ['#F5F7FA'],
    },
    text: {
      color: ['#1890FF'],
      hoverColor: ['#40A9FF'],
      activeColor: ['#096DD9'],
      disabledColor: ['#C0C4CC'],
    },
  },
  dark: {
    primary: ['#40A9FF', '#1890FF', '#096DD9'], // 更亮的蓝色
    text: {
      primary: '#FFFFFF',
      secondary: '#E6F7FF',
      light: '#BAE7FF',
      label: '#FFFFFF',
      placeholder: '#8CC8FF',
      disabled: '#597EF7',
    },
    background: {
      primary: '#001529', // 深蓝黑色背景
      secondary: '#002140',
      tertiary: '#00172E',
      active: '#002766',
      disabled: '#001F3D',
      mask: 'rgba(0, 0, 0, 0.65)',
    },
    border: {
      primary: '#40A9FF',
      secondary: '#002140',
      light: '#003A8C',
      focus: '#1890FF',
      disabled: '#001529',
    },
    button: {
      primary: {
        background: ['#40A9FF', '#1890FF', '#096DD9'],
        text: ['#FFFFFF'],
        border: ['#40A9FF', '#1890FF', '#096DD9'],
        hoverBg: ['#1890FF'],
        activeBg: ['#096DD9'],
        disabledBg: ['#001529'],
      },
      secondary: {
        background: ['#001529'],
        text: ['#40A9FF', '#1890FF', '#096DD9'],
        border: ['#40A9FF', '#1890FF', '#096DD9'],
        hoverBg: ['#002140'],
        activeBg: ['#00172E'],
        disabledBg: ['#001529'],
      },
      text: {
        color: ['#40A9FF'],
        hoverColor: ['#1890FF'],
        activeColor: ['#096DD9'],
        disabledColor: ['#597EF7'],
      },
    },
  },
}
