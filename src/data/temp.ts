export interface AboutSectionAttributes {
  order: number
  title: string
  body: string
  link: AboutSectionExternalLink | AboutSectionInternalLink
}

interface AboutSectionLink {
  firstTextFragment: string
  secondTextFragment: string
}

interface AboutSectionExternalLink extends AboutSectionLink {
  externalURL: string
}

interface AboutSectionInternalLink extends AboutSectionLink {
  internalURL: string
}

export const AboutSectionData: Array<AboutSectionAttributes> = [
  {
    order: 1,
    title: "Overview",
    body:
      "Lorenzo Faivre is a software engineer and multifaceted creative based out of Phoenix, Arizona.",
    link: {
      firstTextFragment: "View",
      secondTextFragment: "Projects",
      internalURL: "/projects",
    },
  },
  {
    order: 2,
    title: "Work",
    body:
      "He specializes in website development and is one half of Kevala Design, a web design and development studio.",
    link: {
      firstTextFragment: "Visit",
      secondTextFragment: "Kevala Design",
      externalURL: "http://kevaladesign.com/",
    },
  },
  {
    order: 3,
    title: "Employment",
    body:
      "A recent graduate of Arizona State University, Lorenzo is currently working to secure a full-time position doing full-stack development work.",
    link: {
      firstTextFragment: "View",
      secondTextFragment: "LinkedIn Profile",
      externalURL: "https://www.linkedin.com/in/lorenzofaivre/",
    },
  },
]

// export const AboutSection
