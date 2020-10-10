import { INDEX, ABOUT, ABOUT_ALT, PROJECTS, PROJECTS_ALT } from '../types/paths';

export const XSMOBILE = 360;
export const MOBILE = 375;
export const SM = 640;
export const MD = 768;
export const LG = 1024;
export const XL = 1280;

// @todo Turn this into a typed enum value
export const SCREEN_SIZE = Object.freeze({
  XSMOBILE,
  MOBILE,
  SM,
  MD,
  LG,
  XL,
});

export const pathsWithImgBgsDesktop = {
  [INDEX]: INDEX,
};

export const pathsWithImgBgsMobile = {
  [ABOUT]: ABOUT,
  [ABOUT_ALT]: ABOUT_ALT,
  [PROJECTS]: PROJECTS,
  [PROJECTS_ALT]: PROJECTS_ALT,
};
