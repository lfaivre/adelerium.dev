import { BrandingSectionQuery } from '@adelerium/@types/__generated__/BrandingSectionQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useBrandingSectionQueryData = (): BrandingSectionQuery => {
  const brandingSectionQueryData: BrandingSectionQuery = useStaticQuery(graphql`
    query BrandingSectionQuery {
      brandingSection: contentfulPersonalInformationSection(id: { eq: "317b05a9-12f7-585c-a643-f0dd6d3b7c23" }) {
        title
        content {
          title
          order
          content {
            content
          }
        }
      }
    }
  `);

  return brandingSectionQueryData;
};
