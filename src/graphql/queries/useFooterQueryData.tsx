import { graphql, useStaticQuery } from 'gatsby';
import { FooterQuery } from '../types/FooterQuery';

export const useFooterQueryData = (): FooterQuery => {
  const footerQueryData: FooterQuery = useStaticQuery(graphql`
    query FooterQuery {
      footerData: contentfulFooter(id: { eq: "1255bc22-06cf-5a6a-8380-aa9765941449" }) {
        facts {
          text
        }
      }
      brandingLink: contentfulLink(id: { eq: "8ae4b109-939c-5e4a-b4f9-6667caf39179" }) {
        destination
      }
      linkedInLink: contentfulLink(id: { eq: "9c58119b-ca48-56a9-912d-9cbc90947140" }) {
        destination
      }
      gitHubLink: contentfulLink(id: { eq: "789bbd03-bc37-5f2e-8bbf-47fd1c861934" }) {
        destination
      }
    }
  `);

  return footerQueryData;
};
