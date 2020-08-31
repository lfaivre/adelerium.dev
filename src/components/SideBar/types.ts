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
