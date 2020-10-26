import { MediaLinkQuery } from '@adelerium/@types/__generated__/MediaLinkQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useMediaLinkQueryData = (): MediaLinkQuery => {
  const mediaLinkQueryData: MediaLinkQuery = useStaticQuery(graphql`
    query MediaLinkQuery {
      mediaLinks: allContentfulMediaLink {
        nodes {
          title
          subtitle
          description
          date
          type
          externalLink
          displayImage {
            fluid(maxWidth: 760, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          accentColorHex
        }
      }
    }
  `);

  return mediaLinkQueryData;
};
