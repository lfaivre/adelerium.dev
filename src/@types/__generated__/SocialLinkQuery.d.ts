/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SocialLinkQuery
// ====================================================

export interface SocialLinkQuery_email {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly accentColorHex: string | null;
}

export interface SocialLinkQuery_linkedin {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly accentColorHex: string | null;
}

export interface SocialLinkQuery_github {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly accentColorHex: string | null;
}

export interface SocialLinkQuery_figma {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly accentColorHex: string | null;
}

export interface SocialLinkQuery {
  readonly email: SocialLinkQuery_email | null;
  readonly linkedin: SocialLinkQuery_linkedin | null;
  readonly github: SocialLinkQuery_github | null;
  readonly figma: SocialLinkQuery_figma | null;
}
