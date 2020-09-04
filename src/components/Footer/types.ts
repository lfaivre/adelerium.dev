import { ILinkFields } from '../../types/general';

// @note Types for File: index.ts

/** Fact entity used in footer for portfolio (https://www.adelerium.dev/). */

export interface IFactFields {
  /** Text */
  text: string;

  /** Source */
  source?: string | undefined;
}

/** Footer data used in portfolio website (https://www.adelerium.dev/). */

export interface IFooterFields {
  /** Title */
  title: string;

  /** Branding Link */
  brandingLink: Partial<ILinkFields>;

  /** LinkedIn Link */
  linkedInLink: Partial<ILinkFields>;

  /** GitHub Link */
  gitHubLink: Partial<ILinkFields>;

  /** Facts */
  facts: Partial<IFactFields>[];
}

export type GraphQLStaticQuery = { contentfulFooter: IFooterFields };
