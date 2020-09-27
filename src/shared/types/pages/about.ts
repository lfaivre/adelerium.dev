import { FluidObject, FixedObject } from 'gatsby-image';

import { ILink } from '../links';

type Body = { body: string };
type AccentImage = { fluid: FluidObject | FluidObject[] };

export interface IAboutSectionFields {
  /** Title */
  title: string;

  /** Order */
  order: number;

  /** Body */
  body: Body;

  /** Link */
  link?: ILink | undefined;

  /** First Link Text Fragment */
  firstLinkTextFragment?: string | undefined;

  /** Second Link Text Fragment */
  secondLinkTextFragment?: string | undefined;

  /** Accent Image */
  accentImage?: AccentImage | undefined;
}

/** About section entity used in portfolio website (https://www.adelerium.dev/). */

export interface IAboutSection extends IAboutSectionFields {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'aboutSection';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

type AboutSectionNode = { node: IAboutSectionFields };
type AllContentfulAboutSection = { edges: AboutSectionNode[] };
type ContentfulAsset = { fixed: FixedObject };

export type PageQueryData = {
  allContentfulAboutSection: AllContentfulAboutSection;
  contentfulAsset: ContentfulAsset;
};
