export interface SubMenuItem {
  name: string
  hasSubMenu?: boolean
  subItems?: string[]
}

export interface MenuGroup {
  title: string
  items: string[]
}

export interface FeaturedItem {
  name: string
  description?: string
  link: string
}

export interface Featured {
  title: string
  items: FeaturedItem[]
}

export interface MenuItem {
  name: string
  hasSubMenu: boolean
  subItems?: SubMenuItem[] | string[] | MenuGroup[]
  featured?: Featured
  exploreLink?: {
    text: string
    url: string
  }
}

export interface BottomLink {
  name: string
  path: string
}
