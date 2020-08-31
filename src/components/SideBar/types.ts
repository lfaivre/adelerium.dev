// import React from 'react';
import { FluidObject } from 'gatsby-image';

// @note Types for File: index.ts

type FluidQuery = FluidObject | FluidObject[];
type ChildImageSharpQuery = { fluid: FluidQuery };
type ProfileQuery = { childImageSharp: ChildImageSharpQuery };
export type GraphQLStaticQuery = { profile: ProfileQuery };

// @note Types for File: styles.ts

export interface SelectedProps {
  selected: boolean;
}

// @note Interface Source: `node_modules/gatsby-plugin-google-analytics/index.d.ts`
// interface OutboundLinkProps {
//   onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
//   eventAction?: string;
//   eventCategory?: string;
//   eventLabel?: string;
// }

// export interface StyledExternalLinkProps
//   extends React.Component<
//     OutboundLinkProps & React.HTMLProps<HTMLAnchorElement>,
//     unknown
//   > {
//   className: string;
//   children: React.ReactNode;
// }
