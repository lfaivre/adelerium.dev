import tw, { styled } from 'twin.macro';

export const StaticIntroductionComponent = styled.div<{ height: number; width: number }>`
  ${tw`flex flex-row items-center justify-center max-h-screen`}
  ${({ width }) => (width !== -1 ? `width: ${width}px;` : tw`w-full`)}
  ${({ height }) => (height !== -1 ? `height: ${height}px;` : tw`h-auto`)}
`;
