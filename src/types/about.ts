// REFACTOR: NEED A BETTER IMPLEMENTATION

export interface AboutSectionAttributes {
  order: number
  title: string
  body: string
  link: AboutSectionLink
  pictureURL: string
  tempQuery: any
}

export interface AboutSectionLink {
  firstTextFragment: string
  secondTextFragment: string
  isInternal: boolean
  internalURL: string
  externalURL: string
}

export interface AboutSectionDataAttributes {
  sections: Array<AboutSectionAttributes>
  count(): number
}
