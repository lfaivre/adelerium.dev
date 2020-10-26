import { PreviewListQuery } from '@adelerium/@types/__generated__/PreviewListQuery';
import { graphql, useStaticQuery } from 'gatsby';

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
              fluid(maxWidth: 760) {
                ...GatsbyContentfulFluid_withWebp
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
