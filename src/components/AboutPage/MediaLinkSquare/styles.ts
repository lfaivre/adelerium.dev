import tw, { styled } from 'twin.macro';

type MediaLinkSquareComponentProps = { height: number; width: number };

export const MediaLinkSquareComponent = styled.div<MediaLinkSquareComponentProps>`
  ${tw`flex flex-col items-center justify-start max-h-screen`}
  ${({ width }) => `width: ${width}px;`}
  ${({ height }) => `height: ${height}px;`}
`;
