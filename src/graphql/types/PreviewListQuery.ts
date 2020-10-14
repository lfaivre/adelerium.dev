/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PreviewListQuery
// ====================================================

export interface PreviewListQuery_projectPreviews_edges_node_previewDescription {
  readonly __typename: 'contentfulProjectPreviewDescriptionTextNode';
  readonly previewDescription: string | null;
}

export interface PreviewListQuery_projectPreviews_edges_node_previewPicture_fluid {
  readonly __typename: 'ContentfulFluid';
  readonly tracedSVG: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
}

export interface PreviewListQuery_projectPreviews_edges_node_previewPicture {
  readonly __typename: 'ContentfulAsset';
  readonly fluid: PreviewListQuery_projectPreviews_edges_node_previewPicture_fluid | null;
}

export interface PreviewListQuery_projectPreviews_edges_node {
  readonly __typename: 'ContentfulProject';
  readonly id: string;
  readonly title: string | null;
  readonly rating: number | null;
  readonly type: string | null;
  readonly dateRangeBeginning: any | null;
  readonly dateRangeEnd: any | null;
  readonly previewDescription: PreviewListQuery_projectPreviews_edges_node_previewDescription | null;
  readonly previewPicture: PreviewListQuery_projectPreviews_edges_node_previewPicture | null;
  readonly technologyTags: ReadonlyArray<string | null> | null;
  readonly hostedUrl: string | null;
  readonly gitHubUrl: string | null;
  readonly figmaUrl: string | null;
}

export interface PreviewListQuery_projectPreviews_edges {
  readonly __typename: 'ContentfulProjectEdge';
  readonly node: PreviewListQuery_projectPreviews_edges_node;
}

export interface PreviewListQuery_projectPreviews {
  readonly __typename: 'ContentfulProjectConnection';
  readonly edges: ReadonlyArray<PreviewListQuery_projectPreviews_edges>;
}

export interface PreviewListQuery {
  readonly projectPreviews: PreviewListQuery_projectPreviews;
}
