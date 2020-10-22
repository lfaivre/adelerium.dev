import { WrapperAlignItemsValues, WrapperJustifyContentValues } from '@adelerium/styles/wrappers/types';
import tw, { TwStyle } from 'twin.macro';

export const wrapperAlignItemsMap: { [key in WrapperAlignItemsValues]: TwStyle } = {
  'items-start': tw`items-start`,
  'items-end': tw`items-end`,
  'items-center': tw`items-center`,
  'items-baseline': tw`items-baseline`,
  'items-stretch': tw`items-stretch`,
};

export const wrapperJustifyContentMap: { [key in WrapperJustifyContentValues]: TwStyle } = {
  'justify-start': tw`justify-start`,
  'justify-end': tw`justify-end`,
  'justify-center': tw`justify-center`,
  'justify-between': tw`justify-between`,
  'justify-around': tw`justify-around`,
  'justify-evenly': tw`justify-evenly`,
};
