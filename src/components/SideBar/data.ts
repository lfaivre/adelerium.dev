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

// NEW :: NEED TO COMBINE WITH ABOVE

interface SiteDataAttrs {
  profile: ProfileAttrs
  links: SiteLinksAttrs
}

interface ProfileAttrs {
  name: string
  tag: string
}

interface SiteLinksAttrs {
  kd: LinkAttrs
  github: LinkAttrs
  linkedin: LinkAttrs
  resume: LinkAttrs
  email: LinkAttrs
}

interface LinkAttrs {
  text: string
  altText?: string
  url: string
}

export const SiteData: SiteDataAttrs = {
  profile: {
    name: "Lorenzo Faivre",
    tag: "A software engineer, among other things",
  },
  links: {
    kd: {
      text: "Kevala Design",
      altText: "kevaladesign.com",
      url: "http://kevaladesign.com/",
    },
    github: {
      text: "GitHub",
      altText: "gh",
      url: "https://github.com/lfaivre",
    },
    linkedin: {
      text: "LinkedIn",
      altText: "li",
      url: "https://www.linkedin.com/in/lorenzofaivre/",
    },
    resume: {
      text: "Resume",
      url:
        "https://drive.google.com/file/d/19Gdz-dwWnlBov73sDIBnr68bf04NvnIL/view?usp=sharing",
    },
    email: {
      text: "Email",
      url: "mailto:lorenzo.faivre@gmail.com",
    },
  },
}
