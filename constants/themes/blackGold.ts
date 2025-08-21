import type { ThemeColors } from './types'

export const blackGoldTheme: ThemeColors = {
  name: '黑金',
  primary: ['#846D1B', '#715C17', '#574612'],
  text: {
    primary: '#333333',
    secondary: '#666666',
    light: '#999999',
    lighter: '#C19B4C', // 原 heroAccent
    label: '#222222',
    placeholder: '#CCCCCC',
    disabled: '#999999',
    // 扩展文字颜色
    white: '#FFFFFF',
    whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
    whiteAlpha85: 'rgba(255, 255, 255, 0.85)', // 原 heroSubtitle
    whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
    whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
    accent: '#846D1B',
    accentDark: '#574612',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F8F8',
    tertiary: '#F2F2F2',
    active: '#FBF6E7',
    disabled: '#F5F5F5',
    mask: 'rgba(0, 0, 0, 0.5)',
    // 扩展背景颜色
    card: '#FAFAFA',
    hover: '#FBF6E7', // 与 active 相同
    accent: '#846D1B',
    accentLight: '#FBF6E7', // 与 active/hover 相同
    gradient: {
      from: '#846D1B',
      to: '#B8860B',
      fromDark: '#574612',
      toDark: '#715C17',
    },
    whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
    whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
    whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
    whiteAlpha05: 'rgba(255, 255, 255, 0.05)', // 原 stats
    // 特殊背景效果
    overlay:
      'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 100%)',
    overlayDark: 'rgba(0, 0, 0, 0.5)',
    badge: 'rgba(255, 255, 255, 0.1)',
    feature: '#FFFBF3',
    accentGradient: {
      // 原 heroGradient
      from: 'rgba(132, 109, 27, 0.3)',
      to: 'rgba(184, 134, 11, 0.1)',
    },
  },
  border: {
    primary: '#846D1B',
    secondary: '#E6E6E6',
    light: '#F0F0F0',
    focus: '#715C17',
    disabled: '#E6E6E6', // 与 secondary 相同
    // 扩展边框颜色
    card: '#E8E8E8',
    transparent: 'rgba(255, 255, 255, 0.3)',
    whiteAlpha30: 'rgba(255, 255, 255, 0.3)', // 原 hero，与 transparent 相同
    whiteAlpha10: 'rgba(255, 255, 255, 0.1)', // 原 stats
    accentAlpha15: 'rgba(132, 109, 27, 0.15)', // 原 feature
  },
  button: {
    primary: {
      background: ['#846D1B'],
      text: ['#FFFFFF'],
      border: ['#846D1B'],
      hoverBg: ['#715C17'],
      activeBg: ['#574612'],
      disabledBg: ['#F5F5F5'],
      shadow: ['0 4px 20px rgba(132, 109, 27, 0.3)'],
    },
    secondary: {
      background: ['#FFFFFF'],
      text: ['#846D1B'],
      border: ['#846D1B'],
      hoverBg: ['#FBF6E7'],
      activeBg: ['#F7EFD9'],
      disabledBg: ['#F5F5F5'],
    },
    text: {
      color: ['#846D1B'],
      hoverColor: ['#715C17'],
      activeColor: ['#574612'],
      disabledColor: ['#999999'],
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
    accent: '0 4px 20px rgba(132, 109, 27, 0.3)',
    card: '0 2px 8px rgba(0, 0, 0, 0.08)', // 与 default 相似
    // 扩展阴影效果
    accentLight: '0 5px 20px rgba(132, 109, 27, 0.1)', // 原 feature
    whiteAlpha10: '0 10px 30px rgba(255, 255, 255, 0.1)', // 原 stats
    large: '0 20px 60px rgba(0, 0, 0, 0.1)', // 原 hero
  },
  accent: {
    primary: '#846D1B',
    secondary: '#A38A2A',
    tertiary: '#C19B4C',
    gradient: {
      from: '#846D1B',
      to: '#C19B4C',
      angle: '135deg',
    },
    hero: {
      from: '#715C17',
      to: '#B8860B',
      angle: '45deg',
    },
    feature: {
      from: '#846D1B',
      to: '#A38A2A',
    },
  },
  // 深色模式配置
  dark: {
    primary: ['#A38A2A', '#846D1B', '#715C17'],
    text: {
      primary: '#FFFFFF',
      secondary: '#E0E0E0',
      light: '#CCCCCC',
      lighter: '#C19B4C', // 与浅色模式保持一致
      label: '#FFFFFF',
      placeholder: '#999999',
      disabled: '#666666',
      // 扩展文字颜色
      white: '#FFFFFF',
      whiteAlpha90: 'rgba(255, 255, 255, 0.9)',
      whiteAlpha85: 'rgba(255, 255, 255, 0.85)', // 统一命名
      whiteAlpha80: 'rgba(255, 255, 255, 0.8)',
      whiteAlpha70: 'rgba(255, 255, 255, 0.7)',
      accent: '#A38A2A',
      accentDark: '#846D1B',
    },
    background: {
      primary: '#0D0D0D',
      secondary: '#1C1C1C',
      tertiary: '#262626',
      active: '#333333',
      disabled: '#404040',
      mask: 'rgba(0, 0, 0, 0.75)',
      // 扩展背景颜色
      card: '#1C1C1C', // 与 secondary 相同
      hover: '#262626', // 与 tertiary 相同
      accent: '#A38A2A',
      accentLight: '#333333', // 与 active 相同
      gradient: {
        from: '#A38A2A',
        to: '#C19B4C',
        fromDark: '#846D1B',
        toDark: '#A38A2A',
      },
      whiteAlpha10: 'rgba(255, 255, 255, 0.1)',
      whiteAlpha20: 'rgba(255, 255, 255, 0.2)',
      whiteAlpha30: 'rgba(255, 255, 255, 0.3)',
      whiteAlpha05: 'rgba(255, 255, 255, 0.05)', // 原 badge
      // 特殊背景效果 - 深色模式
      overlay:
        'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.75) 50%, rgba(0, 0, 0, 0.85) 100%)',
      overlayDark: 'rgba(0, 0, 0, 0.75)',
      badge: 'rgba(255, 255, 255, 0.05)', // 改用 whiteAlpha05
      feature: '#1A1A1A',
      blackAlpha30: 'rgba(0, 0, 0, 0.3)', // 原 stats
      accentGradient: {
        // 原 heroGradient
        from: 'rgba(163, 138, 42, 0.3)',
        to: 'rgba(193, 155, 76, 0.1)',
      },
    },
    border: {
      primary: '#A38A2A',
      secondary: '#333333',
      light: '#404040',
      focus: '#846D1B',
      disabled: '#262626',
      // 扩展边框颜色
      card: '#333333', // 与 secondary 相同
      transparent: 'rgba(255, 255, 255, 0.1)',
      whiteAlpha10: 'rgba(255, 255, 255, 0.1)', // 原 hero，与 transparent 相同
      whiteAlpha05: 'rgba(255, 255, 255, 0.05)', // 原 stats
      accentAlpha20: 'rgba(163, 138, 42, 0.2)', // 原 feature
    },
    button: {
      primary: {
        background: ['#A38A2A'],
        text: ['#FFFFFF'],
        border: ['#A38A2A'],
        hoverBg: ['#846D1B'],
        activeBg: ['#715C17'],
        disabledBg: ['#262626'],
        shadow: ['0 4px 20px rgba(163, 138, 42, 0.4)'],
      },
      secondary: {
        background: ['#1C1C1C'],
        text: ['#A38A2A'],
        border: ['#A38A2A'],
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
      accent: '0 4px 20px rgba(163, 138, 42, 0.4)',
      card: '0 2px 8px rgba(0, 0, 0, 0.2)', // 与 default 相似
      // 扩展阴影效果 - 深色模式
      accentLight: '0 5px 20px rgba(163, 138, 42, 0.2)', // 原 feature
      blackAlpha50: '0 10px 30px rgba(0, 0, 0, 0.5)', // 原 stats
      large: '0 20px 60px rgba(0, 0, 0, 0.3)', // 原 hero
    },
    accent: {
      primary: '#A38A2A',
      secondary: '#C19B4C',
      tertiary: '#DAA520',
      gradient: {
        from: '#A38A2A',
        to: '#DAA520',
        angle: '135deg',
      },
      hero: {
        from: '#846D1B',
        to: '#C19B4C',
        angle: '45deg',
      },
      feature: {
        from: '#A38A2A',
        to: '#C19B4C',
      },
    },
  },
}
