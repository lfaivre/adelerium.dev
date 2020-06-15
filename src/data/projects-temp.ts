export interface ProjectAttributes {
  order: number
  preview: ProjectPreviewAttributes
  technologyTags: Array<ProjectTechnologyTags>
  externalLinks: ProjectLinkAttributes
  gallery: Array<string>
}

interface ProjectPreviewAttributes {
  title: string
  type: ProjectType
  date: string
  description: string
  pictureURL: string
  tempQuery: any
}

type ProjectType = "Website" | "Mobile Application" | "Design Prototype"

interface ProjectLinkAttributes {
  hostedURL?: string
  githubURL?: string
  figmaURL?: string
}

type ProjectTechnologyTags =
  | ScriptingTechnology
  | FrontEndTechnology
  | BackEndTechnology
  | MobileTechnology
  | DatabaseTechnology
  | OtherTechnology

type ScriptingTechnology = "JavaScript" | "TypeScript" | "Python" | "Bash"
type FrontEndTechnology =
  | "React"
  | "Redux"
  | "Create React App"
  | "Vue"
  | "Vuex"
  | "HTML"
  | "Pug"
  | "CSS"
  | "Sass"
  | "Bootstrap"
  | "Tailwind CSS"
type BackEndTechnology = "Node.js" | "Express"
type MobileTechnology = "React Native" | "Expo"
type DatabaseTechnology = "MongoDB" | "Postgres" | "TypeORM"
type OtherTechnology = "Other" | "Figma" | "Docker" | "Git" | "GitHub"

const ProjectDataArray: Array<ProjectAttributes> = [
  {
    order: 1,
    preview: {
      title: "Port of Mars",
      type: "Website",
      date: "Oct. 2019 - May 2020",
      description: "Website built with a team for a research project.",
      pictureURL: "imageOne",
      tempQuery: undefined,
    },
    technologyTags: [
      "Vue",
      "Vuex",
      "TypeScript",
      "Node.js",
      "Postgres",
      "TypeORM",
      "Docker",
    ],
    externalLinks: {
      hostedURL: "",
      githubURL: "https://github.com/virtualcommons/port-of-mars",
      figmaURL:
        "https://www.figma.com/file/wVu7L9qZzVWzwR7cbmvsDA/Port-of-Mars-V3?node-id=0%3A1",
    },
    gallery: [],
  },
  {
    order: 2,
    preview: {
      title: "NASA PsycheTap",
      type: "Mobile Application",
      date: "Jan. 2020 - May 2020",
      description:
        "Mobile game built for university capstone project, sponsored by NASA.",
      pictureURL: "imageTwo",
      tempQuery: undefined,
    },
    technologyTags: ["React", "React Native", "Expo"],
    externalLinks: {
      hostedURL: "",
      githubURL: "https://github.com/lfaivre/Psyche-Cobalt-Mobile-App-Updated",
      figmaURL: "",
    },
    gallery: [],
  },
  {
    order: 3,
    preview: {
      title: "Mountain Air Music Series",
      type: "Design Prototype",
      date: "May 2020",
      description: "Design prototype developed for business client.",
      pictureURL: "imageThree",
      tempQuery: undefined,
    },
    technologyTags: ["Figma"],
    externalLinks: {
      hostedURL: "",
      githubURL: "",
      figmaURL:
        "https://www.figma.com/file/MnQFctNvknBRNHAbYThk5hXW/Mountain-Air-Music-Series-Prototypes?node-id=168%3A9",
    },
    gallery: [],
  },
  {
    order: 4,
    preview: {
      title: "Mountain Air Music Series",
      type: "Website",
      date: "May 2020",
      description: "Website built for business client.",
      pictureURL: "imageFour",
      tempQuery: undefined,
    },
    technologyTags: ["Pug", "Sass", "Tailwind CSS", "Node.js", "Express"],
    externalLinks: {
      hostedURL: "",
      githubURL: "https://github.com/KevalaDesign/mountainairmusicseries",
      figmaURL:
        "https://www.figma.com/file/MnQFctNvknBRNHAbYThk5hXW/Mountain-Air-Music-Series-Prototypes?node-id=0%3A1",
    },
    gallery: [],
  },
  {
    order: 5,
    preview: {
      title: "Portfolio 2019",
      type: "Website",
      date: "Aug. 2019",
      description: "Website built for and used as a personal portfolio.",
      pictureURL: "imageFive",
      tempQuery: undefined,
    },
    technologyTags: ["React", "Create React App", "CSS"],
    externalLinks: {
      hostedURL: "",
      githubURL: "https://github.com/lfaivre/adelerium",
      figmaURL:
        "https://www.figma.com/file/MOD24INi0rMAOuiHsXkEgDOk/Redesign?node-id=113%3A2",
    },
    gallery: [],
  },
  {
    order: 6,
    preview: {
      title: "Portfolio 2019",
      type: "Design Prototype",
      date: "Aug. 2019",
      description:
        "Archived design prototype developed for personal portfolio.",
      pictureURL: "imageSix",
      tempQuery: undefined,
    },
    technologyTags: ["Figma"],
    externalLinks: {
      hostedURL: "",
      githubURL: "",
      figmaURL:
        "https://www.figma.com/file/PBzEQObijIOyUIhgF5NzYojG/Page-One?node-id=88%3A2",
    },
    gallery: [],
  },
  {
    order: 7,
    preview: {
      title: "Kevala Design",
      type: "Website",
      date: "Jun. 2019",
      description: "Website built for web development & design studio.",
      pictureURL: "imageSeven",
      tempQuery: undefined,
    },
    technologyTags: ["Pug", "Sass", "Node.js", "Express"],
    externalLinks: {
      hostedURL: "http://kevaladesign.com/",
      githubURL: "https://github.com/lfaivre/kevaladesign-site-public",
      figmaURL:
        "https://www.figma.com/file/XntgMboyMuYbMQcz0zsB0BQA/Page-One?node-id=0%3A1",
    },
    gallery: [],
  },
  {
    order: 8,
    preview: {
      title: "Funny for a Girl",
      type: "Website",
      date: "Jul. 2019",
      description: "Website built for a client's senior project.",
      pictureURL: "imageEight",
      tempQuery: undefined,
    },
    technologyTags: ["Pug", "Sass", "Node.js", "Express"],
    externalLinks: {
      hostedURL: "http://funnyforagirllive.com/",
      githubURL: "https://github.com/lfaivre/funnyforagirl-public",
      figmaURL:
        "https://www.figma.com/file/XGEc6z33uK69YBgY0DKWQxPQ/Page-One?node-id=0%3A1",
    },
    gallery: [],
  },
]

interface ProjectDataAttributes {
  projects: Array<ProjectAttributes>
  count(): number
}

export const ProjectData: ProjectDataAttributes = {
  projects: ProjectDataArray,
  count: () => ProjectDataArray.length,
}

export enum ProjectDirection {
  Left,
  Right,
}
