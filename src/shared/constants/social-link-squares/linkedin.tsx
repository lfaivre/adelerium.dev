import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { SocialLink } from '../../../components/AboutPage/SocialLinkSquare/types';

export const data: SocialLink = {
  title: `LinkedIn`,
  subTitle: `linkedin.com/lorenzofaivre`,
  externalLinkText: `View LinkedIn Profile`,
  externalLink: `https://www.linkedin.com/in/lorenzofaivre/`,
  Icon: <FontAwesomeIcon icon={faLinkedin} size="4x" />,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    externalLinkTextColor: `var(--color-LinkedInBlue)`,
    backgroundColor: `var(--color-LinkedInBlue)`,
  },
};
