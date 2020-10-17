import tw, { styled } from 'twin.macro';

export const MediaLinkSquareComponent = styled.div<{ height: number; width: number }>`
  ${tw`flex flex-col items-center justify-start max-h-screen`}
  ${({ width }) => `width: ${width}px;`}
  ${({ height }) => `height: ${height}px;`}
`;
