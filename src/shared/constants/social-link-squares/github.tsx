import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

import { SocialLink } from '../../../components/AboutPage/SocialLinkSquare/types';

export const SocialLinkData: SocialLink = {
  title: `GitHub`,
  subTitle: `github.com/lfaivre`,
  externalLinkText: `View GitHub Profile`,
  externalLink: `https://github.com/lfaivre`,
  Icon: <FontAwesomeIcon icon={faGithub} size="4x" />,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    externalLinkTextColor: `var(--color-GitHubGray)`,
    backgroundColor: `var(--color-GitHubGray)`,
  },
};
