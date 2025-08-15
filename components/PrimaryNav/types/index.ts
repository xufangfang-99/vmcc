export interface SubMenuItem {
  name: string
  hasSubMenu?: boolean
  subItems?: string[]
}

export interface MenuItem {
  name: string
  hasSubMenu: boolean
  subItems?: SubMenuItem[] | string[]
}

export interface BottomLink {
  name: string
  path: string
}
