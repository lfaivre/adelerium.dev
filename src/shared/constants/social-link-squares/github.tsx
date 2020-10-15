import { SocialLink } from '@adelerium/components/AboutPage/SocialLinkSquare/types';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const data: SocialLink = {
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
