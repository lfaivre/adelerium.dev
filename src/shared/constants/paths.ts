import {
  INDEX,
  INDEX_TEXT,
  ABOUT,
  ABOUT_ALT,
  ABOUT_TEXT,
  PROJECTS,
  PROJECTS_ALT,
  PROJECTS_TEXT,
  BLOG,
  BLOG_ALT,
  BLOG_TEXT,
  TSitePaths,
  TPathData,
} from '../../types/paths';

const indexPathData = {
  pathname: INDEX,
  text: INDEX_TEXT,
  previous: INDEX,
  next: ABOUT,
};

const aboutPathData = {
  pathname: ABOUT,
  text: ABOUT_TEXT,
  previous: INDEX,
  next: PROJECTS,
};

const projectsPathData = {
  pathname: PROJECTS,
  text: PROJECTS_TEXT,
  previous: ABOUT,
  next: BLOG,
};

const blogPathData = {
  pathname: BLOG,
  text: BLOG_TEXT,
  previous: PROJECTS,
  next: INDEX,
};

export const SitePaths: TSitePaths = {
  [INDEX]: indexPathData,
  [ABOUT]: aboutPathData,
  [ABOUT_ALT]: aboutPathData,
  [PROJECTS]: projectsPathData,
  [PROJECTS_ALT]: projectsPathData,
  [BLOG]: blogPathData,
  [BLOG_ALT]: blogPathData,
};

export const DefaultPath: TPathData = indexPathData;
