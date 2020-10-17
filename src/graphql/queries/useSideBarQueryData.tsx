import { SideBarQuery } from '@adelerium/@types/__generated__/SideBarQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useSideBarQueryData = (): SideBarQuery => {
  const sideBarQueryData: SideBarQuery = useStaticQuery(graphql`
    query SideBarQuery {
      sideBarData: contentfulSideBar(id: { eq: "502a1247-aea0-5bd4-8559-e57affa70179" }) {
        profilePicture {
          fluid(maxWidth: 320, resizingBehavior: SCALE, quality: 100) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
        }
        internalLinks {
          id
          title
          type
          destination
          displayText
        }
        externalLinks {
          id
          title
          type
          destination
          displayText
        }
      }
      profileBackgroundImage: file(relativePath: { eq: "profile-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 192, quality: 100) {
            tracedSVG
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      brandingLink: contentfulLink(id: { eq: "8ae4b109-939c-5e4a-b4f9-6667caf39179" }) {
        destination
      }
      email: contentfulEmail(id: { eq: "e091525a-7aee-5f4d-bbbd-e704936df8fe" }) {
        title
        destination
        displayText
      }
    }
  `);

  return sideBarQueryData;
};
