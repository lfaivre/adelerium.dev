// @todo Need a better TypeScript implementation

export interface TSideBarLink {
  isInternal: boolean;
  text: string;
  url: string;
}

export interface TSideBarSection {
  title: string;
  links: Array<TSideBarLink>;
}

export interface TSideBarData {
  internal: TSideBarSection;
  external: TSideBarSection;
}
