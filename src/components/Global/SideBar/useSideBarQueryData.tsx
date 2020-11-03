import { SideBarQuery } from '@adelerium/@types/__generated__/SideBarQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useSideBarQueryData = (): SideBarQuery => {
  const sideBarQueryData: SideBarQuery = useStaticQuery(graphql`
    query SideBarQuery {
      sideBarData: contentfulSideBar(id: { eq: "ebce7c4c-0af3-5aa5-9391-9037448fcc7c" }) {
        profilePicture {
          fluid(maxWidth: 160) {
            ...GatsbyContentfulFluid_withWebp
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
      brandingLink: contentfulLink(id: { eq: "5e2725b8-75c7-5c4b-86f1-3caa0f3df31e" }) {
        destination
      }
    }
  `);

  return sideBarQueryData;
};
