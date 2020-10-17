// @constants styles

import {
  DefaultWrapperProps,
  FlexWrapperProps,
  FullWidthWrapperProps,
  MinHeightScreenWrapperProps,
  WrapperAlignItemsValues,
  WrapperBackgroundColorValues,
  WrapperJustifyContentValues,
} from '@adelerium/styles/wrappers/types';
import tw, { styled, TwStyle } from 'twin.macro';

const wrapperAlignItemsMap: { [key in WrapperAlignItemsValues]: TwStyle } = {
  'items-start': tw`items-start`,
  'items-end': tw`items-end`,
  'items-center': tw`items-center`,
  'items-baseline': tw`items-baseline`,
  'items-stretch': tw`items-stretch`,
};

const wrapperJustifyContentMap: { [key in WrapperJustifyContentValues]: TwStyle } = {
  'justify-start': tw`justify-start`,
  'justify-end': tw`justify-end`,
  'justify-center': tw`justify-center`,
  'justify-between': tw`justify-between`,
  'justify-around': tw`justify-around`,
  'justify-evenly': tw`justify-evenly`,
};

const wrapperBackgroundColorMap: { [key in WrapperBackgroundColorValues]: TwStyle } = {
  'bg-offwhite': tw`bg-offwhite`,
  'bg-charcoal': tw`bg-charcoal`,
  'bg-offpink': tw`bg-offpink`,
};

export const DefaultWrapper = styled.div<DefaultWrapperProps>`
  ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]}
`;

export const FullWidthWrapper = styled.div<FullWidthWrapperProps>`
  ${tw`w-full`}
  ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]}
`;

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

export const MinHeightScreenWrapper = styled.div<MinHeightScreenWrapperProps>`
  min-height: ${({ staticsHeight }) => `calc(100vh - ${staticsHeight}px);`}
    ${({ backgroundColor }) => backgroundColor && wrapperBackgroundColorMap[backgroundColor]};
`;
