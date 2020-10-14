/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_metaImage_fixed {
  readonly __typename: 'ContentfulFixed';
  readonly base64: string | null;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
}

export interface HomePageQuery_metaImage {
  readonly __typename: 'ContentfulAsset';
  readonly fixed: HomePageQuery_metaImage_fixed | null;
}

export interface HomePageQuery_brandingLink {
  readonly __typename: 'ContentfulLink';
  readonly destination: string | null;
}

export interface HomePageQuery {
  readonly metaImage: HomePageQuery_metaImage | null;
  readonly brandingLink: HomePageQuery_brandingLink | null;
}
