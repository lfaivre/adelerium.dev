export type TPathname = "/" | "/about" | "/projects" | "/blog"
export const INDEX: "/" = "/"
export const ABOUT: "/about" = "/about"
export const PROJECTS: "/projects" = "/projects"
export const BLOG: "/blog" = "/blog"
export const Pathnames: Array<TPathname> = [INDEX, ABOUT, PROJECTS, BLOG]

export type TText = "Home" | "About" | "Projects" | "Blog"
export const INDEX_TEXT: TText = "Home"
export const ABOUT_TEXT: TText = "About"
export const PROJECTS_TEXT: TText = "Projects"
export const BLOG_TEXT: TText = "Blog"

export type TSitePaths = {
  [pathname in TPathname]: TPathData
}

export interface TPathData {
  pathname: TPathname
  text: TText
  previous: TPathname
  next: TPathname
}
