export interface TSideBarInternalNavigation {
  title: string
  links: Array<TSideBarInternalLink>
}

export interface TSideBarExternalNavigation {
  title: string
  links: Array<TSideBarExternalLink>
}

export interface TSideBarInternalLink {
  text: string
  internalURL: string
}

export interface TSideBarExternalLink {
  text: string
  externalURL: string
}

export interface TSideBarData {
  internal: TSideBarInternalNavigation
  external: TSideBarExternalNavigation
}
