import tw, { styled, TwStyle } from 'twin.macro';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

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

type TypeProps = { color: TypeColorValues; textAlign?: TypeTextAlignValues };

export const NormalParagraphType = styled.p<TypeProps>`
  ${tw`font-playfair-display text-base font-normal break-normal select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
`;

export const BoldParagraphType = styled.p<TypeProps>`
  ${tw`font-playfair-display text-base font-bold truncate select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
`;

export const NormalParagraphTypeAsAnchor = NormalParagraphType.withComponent(OutboundLink);
NormalParagraphTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

export const BoldParagraphTypeAsAnchor = BoldParagraphType.withComponent(OutboundLink);
BoldParagraphTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

export const BoldParagraphTypeAsButton = BoldParagraphType.withComponent(`button`);

export const BoldType = styled.p<TypeProps>`
  ${tw`leading-149 font-helvetica text-base font-bold truncate select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
`;

export const BoldTypeAsAnchor = BoldType.withComponent(OutboundLink);
BoldTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

export const BoldTypeAsGatsbyLink = BoldType.withComponent(Link);

export const BoldTypeAsHeader1 = BoldType.withComponent(`h1`);

export const BoldTypeAsButton = BoldType.withComponent(`button`);

export const BrandingType = styled.p<TypeProps>`
  ${tw`lowercase font-mrs-sheppards font-normal select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
`;

export const BrandingTypeAsAnchor = BrandingType.withComponent(OutboundLink);
BrandingTypeAsAnchor.defaultProps = { target: `_blank`, rel: `noopener noreferrer` };

export const AccentType = styled.p<TypeProps>`
  ${tw`font-lobster-two font-normal truncate select-none`}
  ${({ color }) => typeColorMap[color]}
  ${({ textAlign }) => (textAlign ? typeTextAlignMap[textAlign] : tw`text-left`)}
`;
