import tw, { styled } from 'twin.macro';

type StaticResumeComponentProps = { height: number; width: number };

export const StaticResumeComponent = styled.div<StaticResumeComponentProps>`
  ${tw`flex flex-col items-center md:items-start justify-center md:justify-between`}
  ${({ width }) => (width !== -1 ? `width: ${width}px;` : tw`w-full`)}
  ${({ height }) => (height !== -1 ? `height: ${height}px;` : tw`h-auto`)}
`;
