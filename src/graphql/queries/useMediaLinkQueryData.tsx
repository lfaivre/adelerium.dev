import { MediaLinkQuery } from '@adelerium/graphql/types/MediaLinkQuery';
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
            fluid(maxWidth: 720, resizingBehavior: SCALE) {
              tracedSVG
              aspectRatio
              src
              srcSet
              sizes
            }
          }
          accentColorHex
        }
      }
    }
  `);

  return mediaLinkQueryData;
};
