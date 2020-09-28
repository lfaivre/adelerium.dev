import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';

export const HeaderWrapper = tw.header`w-full h-full p-4 mobile:px-8 flex flex-row justify-between items-center bg-offwhite`;

export const InternalLink = styled(Link)`
  ${tw`h-full`}
`;

export const TitleWrapper = tw.div`h-full flex justify-start items-center`;

export const Title = tw.h1`text-4xl font-playfair-display font-bold text-left text-charcoal`;
