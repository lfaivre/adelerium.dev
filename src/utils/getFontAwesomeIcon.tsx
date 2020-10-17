import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

const APPLE_MUSIC = `Apple Music`;
const FIGMA = `Figma`;
const GITHUB = `GitHub`;
const GOOGLE = `Google`;
const LINKEDIN = `LinkedIn`;
const SOUNDCLOUD = `SoundCloud`;
const YOUTUBE = `YouTube`;
const OTHER = `Other`;

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

export const getFontAwesomeIcon = (iconType: IconType, iconSize?: IconSize): ReactElement => {
  switch (iconType) {
    case APPLE_MUSIC: {
      return <FontAwesomeIcon icon={faApple} size={iconSize || '2x'} />;
    }
    case FIGMA: {
      return <FontAwesomeIcon icon={faFigma} size={iconSize || '2x'} />;
    }
    case GITHUB: {
      return <FontAwesomeIcon icon={faGithub} size={iconSize || '2x'} />;
    }
    case GOOGLE: {
      return <FontAwesomeIcon icon={faGoogle} size={iconSize || '2x'} />;
    }
    case LINKEDIN: {
      return <FontAwesomeIcon icon={faLinkedin} size={iconSize || '2x'} />;
    }
    case SOUNDCLOUD: {
      return <FontAwesomeIcon icon={faSoundcloud} size={iconSize || '2x'} />;
    }
    case YOUTUBE: {
      return <FontAwesomeIcon icon={faYoutube} size={iconSize || '2x'} />;
    }
    default: {
      return <></>;
    }
  }
};
