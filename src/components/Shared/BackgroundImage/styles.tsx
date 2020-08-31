import tw, { styled } from 'twin.macro';
import BackgroundImage from 'gatsby-background-image';
import { BackgroundImageProps } from './types';

export const StyledBackgroundImage = styled(BackgroundImage)<
  BackgroundImageProps
>`
  ${tw`w-full absolute left-0`}
  top: ${({ headerHeight, isIndex }) =>
    isIndex ? `0;` : `${headerHeight}px;`}
  height: ${({
    headerHeight,
    isIndex,
  }) => (isIndex ? `100vh;` : `calc(100vh - ${headerHeight}px);`)};
`;
