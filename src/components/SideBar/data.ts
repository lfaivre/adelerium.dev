import { TSideBarData } from "../../types/sidebar"

export const SideBarData: TSideBarData = {
  internal: {
    title: "Navigation",
    links: [
      {
        isInternal: true,
        text: "About",
        url: "/about",
      },
      {
        isInternal: true,
        text: "Projects",
        url: "/projects",
      },
      {
        isInternal: true,
        text: "Blog",
        url: "/blog",
      },
    ],
  },
  external: {
    title: "Externals",
    links: [
      {
        isInternal: false,
        text: "GitHub",
        url: "https://github.com/lfaivre",
      },
      {
        isInternal: false,
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/lorenzofaivre/",
      },
      {
        isInternal: false,
        text: "Resume",
        url:
          "https://drive.google.com/file/d/19Gdz-dwWnlBov73sDIBnr68bf04NvnIL/view?usp=sharing",
      },
      {
        isInternal: false,
        text: "Email",
        url: "mailto:lorenzo.faivre@gmail.com",
      },
    ],
  },
}
