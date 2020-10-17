import { APPLE_MUSIC, FIGMA, GITHUB, GOOGLE, LINKEDIN, SOUNDCLOUD, YOUTUBE } from '@adelerium/constants/font-awesome';
import { IconSize, IconType } from '@adelerium/utils/font-awesome/types';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

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
