// @constants styles

import tw, { styled, TwStyle } from 'twin.macro';

// @todo Move color map to shared utility

type LineBorderColorValues = `border-offwhite` | `border-charcoal` | `border-offpink`;

const lineBorderColorMap: { [key in LineBorderColorValues]: TwStyle } = {
  'border-offwhite': tw`border-offwhite`,
  'border-charcoal': tw`border-charcoal`,
  'border-offpink': tw`border-offpink`,
};

type LineProps = { borderColor: LineBorderColorValues };

export const Line = styled.hr<LineProps>`
  ${tw`mb-4 last:mb-0 border w-full h-0`}
  ${({ borderColor }) => lineBorderColorMap[borderColor]}
`;

// @todo Move color maps to shared utility

type ViewButtonBackgroundColorValues = `bg-offwhite` | `bg-charcoal` | `bg-offpink` | `bg-transparent`;

const viewButtonBackgroundColorMap: { [key in ViewButtonBackgroundColorValues]: TwStyle } = {
  'bg-offwhite': tw`bg-offwhite`,
  'bg-charcoal': tw`bg-charcoal`,
  'bg-offpink': tw`bg-offpink`,
  'bg-transparent': tw`bg-transparent`,
};

type ViewButtonColorValues = `text-offwhite` | `text-charcoal` | `text-offpink` | `text-transparent`;

const viewButtonColorMap: { [key in ViewButtonColorValues]: string } = {
  'text-offwhite': `var(--color-OffWhite);`,
  'text-charcoal': `var(--color-Charcoal);`,
  'text-offpink': `var(--color-OffPink);`,
  'text-transparent': `transparent`,
};

type ViewButtonProps = {
  selected: boolean;
  backgroundColor: ViewButtonBackgroundColorValues;
  strokeColor: ViewButtonColorValues;
};

export const ViewButton = styled.button<ViewButtonProps>`
  ${tw`mr-8 last:mr-0 focus:outline-none rounded-full w-16 h-16`}
  ${({ backgroundColor }) => viewButtonBackgroundColorMap[backgroundColor]}
  -webkit-text-stroke-width: 0.0625rem;
  ${({ strokeColor }) => `-webkit-text-stroke-color: ${viewButtonColorMap[strokeColor]};`}
`;
