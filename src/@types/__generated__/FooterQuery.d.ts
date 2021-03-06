/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FooterQuery
// ====================================================

export interface FooterQuery_footerData_facts {
  readonly text: string | null;
}

export interface FooterQuery_footerData {
  readonly facts: ReadonlyArray<FooterQuery_footerData_facts | null> | null;
}

export interface FooterQuery_brandingLink {
  readonly destination: string | null;
}

export interface FooterQuery_linkedInLink {
  readonly destination: string | null;
}

export interface FooterQuery_gitHubLink {
  readonly destination: string | null;
}

export interface FooterQuery {
  readonly footerData: FooterQuery_footerData | null;
  readonly brandingLink: FooterQuery_brandingLink | null;
  readonly linkedInLink: FooterQuery_linkedInLink | null;
  readonly gitHubLink: FooterQuery_gitHubLink | null;
}
