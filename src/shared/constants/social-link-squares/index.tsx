import { SocialLink } from '@adelerium/components/AboutPage/SocialLinkSquare/types';
import { data as FIGMA_DATA } from '@adelerium/shared/constants/social-link-squares/figma';
import { data as GITHUB_DATA } from '@adelerium/shared/constants/social-link-squares/github';
import { data as GOOGLE_DATA } from '@adelerium/shared/constants/social-link-squares/google';
import { data as LINKEDIN_DATA } from '@adelerium/shared/constants/social-link-squares/linkedin';

export const GITHUB = `GitHub`;
export const FIGMA = `Figma`;
export const LINKEDIN = `LinkedIn`;
export const GOOGLE = `Google`;

type SocialLinkKeys = typeof GITHUB | typeof FIGMA | typeof LINKEDIN | typeof GOOGLE;
type SocialLinks = { [key in SocialLinkKeys]: SocialLink };

export const socialLinks: SocialLinks = {
  [GITHUB]: GITHUB_DATA,
  [FIGMA]: FIGMA_DATA,
  [LINKEDIN]: LINKEDIN_DATA,
  [GOOGLE]: GOOGLE_DATA,
};
