import { TypeTextAlignValues, TypeWordBreakValues } from '@adelerium/styles/text/types';
import tw, { TwStyle } from 'twin.macro';

export const typeTextAlignMap: { [key in TypeTextAlignValues]: TwStyle } = {
  'text-left': tw`text-left`,
  'text-center': tw`text-center`,
  'text-right': tw`text-right`,
  'text-justify': tw`text-justify`,
};

export const typeWordBreakMap: { [key in TypeWordBreakValues]: TwStyle } = {
  'break-normal': tw`break-normal`,
  'break-words': tw`break-words`,
  'break-all': tw`break-all`,
  truncate: tw`truncate`,
};
