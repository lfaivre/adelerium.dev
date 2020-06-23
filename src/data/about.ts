import {
  AboutSectionAttributes,
  AboutSectionDataAttributes,
} from "../types/about"

export const AboutSectionDataArray: Array<AboutSectionAttributes> = [
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
    pictureURL: "imageOne",
    tempQuery: undefined,
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
    pictureURL: "imageTwo",
    tempQuery: undefined,
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
    pictureURL: "imageThree",
    tempQuery: undefined,
  },
]

export const AboutSectionData: AboutSectionDataAttributes = {
  sections: AboutSectionDataArray,
  count: () => AboutSectionDataArray.length,
}
