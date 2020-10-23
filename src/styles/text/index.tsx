import { TypeProps } from '@adelerium/styles/text/types';
import { typeTextAlignMap, typeWordBreakMap } from '@adelerium/styles/tw-maps/text';
import tw, { styled } from 'twin.macro';

/**
 * @todo Text Components
 *
 * - Add uppercase/lowercase props
 * - Combine Normal/Bold types by adding a 'bold' prop
 */

/** @note Style: NormalParagraphType */

export const NormalParagraphType = styled.p<TypeProps>`
  ${tw`leading-149 font-playfair-display font-normal`}
  ${({ color }) => `color: ${color};`}
  ${({ defaultFontSize }) => defaultFontSize && tw`text-sm md:text-base`}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`break-normal`)}
  ${({ enableSelect }) => !enableSelect && tw`select-none`}
`;

/** @note Style: BoldParagraphType */

export const BoldParagraphType = styled.p<TypeProps>`
  ${tw`leading-149 font-playfair-display font-bold`}
  ${({ color }) => `color: ${color};`}
  ${({ defaultFontSize }) => defaultFontSize && tw`text-sm md:text-base`}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`truncate`)}
  ${({ enableSelect }) => !enableSelect && tw`select-none`}
`;

/** @note Style: BoldType */

export const BoldType = styled.p<TypeProps>`
  ${tw`leading-149 font-helvetica font-bold`}
  ${({ color }) => `color: ${color};`}
  ${({ defaultFontSize }) => defaultFontSize && tw`text-sm md:text-base`}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`truncate`)}
  ${({ enableSelect }) => !enableSelect && tw`select-none`}
`;

export const BoldTypeAsButton = BoldType.withComponent(`button`);

/** @note Style: BrandingType */

export const BrandingType = styled.p<TypeProps>`
  ${tw`lowercase font-mrs-sheppards font-normal`}
  ${({ color }) => `color: ${color};`}
  ${({ defaultFontSize }) => defaultFontSize && tw`text-xl md:text-2xl`}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-center`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`break-normal`)}
  ${({ enableSelect }) => !enableSelect && tw`select-none`}
`;

/** @note Style: AccentType */

export const AccentType = styled.p<TypeProps & { strokeColor?: string }>`
  ${tw`leading-149 font-lobster-two font-normal`}
  ${({ color }) => `color: ${color};`}
  ${({ defaultFontSize }) => defaultFontSize && tw`text-base`}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-center`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`truncate`)}
  ${({ enableSelect }) => !enableSelect && tw`select-none`}
  -webkit-text-stroke-width: 1px;
  ${({ strokeColor }) => strokeColor && `-webkit-text-stroke-color: ${strokeColor};`}
`;
