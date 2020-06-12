interface SideBarInternalNavigationAttributes {
  title: string
  links: Array<SideBarInternalLinkAttributes>
}

interface SideBarExternalNavigationAttributes {
  title: string
  links: Array<SideBarExternalLinkAttributes>
}

interface SideBarInternalLinkAttributes {
  text: string
  internalURL: string
}

interface SideBarExternalLinkAttributes {
  text: string
  externalURL: string
}

export interface SideBarDataAttributes {
  internal: SideBarInternalNavigationAttributes
  external: SideBarExternalNavigationAttributes
}

export const SideBarData: SideBarDataAttributes = {
  internal: {
    title: "Navigation",
    links: [
      {
        text: "About",
        internalURL: "/about",
      },
      {
        text: "Projects",
        internalURL: "/projects",
      },
      {
        text: "Blog",
        internalURL: "/blog",
      },
    ],
  },
  external: {
    title: "Externals",
    links: [
      {
        text: "GitHub",
        externalURL: "https://github.com/lfaivre",
      },
      {
        text: "LinkedIn",
        externalURL: "https://www.linkedin.com/in/lorenzofaivre/",
      },
      {
        text: "Resume",
        externalURL:
          "https://drive.google.com/file/d/19Gdz-dwWnlBov73sDIBnr68bf04NvnIL/view?usp=sharing",
      },
      {
        text: "Email",
        externalURL: "mailto:lorenzo.faivre@gmail.com",
      },
    ],
  },
}
