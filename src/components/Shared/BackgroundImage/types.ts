// @note Types for File: index.ts

import { FluidObject } from 'gatsby-image';

export interface BackgroundImageProps {
  headerHeight: number;
  isIndex: boolean;
}

type FluidQuery = FluidObject | FluidObject[];
type ChildImageSharpQuery = { fluid: FluidQuery };
type BackgroundImageQuery = { childImageSharp: ChildImageSharpQuery };
export type GraphQLStaticQuery = { backgroundImage: BackgroundImageQuery };

// @note Types for File: styles.ts

export interface BackgroundImageProps {
  headerHeight: number;
  isIndex: boolean;
}
