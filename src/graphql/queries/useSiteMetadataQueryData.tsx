import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadataQuery } from '../types/SiteMetadataQuery';

export const useSiteMetadataQueryData = (): SiteMetadataQuery => {
  const siteMetadataQueryData: SiteMetadataQuery = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          description
          title
          author
          siteUrl
        }
      }
    }
  `);

  return siteMetadataQueryData;
};
