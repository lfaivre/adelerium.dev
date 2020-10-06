import tw, { styled } from 'twin.macro';

type SocialLinkSquareComponentProps = { height: number; width: number };

export const SocialLinkSquareComponent = styled.div<SocialLinkSquareComponentProps>`
  ${tw`flex flex-col items-center justify-start bg-green-500`}
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;
