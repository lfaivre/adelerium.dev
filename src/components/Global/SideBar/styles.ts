import tw, { styled } from 'twin.macro';

type LineProps = { borderColor: string };

export const Line = styled.hr<LineProps>`
  ${tw`mb-4 last:mb-0 border w-full h-0`}
  ${({ borderColor }) => `border-color: ${borderColor};`}
`;

type ViewButtonProps = { selected: boolean; backgroundColor: string };

export const ViewButton = styled.button<ViewButtonProps>`
  ${tw`mr-8 last:mr-0 focus:outline-none rounded-full w-16 h-16`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
`;
