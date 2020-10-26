import { NotFoundPageQuery } from '@adelerium/@types/__generated__/NotFoundPageQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useNotFoundPageQueryData = (): NotFoundPageQuery => {
  const notFoundPageQueryData: NotFoundPageQuery = useStaticQuery(graphql`
    query NotFoundPageQuery {
      metaImage: contentfulAsset(id: { eq: "286016a7-519d-5b15-842e-0804fa11d650" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          ...GatsbyContentfulFixed
        }
      }
      accentImage: file(relativePath: { eq: "not-found-page-accent.png" }) {
        childImageSharp {
          fluid(maxWidth: 448, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return notFoundPageQueryData;
};
