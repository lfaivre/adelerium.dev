/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SiteMetadataQuery
// ====================================================

export interface SiteMetadataQuery_site_siteMetadata {
  readonly description: string | null;
  readonly title: string | null;
  readonly author: string | null;
  readonly siteUrl: string | null;
}

export interface SiteMetadataQuery_site {
  readonly siteMetadata: SiteMetadataQuery_site_siteMetadata | null;
}

export interface SiteMetadataQuery {
  readonly site: SiteMetadataQuery_site | null;
}
