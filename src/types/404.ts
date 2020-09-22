import { FixedObject } from 'gatsby-image';

type ContentfulAsset = { fixed: FixedObject };

export type PageQueryData = {
  contentfulAsset: ContentfulAsset;
};
