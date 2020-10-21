import { StaticBrandingQuery } from '@adelerium/@types/__generated__/StaticBrandingQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useStaticBrandingQueryData = (): StaticBrandingQuery => {
  const staticBrandingQueryData: StaticBrandingQuery = useStaticQuery(graphql`
    query StaticBrandingQuery {
      brandingLink: contentfulLink(id: { eq: "8ae4b109-939c-5e4a-b4f9-6667caf39179" }) {
        destination
      }
    }
  `);

  return staticBrandingQueryData;
};
