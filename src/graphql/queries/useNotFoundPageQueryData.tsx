import { NotFoundPageQuery } from '@adelerium/@types/__generated__/NotFoundPageQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useNotFoundPageQueryData = (): NotFoundPageQuery => {
  const notFoundPageQueryData: NotFoundPageQuery = useStaticQuery(graphql`
    query NotFoundPageQuery {
      metaImage: contentfulAsset(id: { eq: "e276389a-846c-53c3-8948-8a56b6327143" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          base64
          width
          height
          src
          srcSet
        }
      }
      accentImage: file(relativePath: { eq: "not-found-page-accent.png" }) {
        childImageSharp {
          fluid(maxWidth: 453, quality: 100) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);

  return notFoundPageQueryData;
};
