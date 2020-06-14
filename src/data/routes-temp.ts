export const pathData: any = {
  default: {
    text: "Home",
    previous: "/",
    next: "/about",
  },
  "/": {
    text: "Home",
    previous: "/",
    next: "/about",
  },
  "/about": {
    text: "About",
    previous: "/",
    next: "/projects",
  },
  "/projects": {
    text: "Projects",
    previous: "/about",
    next: "/blog",
  },
  "/blog": {
    text: "Blog",
    previous: "/projects",
    next: "/",
  },
}

export enum InternalLinkDirection {
  Previous,
  Next,
}
