/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SocialLinkQuery
// ====================================================

export interface SocialLinkQuery_socialLinks_nodes {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly type: string | null;
  readonly externalLinkText: string | null;
  readonly externalLink: string | null;
  readonly accentColorHex: string | null;
}

export interface SocialLinkQuery_socialLinks {
  readonly nodes: ReadonlyArray<SocialLinkQuery_socialLinks_nodes>;
}

export interface SocialLinkQuery {
  readonly socialLinks: SocialLinkQuery_socialLinks;
}
