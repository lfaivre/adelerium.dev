import { AboutPageQuery } from '@adelerium/graphql/types/AboutPageQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useAboutPageQueryData = (): AboutPageQuery => {
  const aboutPageQueryData: AboutPageQuery = useStaticQuery(graphql`
    query AboutPageQuery {
      metaImage: contentfulAsset(id: { eq: "7019bca7-9321-5a18-8653-a9040b9c82ed" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  `);

  return aboutPageQueryData;
};
