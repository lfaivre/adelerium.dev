/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProjectsPageQuery
// ====================================================

export interface ProjectsPageQuery_metaImage_fixed {
  readonly base64: string | null;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
}

export interface ProjectsPageQuery_metaImage {
  readonly fixed: ProjectsPageQuery_metaImage_fixed | null;
}

export interface ProjectsPageQuery {
  readonly metaImage: ProjectsPageQuery_metaImage | null;
}
