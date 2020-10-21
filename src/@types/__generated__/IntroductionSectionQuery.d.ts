/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IntroductionSectionQuery
// ====================================================

export interface IntroductionSectionQuery_introductionSection_content_content {
  readonly content: string | null;
}

export interface IntroductionSectionQuery_introductionSection_content {
  readonly title: string | null;
  readonly order: number | null;
  readonly content: IntroductionSectionQuery_introductionSection_content_content | null;
}

export interface IntroductionSectionQuery_introductionSection {
  readonly title: string | null;
  readonly content: ReadonlyArray<IntroductionSectionQuery_introductionSection_content | null> | null;
}

export interface IntroductionSectionQuery {
  readonly introductionSection: IntroductionSectionQuery_introductionSection | null;
}
