import { SocialLinkQuery } from '@adelerium/graphql/types/SocialLinkQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useSocialLinkQueryData = (): SocialLinkQuery => {
  const socialLinkQueryData: SocialLinkQuery = useStaticQuery(graphql`
    query SocialLinkQuery {
      socialLinks: allContentfulSocialLink {
        nodes {
          title
          subtitle
          type
          externalLinkText
          externalLink
          accentColorHex
        }
      }
    }
  `);

  return socialLinkQueryData;
};
