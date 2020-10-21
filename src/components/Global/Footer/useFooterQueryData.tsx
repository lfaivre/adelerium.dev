import { FooterQuery } from '@adelerium/@types/__generated__/FooterQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useFooterQueryData = (): FooterQuery => {
  const footerQueryData: FooterQuery = useStaticQuery(graphql`
    query FooterQuery {
      footerData: contentfulFooter(id: { eq: "19835726-275c-5864-861d-7ab4ad345b4a" }) {
        facts {
          text
        }
      }
      brandingLink: contentfulLink(id: { eq: "5e2725b8-75c7-5c4b-86f1-3caa0f3df31e" }) {
        destination
      }
      linkedInLink: contentfulLink(id: { eq: "06722293-5310-537f-aa32-c6f839c83971" }) {
        destination
      }
      gitHubLink: contentfulLink(id: { eq: "5ef77974-b700-5f1f-8291-31f05cc3a4eb" }) {
        destination
      }
    }
  `);

  return footerQueryData;
};
