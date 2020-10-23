import tw, { styled } from 'twin.macro';

type LineProps = { borderColor: string };

export const Line = styled.hr<LineProps>`
  ${tw`mb-4 last:mb-0 border w-full h-0`}
  ${({ borderColor }) => `border-color: ${borderColor};`}
`;
