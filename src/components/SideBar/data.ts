import { TSideBarData } from "../../types/sidebar"

export const SideBarData: TSideBarData = {
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
