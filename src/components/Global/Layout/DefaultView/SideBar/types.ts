import { FluidObject } from 'gatsby-image';
import { ILinkFields } from '../../../../../shared/types/links';

// @note Types for File: index.ts

type ProfilePicture = { fluid: FluidObject | FluidObject[] };

/** Side bar data used in portfolio (https://www.adelerium.dev/). */

export interface ISideBarFields {
  /** Title */
  title: string;

  /** Profile Picture */
  profilePicture: ProfilePicture;

  /** Internal Links */
  internalLinks: ILinkFields[];

  /** External Links */
  externalLinks: ILinkFields[];

  /** Email */
  email: string;

  /** Branding Link */
  brandingLink: Partial<ILinkFields>;
}

type Fluid = { fluid: FluidObject };
type ChildImageSharp = { childImageSharp: Fluid };

export type GraphQLStaticQuery = {
  profileBackgroundImage: ChildImageSharp;
  contentfulSideBar: ISideBarFields;
};
