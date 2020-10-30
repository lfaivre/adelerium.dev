/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DetailsQuery
// ====================================================

export interface DetailsQuery_projectDetails_nodes_content_childMdx {
  readonly body: string;
}

export interface DetailsQuery_projectDetails_nodes_content {
  readonly childMdx: DetailsQuery_projectDetails_nodes_content_childMdx | null;
}

export interface DetailsQuery_projectDetails_nodes {
  readonly id: string;
  readonly slug: string | null;
  readonly title: string | null;
  readonly content: DetailsQuery_projectDetails_nodes_content | null;
}

export interface DetailsQuery_projectDetails {
  readonly nodes: ReadonlyArray<DetailsQuery_projectDetails_nodes>;
}

export interface DetailsQuery {
  readonly projectDetails: DetailsQuery_projectDetails;
}
