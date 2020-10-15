import { SocialLink } from '@adelerium/components/AboutPage/SocialLinkSquare/types';
import { faFigma } from '@fortawesome/free-brands-svg-icons/faFigma';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

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
