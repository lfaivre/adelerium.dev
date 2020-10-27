import { SocialLinkQuery } from '@adelerium/@types/__generated__/SocialLinkQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const socialLinkQueryDataFragment = graphql`
  fragment SocialLinkData on ContentfulSocialLink {
    title
    subtitle
    type
    externalLink
    accentColorHex
  }
`;

export const useSocialLinkQueryData = (): SocialLinkQuery => {
  const socialLinkQueryData: SocialLinkQuery = useStaticQuery(graphql`
    query SocialLinkQuery {
      email: contentfulSocialLink(id: { eq: "a6d7eba7-8fa5-5c3f-91a8-55cc6dcfedef" }) {
        ...SocialLinkData
      }
      linkedin: contentfulSocialLink(id: { eq: "dfdf1b8f-1767-5446-9719-672a2552a03a" }) {
        ...SocialLinkData
      }
      github: contentfulSocialLink(id: { eq: "2e6836a8-1b00-5153-b04a-3df1405c362d" }) {
        ...SocialLinkData
      }
      figma: contentfulSocialLink(id: { eq: "f32e30b3-8ada-5ece-a6ea-2e2a12bd9f05" }) {
        ...SocialLinkData
      }
    }
  `);

  return socialLinkQueryData;
};
