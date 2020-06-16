import {
  INDEX,
  INDEX_TEXT,
  ABOUT,
  ABOUT_TEXT,
  PROJECTS,
  PROJECTS_TEXT,
  BLOG,
  BLOG_TEXT,
  TSitePaths,
  TPathData,
} from "../types/paths"

export const SitePaths: TSitePaths = {
  [INDEX]: {
    pathname: INDEX,
    text: INDEX_TEXT,
    previous: INDEX,
    next: ABOUT,
  },
  [ABOUT]: {
    pathname: ABOUT,
    text: ABOUT_TEXT,
    previous: INDEX,
    next: PROJECTS,
  },
  [PROJECTS]: {
    pathname: PROJECTS,
    text: PROJECTS_TEXT,
    previous: ABOUT,
    next: BLOG,
  },
  [BLOG]: {
    pathname: BLOG,
    text: BLOG_TEXT,
    previous: PROJECTS,
    next: INDEX,
  },
}

export const DefaultPath: TPathData = {
  pathname: INDEX,
  text: INDEX_TEXT,
  previous: INDEX,
  next: ABOUT,
}
