import { SiteMetadataQuery } from '@adelerium/@types/__generated__/SiteMetadataQuery';
import { graphql, useStaticQuery } from 'gatsby';

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
