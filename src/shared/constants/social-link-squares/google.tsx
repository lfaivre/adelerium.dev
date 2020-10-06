import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';

import { SocialLink } from '../../../components/AboutPage/SocialLinkSquare/types';

export const SocialLinkData: SocialLink = {
  title: `Email`,
  subTitle: `lorenzo.faivre@gmail.com`,
  externalLinkText: `Send Me an Email`,
  externalLink: `mailto:lorenzo.faivre@gmail.com`,
  Icon: <FontAwesomeIcon icon={faGoogle} size="4x" />,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    externalLinkTextColor: `var(--color-GoogleRed)`,
    backgroundColor: `var(--color-GoogleRed)`,
  },
};
