import { SocialLink } from '@adelerium/components/AboutPage/SocialLinkSquare/types';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const data: SocialLink = {
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
