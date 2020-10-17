/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MediaLinkQuery
// ====================================================

export interface MediaLinkQuery_mediaLinks_nodes_displayImage_fluid {
  readonly tracedSVG: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
}

export interface MediaLinkQuery_mediaLinks_nodes_displayImage {
  readonly fluid: MediaLinkQuery_mediaLinks_nodes_displayImage_fluid | null;
}

export interface MediaLinkQuery_mediaLinks_nodes {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly date: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly displayImage: MediaLinkQuery_mediaLinks_nodes_displayImage | null;
  readonly accentColorHex: string | null;
}

export interface MediaLinkQuery_mediaLinks {
  readonly nodes: ReadonlyArray<MediaLinkQuery_mediaLinks_nodes>;
}

export interface MediaLinkQuery {
  readonly mediaLinks: MediaLinkQuery_mediaLinks;
}
