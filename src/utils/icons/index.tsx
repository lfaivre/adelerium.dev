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
import { GetIconFunction, IconMap } from '@adelerium/utils/icons/types';
import React from 'react';
import {
  FaApple,
  FaFigma,
  FaFirefox,
  FaGithub,
  FaGoogle,
  FaGoogleDrive,
  FaLinkedin,
  FaSoundcloud,
  FaYoutube,
} from 'react-icons/fa';

const iconMap: IconMap = {
  [APPLE_MUSIC]: <FaApple />,
  [FIGMA]: <FaFigma />,
  [FIREFOX]: <FaFirefox />,
  [GITHUB]: <FaGithub />,
  [GOOGLE]: <FaGoogle />,
  [GOOGLE_DRIVE]: <FaGoogleDrive />,
  [LINKEDIN]: <FaLinkedin />,
  [SOUNDCLOUD]: <FaSoundcloud />,
  [YOUTUBE]: <FaYoutube />,
  [OTHER]: <></>,
};

export const getIcon: GetIconFunction = (iconType, iconSize) => {
  const size = iconSize ? `${iconSize}rem` : `2rem`;
  return React.cloneElement(iconMap[iconType], { size });
};
