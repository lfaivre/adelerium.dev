/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MediaLinkData
// ====================================================

export interface MediaLinkData_displayImage_fluid {
  readonly base64: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp: string | null;
  readonly srcSetWebp: string | null;
  readonly sizes: string;
}

export interface MediaLinkData_displayImage {
  readonly fluid: MediaLinkData_displayImage_fluid | null;
}

export interface MediaLinkData {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly date: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly displayImage: MediaLinkData_displayImage | null;
  readonly accentColorHex: string | null;
}
