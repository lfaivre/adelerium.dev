import { ReactElement } from 'react';

export type SocialLinkStyling = {
  titleTextColor: string;
  externalLinkTextColor: string;
  backgroundColor: string;
};

export type SocialLink = {
  title: string;
  subTitle: string;
  externalLinkText: string;
  externalLink: string;
  Icon: ReactElement;
  styling: SocialLinkStyling;
};
