// @todo Refactor TypeScript

export type TPathname =
  | '/'
  | '/about'
  | '/about/'
  | '/projects'
  | '/projects/'
  | '/blog'
  | '/blog/';

export const INDEX = '/' as const;
export const ABOUT = '/about' as const;
export const ABOUT_ALT = '/about/' as const;
export const PROJECTS = '/projects' as const;
export const PROJECTS_ALT = '/projects/' as const;
export const BLOG = '/blog' as const;
export const BLOG_ALT = '/blog/' as const;

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

export interface TPathData {
  pathname: TPathname;
  text: TText;
  previous: TPathname;
  next: TPathname;
}

export type TSitePaths = {
  [pathname in TPathname]: TPathData;
};

// @todo Get rid of this duplicate type
export interface PathDataHook {
  pathname: TPathname | undefined;
  pathData: TPathData | undefined;
  isValidPath: boolean;
  isIndex: boolean;
}
