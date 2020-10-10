import { FixedObject, FluidObject } from 'gatsby-image';

type ContentfulAsset = { fixed: FixedObject };

type Fluid = { fluid: FluidObject };
type ChildImageSharp = { childImageSharp: Fluid };

export type PageQueryData = {
  contentfulAsset: ContentfulAsset;
  accentImage: ChildImageSharp;
};
