// TODO: REFACTOR TYPESCRIPT, PATCHED IN FOR NOW

export type TPathname =
  | '/'
  | '/about'
  | '/about/'
  | '/projects'
  | '/projects/'
  | '/blog'
  | '/blog/';
export const INDEX: '/' = '/';
export const ABOUT: '/about' = '/about';
export const ABOUT_ALT: '/about/' = '/about/';
export const PROJECTS: '/projects' = '/projects';
export const PROJECTS_ALT: '/projects/' = '/projects/';
export const BLOG: '/blog' = '/blog';
export const BLOG_ALT: '/blog/' = '/blog/';
export const Pathnames: Array<TPathname> = [
  INDEX,
  ABOUT,
  ABOUT_ALT,
  PROJECTS,
  PROJECTS_ALT,
  BLOG,
  BLOG_ALT,
];

export type TText = 'Home' | 'About' | 'Projects' | 'Blog' | 'Error';
export const INDEX_TEXT: TText = 'Home';
export const ABOUT_TEXT: TText = 'About';
export const PROJECTS_TEXT: TText = 'Projects';
export const BLOG_TEXT: TText = 'Blog';
export const ERROR_TEXT: TText = 'Error';

export type TSitePaths = {
  [pathname in TPathname]: TPathData;
};

export interface TPathData {
  pathname: TPathname;
  text: TText;
  previous: TPathname;
  next: TPathname;
}

// @todo Get rid of this duplicate type
export interface PathDataHook {
  pathname: TPathname | undefined;
  pathData: TPathData | undefined;
  isValidPath: boolean;
  isIndex: boolean;
}
