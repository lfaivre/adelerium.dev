import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';

import { SocialLink } from '../../../components/AboutPage/SocialLinkSquare/types';

export const data: SocialLink = {
  title: `Figma`,
  subTitle: `figma.com/@lorenzofaivre`,
  externalLinkText: `View Figma Profile`,
  externalLink: `https://www.figma.com/@lorenzofaivre`,
  Icon: <FontAwesomeIcon icon={faFigma} size="4x" />,
  styling: {
    titleTextColor: `var(--color-OffWhite)`,
    externalLinkTextColor: `var(--color-FigmaGreen)`,
    backgroundColor: `var(--color-FigmaGreen)`,
  },
};
