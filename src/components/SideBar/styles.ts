import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { SelectedProps } from './types';

export const SideBarWrapper = tw.div`w-full h-full p-8 md:pt-16 flex flex-col justify-start items-center bg-charcoal`;

export const ProfileWrapper = tw.div`w-full mb-8 md:mb-8 flex flex-row justify-center items-center md:flex-col md:justify-start md:items-center`;

export const ProfileImageWrapper = tw.div`hidden mobile:block mobile-only:w-2/5 sm:w-2/5 xl:w-9/12 p-4 md:p-8 md:mb-4 bg-offwhite`;

export const ProfileImage = styled(Img)`
  ${tw`w-full opacity-80`}
`;

export const ProfileTextWrapper = tw.div`w-full mobile-only:w-3/5 mobile-only:pl-4 flex flex-col justify-center items-center`;

export const ProfileName = tw.p`w-full mb-2 text-2xl text-center mobile-only:text-left font-playfair-display font-bold text-offwhite`;

export const ProfileTag = tw.p`w-full text-base text-center mobile-only:text-left font-playfair-display font-normal text-offwhite lowercase`;

export const ResponsiveWelcomeNavigationWrapper = tw.div`w-screen block xl:hidden xl:w-auto`;

export const LinkSectionWrapper = tw.div`w-full px-4 mb-8 flex-1 flex flex-col justify-center items-center`;

export const ExternalLink = styled(OutboundLink)`
  ${tw`w-full mb-4 last:mb-0 text-2xl text-left font-playfair-display font-normal text-offwhite`}
`;

export const InternaLink = styled(Link)`
  ${tw`w-full mb-4 last:mb-0 text-2xl text-left font-playfair-display font-normal text-offwhite`}
`;

export const BrandingWrapper = tw.div`w-full flex flex-row justify-center items-center`;

export const Branding = styled(OutboundLink)`
  ${tw`w-full text-2xl text-center font-mrs-sheppards font-normal text-offwhite lowercase`}
`;

export const ViewButtonsWrapper = tw.div`w-full mb-8 flex flex-col justify-center items-center`;

export const LineWrapper = tw.div`w-full mb-8 flex flex-col`;

export const Line = tw.hr`w-full h-0 mb-4 last:mb-0 border border-offwhite`;

export const ButtonsWrapper = tw.div`w-full flex flex-row justify-center items-center`;

export const ViewButton = styled.button<SelectedProps>`
  ${tw`w-16 h-16 rounded-full mr-8 last:mr-0 text-4xl font-lobster-two focus:outline-none`}
  ${({ selected }) =>
    selected
      ? tw`bg-offwhite text-charcoal`
      : tw`bg-transparent text-transparent`};
  ${({ selected }) =>
    selected
      ? ``
      : `-webkit-text-fill-color: transparent; -webkit-text-stroke-width: 1px; -webkit-text-stroke-color: var(--offwhite);`};
`;
