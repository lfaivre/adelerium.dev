import { SocialLink } from '../../../components/AboutPage/SocialLinkSquare/types';
import { data as FIGMA_DATA } from './figma';
import { data as GITHUB_DATA } from './github';
import { data as GOOGLE_DATA } from './google';
import { data as LINKEDIN_DATA } from './linkedin';

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
