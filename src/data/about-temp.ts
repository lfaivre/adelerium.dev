export interface AboutSectionAttributes {
  order: number
  title: string
  body: string
  link: AboutSectionLink
}

// REFACTOR: EITHER INTERNAL OR EXTERNAL

interface AboutSectionLink {
  firstTextFragment: string
  secondTextFragment: string
  isInternal: boolean
  internalURL: string
  externalURL: string
}

// interface AboutSectionExternalLink extends AboutSectionLink {
//   externalURL: string
// }

// interface AboutSectionInternalLink extends AboutSectionLink {
//   internalURL: string
// }

const AboutSectionDataArray: Array<AboutSectionAttributes> = [
  {
    order: 1,
    title: "Overview",
    body:
      "Lorenzo Faivre is a software engineer and multifaceted creative based out of Phoenix, Arizona.",
    link: {
      firstTextFragment: "View",
      secondTextFragment: "Projects",
      isInternal: true,
      internalURL: "/projects",
      externalURL: "",
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
      isInternal: false,
      internalURL: "",
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
      isInternal: false,
      internalURL: "",
      externalURL: "https://www.linkedin.com/in/lorenzofaivre/",
    },
  },
]

// REFACTOR: NEED A BETTER IMPLEMENTATION

interface AboutSectionDataAttributes {
  sections: Array<AboutSectionAttributes>
  count(): number
}

export const AboutSectionData: AboutSectionDataAttributes = {
  sections: AboutSectionDataArray,
  count: () => AboutSectionDataArray.length,
}
