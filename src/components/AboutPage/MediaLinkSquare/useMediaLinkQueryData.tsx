import { MediaLinkQuery } from '@adelerium/@types/__generated__/MediaLinkQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const mediaLinkQueryDataFragment = graphql`
  fragment MediaLinkData on ContentfulMediaLink {
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
`;

export const useMediaLinkQueryData = (): MediaLinkQuery => {
  const mediaLinkQueryData: MediaLinkQuery = useStaticQuery(graphql`
    query MediaLinkQuery {
      pinnedSong: contentfulMediaLink(id: { eq: "0fa7fd4b-9f0a-5369-a440-8c8f2659e302" }) {
        ...MediaLinkData
      }
      pinnedPodcast: contentfulMediaLink(id: { eq: "c5fa0120-00bf-5876-a9c7-8a7c4070cb38" }) {
        ...MediaLinkData
      }
      pinnedPlaylist: contentfulMediaLink(id: { eq: "8f2d4312-9762-5eab-ad84-3ec4dd09c4a3" }) {
        ...MediaLinkData
      }
      mostPlayedSongThisWeek: contentfulMediaLink(id: { eq: "bc09c59f-a758-512c-a763-8095a205fdb0" }) {
        ...MediaLinkData
      }
    }
  `);

  return mediaLinkQueryData;
};
