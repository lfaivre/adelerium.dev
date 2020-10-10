import tw, { styled } from 'twin.macro';

type StaticIntroductionComponentProps = { height: number; width: number };

export const StaticIntroductionComponent = styled.div<StaticIntroductionComponentProps>`
  ${tw`flex flex-row items-center justify-center`}
  ${({ width }) => (width !== -1 ? `width: ${width}px;` : tw`w-full`)}
  ${({ height }) => (height !== -1 ? `height: ${height}px;` : tw`h-auto`)}
`;
