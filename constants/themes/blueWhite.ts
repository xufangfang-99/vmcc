import type { ThemeColors } from './types'

export const blueWhiteTheme: ThemeColors = {
  name: '蓝白',
  primary: ['#1890FF', '#40A9FF', '#096DD9'],
  text: {
    primary: '#2C3E50',
    secondary: '#5E6D82',
    light: '#8492A6',
    lighter: '#40A9FF', // 蓝白主题的亮色
    label: '#1F2D3D',
    placeholder: '#C0CCDA',
    disabled: '#C0C4CC',
    // 扩展文字颜色
    white: '#FFFFFF',
    whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
    whiteAlpha85: 'rgba(255, 255, 255, 0.85)',
    whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
    whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
    accent: '#1890FF',
    accentDark: '#096DD9',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F5F7FA',
    tertiary: '#EEF2F6',
    active: '#E6F7FF',
    disabled: '#F5F7FA', // 与 secondary 相同
    mask: 'rgba(0, 0, 0, 0.5)',
    // 扩展背景颜色
    card: '#FAFBFC',
    hover: '#F0F7FF',
    accent: '#1890FF',
    accentLight: '#E6F7FF', // 与 active 相同
    gradient: {
      from: '#3B82F6',
      to: '#6B8CF6',
      fromDark: '#1D4ED8',
      toDark: '#2563EB',
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
    feature: '#F0F9FF',
    accentGradient: {
      from: 'rgba(24, 144, 255, 0.3)',
      to: 'rgba(64, 169, 255, 0.1)',
    },
  },
  border: {
    primary: '#1890FF',
    secondary: '#E6F7FF',
    light: '#F0F7FF',
    focus: '#40A9FF',
    disabled: '#E6E6E6',
    // 扩展边框颜色
    card: '#E8E8E8',
    transparent: 'rgba(255, 255, 255, 0.3)',
    whiteAlpha30: 'rgba(255, 255, 255, 0.3)', // 与 transparent 相同
    whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
    accentAlpha15: 'rgba(24, 144, 255, 0.15)',
  },
  button: {
    primary: {
      background: ['#1890FF'],
      text: ['#FFFFFF'],
      border: ['#1890FF'],
      hoverBg: ['#40A9FF'],
      activeBg: ['#096DD9'],
      disabledBg: ['#F5F7FA'],
      shadow: ['0 4px 20px rgba(24, 144, 255, 0.3)'],
    },
    secondary: {
      background: ['#FFFFFF'],
      text: ['#1890FF'],
      border: ['#1890FF'],
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
    accent: '0 4px 20px rgba(24, 144, 255, 0.3)',
    card: '0 2px 8px rgba(0, 0, 0, 0.08)', // 与 default 相似
    // 扩展阴影效果
    accentLight: '0 5px 20px rgba(24, 144, 255, 0.1)',
    whiteAlpha10: '0 10px 30px rgba(255, 255, 255, 0.1)',
    large: '0 20px 60px rgba(0, 0, 0, 0.1)',
  },
  accent: {
    primary: '#1890FF',
    secondary: '#40A9FF',
    tertiary: '#69C0FF',
    gradient: {
      from: '#1890FF',
      to: '#69C0FF',
      angle: '135deg',
    },
    hero: {
      from: '#096DD9',
      to: '#40A9FF',
      angle: '45deg',
    },
    feature: {
      from: '#1890FF',
      to: '#40A9FF',
    },
  },
  // 深色模式配置
  dark: {
    primary: ['#40A9FF', '#1890FF', '#096DD9'],
    text: {
      primary: '#FFFFFF',
      secondary: '#E6F7FF',
      light: '#BAE7FF',
      lighter: '#69C0FF', // 深色模式的亮色
      label: '#FFFFFF',
      placeholder: '#8CC8FF',
      disabled: '#597EF7',
      // 扩展文字颜色
      white: '#FFFFFF',
      whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
      whiteAlpha85: 'rgba(255, 255, 255, 0.85)',
      whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
      whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
      accent: '#40A9FF',
      accentDark: '#1890FF',
    },
    background: {
      primary: '#001529',
      secondary: '#002140',
      tertiary: '#00172E',
      active: '#002766',
      disabled: '#001F3D',
      mask: 'rgba(0, 0, 0, 0.65)',
      // 扩展背景颜色
      card: '#001F3D',
      hover: '#002766', // 与 active 相同
      accent: '#1890FF',
      accentLight: '#002766', // 与 active 相同
      gradient: {
        from: '#3B82F6',
        to: '#6FA3FF',
        fromDark: '#2563EB',
        toDark: '#3B82F6',
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
      feature: '#001A33',
      accentGradient: {
        from: 'rgba(64, 169, 255, 0.3)',
        to: 'rgba(105, 192, 255, 0.1)',
      },
    },
    border: {
      primary: '#40A9FF',
      secondary: '#002140',
      light: '#003A8C',
      focus: '#1890FF',
      disabled: '#001529',
      // 扩展边框颜色
      card: '#003A8C',
      transparent: 'rgba(255, 255, 255, 0.1)',
      whiteAlpha10: 'rgba(255, 255, 255, 0.1)', // 与 transparent 相同
      whiteAlpha05: 'rgba(255, 255, 255, 0.05)',
      accentAlpha20: 'rgba(64, 169, 255, 0.2)',
    },
    button: {
      primary: {
        background: ['#40A9FF'],
        text: ['#FFFFFF'],
        border: ['#40A9FF'],
        hoverBg: ['#1890FF'],
        activeBg: ['#096DD9'],
        disabledBg: ['#001529'],
        shadow: ['0 4px 20px rgba(64, 169, 255, 0.4)'],
      },
      secondary: {
        background: ['#001529'],
        text: ['#40A9FF'],
        border: ['#40A9FF'],
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
      accent: '0 4px 20px rgba(64, 169, 255, 0.4)',
      card: '0 2px 8px rgba(0, 0, 0, 0.2)', // 与 default 相似
      // 扩展阴影效果 - 深色模式
      accentLight: '0 5px 20px rgba(64, 169, 255, 0.2)',
      blackAlpha50: '0 10px 30px rgba(0, 0, 0, 0.5)',
      large: '0 20px 60px rgba(0, 0, 0, 0.3)',
    },
    accent: {
      primary: '#40A9FF',
      secondary: '#69C0FF',
      tertiary: '#91D5FF',
      gradient: {
        from: '#40A9FF',
        to: '#91D5FF',
        angle: '135deg',
      },
      hero: {
        from: '#1890FF',
        to: '#69C0FF',
        angle: '45deg',
      },
      feature: {
        from: '#40A9FF',
        to: '#69C0FF',
      },
    },
  },
}
