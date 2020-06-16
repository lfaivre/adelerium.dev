// REFACTOR: NEED A BETTER IMPLEMENTATION

export interface TSideBarSection {
  title: string
  links: Array<TSideBarLink>
}

export interface TSideBarLink {
  isInternal: boolean
  text: string
  url: string
}

export interface TSideBarData {
  internal: TSideBarSection
  external: TSideBarSection
}
