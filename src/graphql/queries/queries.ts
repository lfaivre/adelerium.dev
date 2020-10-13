import { graphql } from 'gatsby';

export const footerQuery = graphql`
  query FooterQuery {
    contentfulFooter: contentfulFooter(title: { eq: "Default" }) {
      brandingLink {
        destination
      }
      linkedInLink {
        destination
      }
      gitHubLink {
        destination
      }
      facts {
        text
        id
      }
    }
  }
`;
