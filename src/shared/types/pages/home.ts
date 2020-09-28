import { FixedObject, FluidObject } from 'gatsby-image';

type MetaImage = { fixed: FixedObject };

type ChildImageSharp = { fluid: FluidObject };
type BackgroundImage = { childImageSharp: ChildImageSharp };

export type PageQueryData = {
  metaImage: MetaImage;
  backgroundImage: BackgroundImage;
};
