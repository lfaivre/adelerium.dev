import tw, { styled, TwStyle } from 'twin.macro';

// @todo Move color map to shared utility

type ReturnButtonBorderColorValues = `border-offwhite` | `border-charcoal` | `border-offpink`;

const returnButtonBorderColorMap: { [key in ReturnButtonBorderColorValues]: TwStyle } = {
  'border-offwhite': tw`border-offwhite`,
  'border-charcoal': tw`border-charcoal`,
  'border-offpink': tw`border-offpink`,
};

type ReturnButtonBackgroundColorValues = `bg-offwhite` | `bg-charcoal` | `bg-offpink`;

const returnButtonBackgroundColorMap: { [key in ReturnButtonBackgroundColorValues]: TwStyle } = {
  'bg-offwhite': tw`bg-offwhite`,
  'bg-charcoal': tw`bg-charcoal`,
  'bg-offpink': tw`bg-offpink`,
};

type ReturnButtonProps = {
  borderColor: ReturnButtonBorderColorValues;
  backgroundColor: ReturnButtonBackgroundColorValues;
};

export const ReturnButton = styled.button<ReturnButtonProps>`
  ${tw`flex flex-col items-center justify-center focus:outline-none border-2 border-solid rounded-full bg-transparent w-16 h-16 overflow-hidden`}
  ${({ borderColor }) => returnButtonBorderColorMap[borderColor]}
  &:hover > span:first-of-type {
    ${({ backgroundColor }) => returnButtonBackgroundColorMap[backgroundColor]}
  }
`;

export const ReturnButtonIndicator = tw.span`transition-colors duration-300 ease-in-out w-full h-8`;
