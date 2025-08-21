import type { ThemeColors } from './types'

export const darkGreenTheme: ThemeColors = {
  name: '墨绿',
  primary: ['#2C4F3D', '#1B4032', '#0D3321'],
  text: {
    primary: '#1A332B',
    secondary: '#2C4F3D',
    light: '#40745C',
    lighter: '#3DAE6C', // 墨绿主题的亮色
    label: '#0D3321',
    placeholder: '#A8C2B6',
    disabled: '#C2D5CC',
    // 扩展文字颜色
    white: '#FFFFFF',
    whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
    whiteAlpha85: 'rgba(255, 255, 255, 0.85)',
    whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
    whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
    accent: '#2C4F3D',
    accentDark: '#0D3321',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F8F7',
    tertiary: '#EBF1EF',
    active: '#E6F0EC',
    disabled: '#F5F8F7', // 与 secondary 相同
    mask: 'rgba(0, 0, 0, 0.5)',
    // 扩展背景颜色
    card: '#F8FAF9',
    hover: '#E6F0EC', // 与 active 相同
    accent: '#2C4F3D',
    accentLight: '#E6F0EC', // 与 active 相同
    gradient: {
      from: '#2C4F3D',
      to: '#3A6B51',
      fromDark: '#0D3321',
      toDark: '#1B4032',
    },
    whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
    whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
    whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
    whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
    // 特殊背景效果
    overlay:
      'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 100%)',
    overlayDark: 'rgba(0, 0, 0, 0.5)',
    badge: 'rgba(255, 255, 255, 0.1)',
    feature: '#F0F9F5',
    accentGradient: {
      from: 'rgba(44, 79, 61, 0.3)',
      to: 'rgba(58, 107, 81, 0.1)',
    },
  },
  border: {
    primary: '#2C4F3D',
    secondary: '#CAD9D3',
    light: '#E6F0EC',
    focus: '#1B4032',
    disabled: '#E6E6E6',
    // 扩展边框颜色
    card: '#CAD9D3', // 使用绿色调的边框
    transparent: 'rgba(255, 255, 255, 0.3)',
    whiteAlpha30: 'rgba(255, 255, 255, 0.3)', // 与 transparent 相同
    whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
    accentAlpha15: 'rgba(44, 79, 61, 0.15)',
  },
  button: {
    primary: {
      background: ['#2C4F3D'],
      text: ['#FFFFFF'],
      border: ['#2C4F3D'],
      hoverBg: ['#1B4032'],
      activeBg: ['#0D3321'],
      disabledBg: ['#F5F8F7'],
      shadow: ['0 4px 20px rgba(44, 79, 61, 0.3)'],
    },
    secondary: {
      background: ['#FFFFFF'],
      text: ['#2C4F3D'],
      border: ['#2C4F3D'],
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
    transparent: {
      background: ['rgba(255, 255, 255, 0.1)'],
      text: ['#FFFFFF'],
      border: ['rgba(255, 255, 255, 0.8)'],
      hoverBg: ['rgba(255, 255, 255, 0.2)'],
    },
  },
  shadow: {
    default: '0 4px 20px rgba(0, 0, 0, 0.08)',
    hover: '0 8px 30px rgba(0, 0, 0, 0.12)',
    accent: '0 4px 20px rgba(44, 79, 61, 0.3)',
    card: '0 2px 8px rgba(0, 0, 0, 0.08)', // 与 default 相似
    // 扩展阴影效果
    accentLight: '0 5px 20px rgba(44, 79, 61, 0.1)',
    whiteAlpha10: '0 10px 30px rgba(255, 255, 255, 0.1)',
    large: '0 20px 60px rgba(0, 0, 0, 0.1)',
  },
  accent: {
    primary: '#2C4F3D',
    secondary: '#3DAE6C',
    tertiary: '#50C878',
    gradient: {
      from: '#2C4F3D',
      to: '#50C878',
      angle: '135deg',
    },
    hero: {
      from: '#1B4032',
      to: '#3DAE6C',
      angle: '45deg',
    },
    feature: {
      from: '#2C4F3D',
      to: '#3DAE6C',
    },
  },
  // 深色模式配置
  dark: {
    primary: ['#3DAE6C', '#2C4F3D', '#1B4032'],
    text: {
      primary: '#FFFFFF',
      secondary: '#E3F2E9',
      light: '#B7DFC7',
      lighter: '#50C878', // 深色模式的亮绿色
      label: '#FFFFFF',
      placeholder: '#8AC7A3',
      disabled: '#537D63',
      // 扩展文字颜色
      white: '#FFFFFF',
      whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
      whiteAlpha85: 'rgba(255, 255, 255, 0.85)',
      whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
      whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
      accent: '#3DAE6C',
      accentDark: '#2C4F3D',
    },
    background: {
      primary: '#0A1F13',
      secondary: '#122A1C',
      tertiary: '#1A3526',
      active: '#214531',
      disabled: '#2C3E35',
      mask: 'rgba(0, 0, 0, 0.65)',
      // 扩展背景颜色
      card: '#122A1C', // 与 secondary 相同
      hover: '#214531', // 与 active 相同
      accent: '#3DAE6C',
      accentLight: '#214531', // 与 active 相同
      gradient: {
        from: '#3DAE6C',
        to: '#4BC57F',
        fromDark: '#2C4F3D',
        toDark: '#3DAE6C',
      },
      whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
      whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
      whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
      whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
      blackAlpha30: 'rgba(0, 0, 0, 0.3)',
      // 特殊背景效果 - 深色模式
      overlay:
        'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.85) 100%)',
      overlayDark: 'rgba(0, 0, 0, 0.75)',
      badge: 'rgba(255, 255, 255, 0.05)', // 使用 whiteAlpha05
      feature: '#0F2418',
      accentGradient: {
        from: 'rgba(61, 174, 108, 0.3)',
        to: 'rgba(75, 197, 127, 0.1)',
      },
    },
    border: {
      primary: '#3DAE6C',
      secondary: '#122A1C',
      light: '#1A3526',
      focus: '#2C4F3D',
      disabled: '#0A1F13',
      // 扩展边框颜色
      card: '#1A3526',
      transparent: 'rgba(255, 255, 255, 0.1)',
      whiteAlpha10: 'rgba(255, 255, 255, 0.1)', // 与 transparent 相同
      whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
      accentAlpha20: 'rgba(61, 174, 108, 0.2)',
    },
    button: {
      primary: {
        background: ['#3DAE6C'],
        text: ['#FFFFFF'],
        border: ['#3DAE6C'],
        hoverBg: ['#2C4F3D'],
        activeBg: ['#1B4032'],
        disabledBg: ['#0A1F13'],
        shadow: ['0 4px 20px rgba(61, 174, 108, 0.4)'],
      },
      secondary: {
        background: ['#0A1F13'],
        text: ['#3DAE6C'],
        border: ['#3DAE6C'],
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
      transparent: {
        background: ['rgba(255, 255, 255, 0.05)'],
        text: ['#FFFFFF'],
        border: ['rgba(255, 255, 255, 0.3)'],
        hoverBg: ['rgba(255, 255, 255, 0.15)'],
      },
    },
    shadow: {
      default: '0 4px 20px rgba(0, 0, 0, 0.2)',
      hover: '0 8px 30px rgba(0, 0, 0, 0.3)',
      accent: '0 4px 20px rgba(61, 174, 108, 0.4)',
      card: '0 2px 8px rgba(0, 0, 0, 0.2)', // 与 default 相似
      // 扩展阴影效果 - 深色模式
      accentLight: '0 5px 20px rgba(61, 174, 108, 0.2)',
      blackAlpha50: '0 10px 30px rgba(0, 0, 0, 0.5)',
      large: '0 20px 60px rgba(0, 0, 0, 0.3)',
    },
    accent: {
      primary: '#3DAE6C',
      secondary: '#50C878',
      tertiary: '#5FD88A',
      gradient: {
        from: '#3DAE6C',
        to: '#5FD88A',
        angle: '135deg',
      },
      hero: {
        from: '#2C4F3D',
        to: '#50C878',
        angle: '45deg',
      },
      feature: {
        from: '#3DAE6C',
        to: '#50C878',
      },
    },
  },
}
