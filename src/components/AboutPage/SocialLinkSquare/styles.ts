import tw, { styled } from 'twin.macro';

export const SocialLinkSquareComponent = styled.div<{ height: number; width: number }>`
  ${tw`flex flex-col items-center justify-start max-h-screen`}
  ${({ width }) => (width !== -1 ? `width: ${width}px;` : tw`w-full`)}
  ${({ height }) => (height !== -1 ? `height: ${height}px;` : tw`h-auto`)}
`;
