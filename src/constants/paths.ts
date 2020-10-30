/** @note Not Found (404) Page */

export const notFoundPagePathname = ``;
export const notFoundPagePathnameAlt = ``;
export const notFoundPageTitleText = `adelerium`;

/** @note Home (Index) Page */

export const homePagePathname = `/`;
export const homePagePathnameAlt = ``;
export const homePageTitleText = `Home`;

/** @note About Page */

export const aboutPagePathname = `/about`;
export const aboutPagePathnameAlt = `${aboutPagePathname}/`;
export const aboutPageTitleText = `About`;

/** @note Projects Page */

export const projectsPagePathname = `/projects`;
export const projectsPagePathnameAlt = `${projectsPagePathname}/`;
export const projectsPageTitleText = `Projects`;

/** @note Path Data for All Valid Pages */

export const homePagePathData = {
  pathname: homePagePathname,
  previous: homePagePathname,
  next: aboutPagePathname,
  text: homePageTitleText,
};

export const aboutPagePathData = {
  pathname: aboutPagePathname,
  previous: homePagePathname,
  next: projectsPagePathname,
  text: aboutPageTitleText,
};

export const projectsPagePathData = {
  pathname: projectsPagePathname,
  previous: aboutPagePathname,
  next: homePagePathname,
  text: projectsPageTitleText,
};

export const sitePaths = {
  [homePagePathname]: homePagePathData,
  [aboutPagePathname]: aboutPagePathData,
  [aboutPagePathnameAlt]: aboutPagePathData,
  [projectsPagePathname]: projectsPagePathData,
  [projectsPagePathnameAlt]: projectsPagePathData,
};
