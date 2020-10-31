/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DetailsQuery
// ====================================================

export interface DetailsQuery_projects_nodes_details_childContentfulProjectDetailsContentTextNode_childMdx {
  readonly body: string;
}

export interface DetailsQuery_projects_nodes_details_childContentfulProjectDetailsContentTextNode {
  readonly childMdx: DetailsQuery_projects_nodes_details_childContentfulProjectDetailsContentTextNode_childMdx | null;
}

export interface DetailsQuery_projects_nodes_details {
  readonly childContentfulProjectDetailsContentTextNode: DetailsQuery_projects_nodes_details_childContentfulProjectDetailsContentTextNode | null;
}

export interface DetailsQuery_projects_nodes {
  readonly id: string;
  readonly slug: string | null;
  readonly title: string | null;
  readonly type: string | null;
  readonly dateRangeBeginning: any | null;
  readonly dateRangeEnd: any | null;
  readonly details: DetailsQuery_projects_nodes_details | null;
}

export interface DetailsQuery_projects {
  readonly nodes: ReadonlyArray<DetailsQuery_projects_nodes>;
}

export interface DetailsQuery {
  readonly projects: DetailsQuery_projects;
}
