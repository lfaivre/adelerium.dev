import {
  APPLE_MUSIC,
  FIGMA,
  FIREFOX,
  GITHUB,
  GOOGLE,
  GOOGLE_DRIVE,
  LINKEDIN,
  OTHER,
  SOUNDCLOUD,
  YOUTUBE,
} from '@adelerium/constants/icons';
import { ReactElement } from 'react';

export type IconType =
  | typeof APPLE_MUSIC
  | typeof FIGMA
  | typeof FIREFOX
  | typeof GITHUB
  | typeof GOOGLE
  | typeof GOOGLE_DRIVE
  | typeof LINKEDIN
  | typeof SOUNDCLOUD
  | typeof YOUTUBE
  | typeof OTHER;

export type IconMap = { [key in IconType]: ReactElement };

export type GetIconFunction = (iconType: IconType, iconSize?: number) => ReactElement;
