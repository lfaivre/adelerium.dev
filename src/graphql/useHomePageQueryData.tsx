import { HomePageQuery } from '@adelerium/@types/__generated__/HomePageQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useHomePageQueryData = (): HomePageQuery => {
  const homePageQueryData: HomePageQuery = useStaticQuery(graphql`
    query HomePageQuery {
      metaImage: contentfulAsset(id: { eq: "146083bc-6bc2-52ed-b613-d326b4daef16" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          base64
          width
          height
          src
          srcSet
        }
      }
      brandingLink: contentfulLink(id: { eq: "5e2725b8-75c7-5c4b-86f1-3caa0f3df31e" }) {
        destination
      }
    }
  `);

  return homePageQueryData;
};
