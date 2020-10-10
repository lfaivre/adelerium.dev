import tw, { styled } from 'twin.macro';

type SocialLinkSquareComponentProps = { height: number; width: number };

export const SocialLinkSquareComponent = styled.div<SocialLinkSquareComponentProps>`
  ${tw`flex flex-col items-center justify-start`}
  ${({ width }) => (width !== -1 ? `width: ${width}px;` : tw`w-full`)}
  ${({ height }) => (height !== -1 ? `height: ${height}px;` : tw`h-auto`)}
`;
