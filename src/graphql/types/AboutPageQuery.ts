/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AboutPageQuery
// ====================================================

export interface AboutPageQuery_metaImage_fixed {
  readonly __typename: 'ContentfulFixed';
  readonly base64: string | null;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
}

export interface AboutPageQuery_metaImage {
  readonly __typename: 'ContentfulAsset';
  readonly fixed: AboutPageQuery_metaImage_fixed | null;
}

export interface AboutPageQuery {
  readonly metaImage: AboutPageQuery_metaImage | null;
}
