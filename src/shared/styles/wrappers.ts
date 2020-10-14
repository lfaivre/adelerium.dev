import tw, { styled, TwStyle } from 'twin.macro';

type WrapperAlignItemsValues = `items-start` | `items-end` | `items-center` | `items-baseline` | `items-stretch`;

const wrapperAlignItemsMap: { [key in WrapperAlignItemsValues]: TwStyle } = {
  'items-start': tw`items-start`,
  'items-end': tw`items-end`,
  'items-center': tw`items-center`,
  'items-baseline': tw`items-baseline`,
  'items-stretch': tw`items-stretch`,
};

type WrapperJustifyContentValues =
  | `justify-start`
  | `justify-end`
  | `justify-center`
  | `justify-between`
  | `justify-around`
  | `justify-evenly`;

const wrapperJustifyContentMap: { [key in WrapperJustifyContentValues]: TwStyle } = {
  'justify-start': tw`justify-start`,
  'justify-end': tw`justify-end`,
  'justify-center': tw`justify-center`,
  'justify-between': tw`justify-between`,
  'justify-around': tw`justify-around`,
  'justify-evenly': tw`justify-evenly`,
};

type WrapperBackgroundColorValues = `bg-offwhite` | `bg-charcoal` | `bg-offpink`;

const wrapperBackgroundColorMap: { [key in WrapperBackgroundColorValues]: TwStyle } = {
  'bg-offwhite': tw`bg-offwhite`,
  'bg-charcoal': tw`bg-charcoal`,
  'bg-offpink': tw`bg-offpink`,
};

type DefaultWrapperProps = { backgroundColor?: WrapperBackgroundColorValues };

export const DefaultWrapper = styled.div<DefaultWrapperProps>`
  ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]}
`;

type FullWidthWrapperProps = { backgroundColor?: WrapperBackgroundColorValues };

export const FullWidthWrapper = styled.div<FullWidthWrapperProps>`
  ${tw`w-full`}
  ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]}
`;

type FlexWrapperProps = {
  reverse?: boolean;
  alignItems: WrapperAlignItemsValues;
  justifyContent: WrapperJustifyContentValues;
  backgroundColor?: WrapperBackgroundColorValues;
};

export const FlexColumnWrapper = styled.div<FlexWrapperProps>`
  ${tw`flex`}
  ${({ reverse }) => (!reverse ? tw`flex-col` : tw`flex-col-reverse`)}
  ${({ alignItems }) => wrapperAlignItemsMap[alignItems]}
  ${({ justifyContent }) => wrapperJustifyContentMap[justifyContent]}
  ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]}
`;

export const FlexRowWrapper = styled.div<FlexWrapperProps>`
  ${tw`flex`}
  ${({ reverse }) => (!reverse ? tw`flex-row` : tw`flex-row-reverse`)}
  ${({ alignItems }) => wrapperAlignItemsMap[alignItems]}
  ${({ justifyContent }) => wrapperJustifyContentMap[justifyContent]}
  ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]}
`;

type MinHeightScreenWrapperProps = { staticsHeight: number } & DefaultWrapperProps;

export const MinHeightScreenWrapper = styled.div<MinHeightScreenWrapperProps>`
  min-height: ${({ staticsHeight }) => `calc(100vh - ${staticsHeight}px);`}
    ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]};
`;
