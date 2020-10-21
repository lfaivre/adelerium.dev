/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BrandingSectionQuery
// ====================================================

export interface BrandingSectionQuery_brandingSection_content_content {
  readonly content: string | null;
}

export interface BrandingSectionQuery_brandingSection_content {
  readonly title: string | null;
  readonly order: number | null;
  readonly content: BrandingSectionQuery_brandingSection_content_content | null;
}

export interface BrandingSectionQuery_brandingSection {
  readonly title: string | null;
  readonly content: ReadonlyArray<BrandingSectionQuery_brandingSection_content | null> | null;
}

export interface BrandingSectionQuery {
  readonly brandingSection: BrandingSectionQuery_brandingSection | null;
}
