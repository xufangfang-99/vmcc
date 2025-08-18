// NavMenu 组件专属的类型定义

// 统一的菜单项结构
export interface UnifiedMenuItem {
  name: string
  title?: string // 用于分组标题（如 "TRENDING TOPICS"）
  hasSubMenu?: boolean
  subItems?: UnifiedMenuItem[]
  link?: string // 直接链接
  description?: string // 用于 featured items
  isGroup?: boolean // 标识是否为分组
}

// Featured 部分
export interface FeaturedItem {
  name: string
  description?: string
  link: string
}

export interface Featured {
  title: string
  items: FeaturedItem[]
}

// 主菜单项
export interface MenuItem {
  name: string
  hasSubMenu: boolean
  subItems?: UnifiedMenuItem[]
  featured?: Featured
  exploreLink?: {
    text: string
    url: string
  }
}

// 底部链接
export interface BottomLink {
  name: string
  path: string
}

// 辅助函数：判断是否为分组
export const isMenuGroup = (item: UnifiedMenuItem): boolean => {
  return item.isGroup === true || (!!item.title && !!item.subItems)
}

// 辅助函数：获取项目名称
export const getMenuItemName = (item: UnifiedMenuItem): string => {
  return item.title || item.name
}

// 辅助函数：生成路径
export const generatePath = (segments: string[]): string => {
  return '/' + segments.map((s) => s.toLowerCase().replace(/\s+/g, '-')).join('/')
}
