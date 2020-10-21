import { StaticBrandingQuery } from '@adelerium/@types/__generated__/StaticBrandingQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useStaticBrandingQueryData = (): StaticBrandingQuery => {
  const staticBrandingQueryData: StaticBrandingQuery = useStaticQuery(graphql`
    query StaticBrandingQuery {
      brandingLink: contentfulLink(id: { eq: "5e2725b8-75c7-5c4b-86f1-3caa0f3df31e" }) {
        destination
      }
    }
  `);

  return staticBrandingQueryData;
};
