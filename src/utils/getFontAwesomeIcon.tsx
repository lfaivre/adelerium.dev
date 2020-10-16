import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons/faSoundcloud';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement } from 'react';

const APPLE_MUSIC = `Apple Music`;
const SOUNDCLOUD = `SoundCloud`;
const YOUTUBE = `YouTube`;
const OTHER = `Other`;

export type IconType = typeof APPLE_MUSIC | typeof SOUNDCLOUD | typeof YOUTUBE | typeof OTHER;

export const getFontAwesomeIcon = (iconType: IconType): ReactElement => {
  switch (iconType) {
    case APPLE_MUSIC: {
      return <FontAwesomeIcon icon={faApple} size="2x" />;
    }
    case SOUNDCLOUD: {
      return <FontAwesomeIcon icon={faSoundcloud} size="2x" />;
    }
    case YOUTUBE: {
      return <FontAwesomeIcon icon={faYoutube} size="2x" />;
    }
    default: {
      return <FontAwesomeIcon icon={faApple} size="2x" />;
    }
  }
};
