import { AboutPageQuery } from '@adelerium/@types/__generated__/AboutPageQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useAboutPageQueryData = (): AboutPageQuery => {
  const aboutPageQueryData: AboutPageQuery = useStaticQuery(graphql`
    query AboutPageQuery {
      metaImage: contentfulAsset(id: { eq: "cfad6a7d-aade-5927-a605-69da6dfe6529" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          ...GatsbyContentfulFixed
        }
      }
    }
  `);

  return aboutPageQueryData;
};
