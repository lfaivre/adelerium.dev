import {
  ABOUT,
  ABOUT_ALT,
  ABOUT_TEXT,
  INDEX,
  INDEX_TEXT,
  PROJECTS,
  PROJECTS_ALT,
  PROJECTS_TEXT,
  TPathData,
  TSitePaths,
} from '../types/paths';

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
  next: INDEX,
};

export const SitePaths: TSitePaths = {
  [INDEX]: indexPathData,
  [ABOUT]: aboutPathData,
  [ABOUT_ALT]: aboutPathData,
  [PROJECTS]: projectsPathData,
  [PROJECTS_ALT]: projectsPathData,
};

export const DefaultPath: TPathData = indexPathData;
