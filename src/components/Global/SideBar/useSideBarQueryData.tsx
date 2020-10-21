import { SideBarQuery } from '@adelerium/@types/__generated__/SideBarQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useSideBarQueryData = (): SideBarQuery => {
  const sideBarQueryData: SideBarQuery = useStaticQuery(graphql`
    query SideBarQuery {
      sideBarData: contentfulSideBar(id: { eq: "ebce7c4c-0af3-5aa5-9391-9037448fcc7c" }) {
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
      brandingLink: contentfulLink(id: { eq: "5e2725b8-75c7-5c4b-86f1-3caa0f3df31e" }) {
        destination
      }
      email: contentfulEmail(id: { eq: "0cd56694-957b-5f3b-be2d-8e4b0e693ad2" }) {
        title
        destination
        displayText
      }
    }
  `);

  return sideBarQueryData;
};
