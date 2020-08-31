// @note Types for File: index.tsx

interface MetaAttribute {
  name: string;
  content: string;
}

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<MetaAttribute>;
  title: string;
}

interface MetaData {
  title: string;
  description: string;
  author: string;
}

export type Site = { siteMetadata: MetaData };

export type GraphQLStaticQuery = { site: Site };
