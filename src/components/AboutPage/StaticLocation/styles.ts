import tw, { styled } from 'twin.macro';

type StaticLocationComponentProps = { height: number; width: number };

export const StaticLocationComponent = styled.div<StaticLocationComponentProps>`
  ${tw`flex flex-row items-center justify-center`}
  ${({ width }) => (width !== -1 ? `width: ${width}px;` : tw`w-full`)}
  ${({ height }) => (height !== -1 ? `height: ${height}px;` : tw`h-auto`)}
`;
