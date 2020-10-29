/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HomePageQuery
// ====================================================

export interface HomePageQuery_metaImage_fixed {
  readonly base64: string | null;
  readonly width: number;
  readonly height: number;
  readonly src: string;
  readonly srcSet: string;
}

export interface HomePageQuery_metaImage {
  readonly fixed: HomePageQuery_metaImage_fixed | null;
}

export interface HomePageQuery_wavesBackgroundImage_childImageSharp_fluid {
  readonly tracedSVG: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp: string | null;
  readonly srcSetWebp: string | null;
  readonly sizes: string;
}

export interface HomePageQuery_wavesBackgroundImage_childImageSharp {
  readonly fluid: HomePageQuery_wavesBackgroundImage_childImageSharp_fluid | null;
}

export interface HomePageQuery_wavesBackgroundImage {
  readonly childImageSharp: HomePageQuery_wavesBackgroundImage_childImageSharp | null;
}

export interface HomePageQuery_brandingLink {
  readonly destination: string | null;
}

export interface HomePageQuery {
  readonly metaImage: HomePageQuery_metaImage | null;
  readonly wavesBackgroundImage: HomePageQuery_wavesBackgroundImage | null;
  readonly brandingLink: HomePageQuery_brandingLink | null;
}
