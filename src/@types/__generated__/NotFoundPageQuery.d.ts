/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NotFoundPageQuery
// ====================================================

export interface NotFoundPageQuery_metaImage_fixed {
  readonly base64: string | null;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
}

export interface NotFoundPageQuery_metaImage {
  readonly fixed: NotFoundPageQuery_metaImage_fixed | null;
}

export interface NotFoundPageQuery {
  readonly metaImage: NotFoundPageQuery_metaImage | null;
}
