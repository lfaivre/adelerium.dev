import { graphql, useStaticQuery } from 'gatsby';
import { HomePageQuery } from '../types/HomePageQuery';

export const useHomePageQueryData = (): HomePageQuery => {
  const homePageQueryData: HomePageQuery = useStaticQuery(graphql`
    query HomePageQuery {
      metaImage: contentfulAsset(id: { eq: "0f96cdaa-3965-5619-81c9-a8f7fcec51b4" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          base64
          width
          height
          src
          srcSet
        }
      }
      brandingLink: contentfulLink(id: { eq: "8ae4b109-939c-5e4a-b4f9-6667caf39179" }) {
        destination
      }
    }
  `);

  return homePageQueryData;
};
