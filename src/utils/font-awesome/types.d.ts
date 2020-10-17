import {
  APPLE_MUSIC,
  FIGMA,
  GITHUB,
  GOOGLE,
  LINKEDIN,
  OTHER,
  SOUNDCLOUD,
  YOUTUBE,
} from '@adelerium/constants/font-awesome';

export type IconType =
  | typeof APPLE_MUSIC
  | typeof FIGMA
  | typeof GITHUB
  | typeof GOOGLE
  | typeof LINKEDIN
  | typeof SOUNDCLOUD
  | typeof YOUTUBE
  | typeof OTHER;

export type IconSize = '2x' | '4x';
