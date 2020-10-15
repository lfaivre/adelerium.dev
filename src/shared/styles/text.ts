// @constants styles

import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import tw, { styled, TwStyle } from 'twin.macro';

type TypeColorValues = `text-offwhite` | `text-charcoal` | `text-offpink` | `text-transparent`;

const typeColorMap: { [key in TypeColorValues]: TwStyle } = {
  'text-offwhite': tw`text-offwhite`,
  'text-charcoal': tw`text-charcoal`,
  'text-offpink': tw`text-offpink`,
  'text-transparent': tw`text-transparent`,
};

type TypeTextAlignValues = `text-left` | `text-center` | `text-right` | `text-justify`;

const typeTextAlignMap: { [key in TypeTextAlignValues]: TwStyle } = {
  'text-left': tw`text-left`,
  'text-center': tw`text-center`,
  'text-right': tw`text-right`,
  'text-justify': tw`text-justify`,
};

type TypeWordBreakValues = `break-normal` | `break-words` | `break-all` | `truncate`;

const typeWordBreakMap: { [key in TypeWordBreakValues]: TwStyle } = {
  'break-normal': tw`break-normal`,
  'break-words': tw`break-words`,
  'break-all': tw`break-all`,
  truncate: tw`truncate`,
};

type TypeProps = {
  color: TypeColorValues;
  textAlign?: TypeTextAlignValues;
  wordBreak?: TypeWordBreakValues;
};

// @note Style: NormalParagraphType

export const NormalParagraphType = styled.p<TypeProps>`
  ${tw`leading-149 font-playfair-display text-sm md:text-base font-normal select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`break-normal`)}
`;

export const NormalParagraphTypeAsAnchor = NormalParagraphType.withComponent(OutboundLink);
NormalParagraphTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

// @note Style: BoldParagraphType

export const BoldParagraphType = styled.p<TypeProps>`
  ${tw`leading-149 font-playfair-display text-sm md:text-base font-bold select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`truncate`)}
`;

export const BoldParagraphTypeAsAnchor = BoldParagraphType.withComponent(OutboundLink);
BoldParagraphTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

export const BoldParagraphTypeAsButton = BoldParagraphType.withComponent(`button`);

// @note Style: BoldType

export const BoldType = styled.p<TypeProps>`
  ${tw`leading-149 font-helvetica text-sm md:text-base font-bold select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`truncate`)}
`;

export const BoldTypeAsAnchor = BoldType.withComponent(OutboundLink);
BoldTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

export const BoldTypeAsGatsbyLink = BoldType.withComponent(Link);

export const BoldTypeAsHeader1 = BoldType.withComponent(`h1`);

export const BoldTypeAsButton = BoldType.withComponent(`button`);

// @note Style: BrandingType

export const BrandingType = styled.p<TypeProps>`
  ${tw`lowercase font-mrs-sheppards text-xl md:text-2xl font-normal select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-center`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`break-normal`)}
`;

export const BrandingTypeAsAnchor = BrandingType.withComponent(OutboundLink);
BrandingTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

// @note Style: AccentType

export const AccentType = styled.p<TypeProps>`
  ${tw`leading-149 font-lobster-two font-normal select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
  ${({ wordBreak }) => (wordBreak ? typeWordBreakMap[wordBreak] : tw`truncate`)}
`;

// @note Style: BoldSpan

export const BoldSpan = tw.span`font-bold`;
