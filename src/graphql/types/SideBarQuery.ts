/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SideBarQuery
// ====================================================

export interface SideBarQuery_sideBarData_profilePicture_fluid {
  readonly __typename: 'ContentfulFluid';
  readonly tracedSVG: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
}

export interface SideBarQuery_sideBarData_profilePicture {
  readonly __typename: 'ContentfulAsset';
  readonly fluid: SideBarQuery_sideBarData_profilePicture_fluid | null;
}

export interface SideBarQuery_sideBarData_internalLinks {
  readonly __typename: 'ContentfulLink';
  readonly id: string;
  readonly title: string | null;
  readonly type: string | null;
  readonly destination: string | null;
  readonly displayText: string | null;
}

export interface SideBarQuery_sideBarData_externalLinks {
  readonly __typename: 'ContentfulLink';
  readonly id: string;
  readonly title: string | null;
  readonly type: string | null;
  readonly destination: string | null;
  readonly displayText: string | null;
}

export interface SideBarQuery_sideBarData {
  readonly __typename: 'ContentfulSideBar';
  readonly profilePicture: SideBarQuery_sideBarData_profilePicture | null;
  readonly internalLinks: ReadonlyArray<SideBarQuery_sideBarData_internalLinks | null> | null;
  readonly externalLinks: ReadonlyArray<SideBarQuery_sideBarData_externalLinks | null> | null;
}

export interface SideBarQuery_profileBackgroundImage_childImageSharp_fluid {
  readonly __typename: 'ImageSharpFluid';
  readonly tracedSVG: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly sizes: string;
}

export interface SideBarQuery_profileBackgroundImage_childImageSharp {
  readonly __typename: 'ImageSharp';
  readonly fluid: SideBarQuery_profileBackgroundImage_childImageSharp_fluid | null;
}

export interface SideBarQuery_profileBackgroundImage {
  readonly __typename: 'File';
  readonly childImageSharp: SideBarQuery_profileBackgroundImage_childImageSharp | null;
}

export interface SideBarQuery_brandingLink {
  readonly __typename: 'ContentfulLink';
  readonly destination: string | null;
}

export interface SideBarQuery_email {
  readonly __typename: 'ContentfulEmail';
  readonly title: string | null;
  readonly destination: string | null;
  readonly displayText: string | null;
}

export interface SideBarQuery {
  readonly sideBarData: SideBarQuery_sideBarData | null;
  readonly profileBackgroundImage: SideBarQuery_profileBackgroundImage | null;
  readonly brandingLink: SideBarQuery_brandingLink | null;
  readonly email: SideBarQuery_email | null;
}
