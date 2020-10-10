import tw, { styled } from 'twin.macro';

type MediaLinkSquareComponentProps = { height: number; width: number };

export const MediaLinkSquareComponent = styled.div<MediaLinkSquareComponentProps>`
  ${tw`flex flex-col items-center justify-start`}
  ${({ width }) => (width !== -1 ? `width: ${width}px;` : tw`w-full`)}
  ${({ height }) => (height !== -1 ? `height: ${height}px;` : tw`h-auto`)}
`;
