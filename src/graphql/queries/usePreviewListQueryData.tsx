import { graphql, useStaticQuery } from 'gatsby';
import { PreviewListQuery } from '../types/PreviewListQuery';

export const usePreviewListQueryData = (): PreviewListQuery => {
  const previewListQueryData: PreviewListQuery = useStaticQuery(graphql`
    query PreviewListQuery {
      projectPreviews: allContentfulProject(sort: { fields: [rating, dateRangeEnd], order: [DESC, DESC] }) {
        edges {
          node {
            id
            title
            rating
            type
            dateRangeBeginning(formatString: "MMM YYYY")
            dateRangeEnd(formatString: "MMM YYYY")
            previewDescription {
              previewDescription
            }
            previewPicture {
              fluid(maxWidth: 1024, resizingBehavior: SCALE) {
                tracedSVG
                aspectRatio
                src
                srcSet
                sizes
              }
            }
            technologyTags
            hostedUrl
            gitHubUrl
            figmaUrl
          }
        }
      }
    }
  `);

  return previewListQueryData;
};
