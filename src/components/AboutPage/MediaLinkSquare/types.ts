import { ReactElement } from 'react';
import { FluidObject } from 'gatsby-image';

export type MediaLinkStyling = {
  titleTextColor: string;
  backgroundColor: string;
};

export type MediaLink = {
  description: string;
  date: string;
  title: string;
  subTitle: string;
  externalLink: string;
  Icon: ReactElement;
  backgroundImageQuery: () => FluidObject;
  styling: MediaLinkStyling;
};
