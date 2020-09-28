import { FixedObject } from 'gatsby-image';

type MetaProps =
  | { name: string; content: string; property?: undefined }
  | { property: string; content: string; name?: undefined };

export type SEOProps = {
  description?: string;
  lang?: string;
  meta?: MetaProps[];
  title: string;
  pathname: string;
  keywords?: string[];
  image: FixedObject;
};

type SiteMetaData = {
  description: string;
  title: string;
  author: string;
  siteUrl: string;
};

export type Site = { siteMetadata: SiteMetaData };

export type GraphQLStaticQuery = { site: Site };
