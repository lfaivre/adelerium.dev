import tw, { styled } from 'twin.macro';

type StaticLocationComponentProps = { height: number; width: number };

export const StaticLocationComponent = styled.div<StaticLocationComponentProps>`
  ${tw`flex flex-row items-center justify-center`}
  width: ${({ width }) => (width !== -1 ? `${width}px` : `100%`)};
  height: ${({ height }) => (height !== -1 ? `${height}px` : `auto`)};
`;
