// @constants styles

import { StyledInternalLinkDirection } from '@adelerium/components/Global/StyledInternalLink/types';
import tw, { styled, TwStyle } from 'twin.macro';

// @todo Move duplicated color map to shared utility

type ArrowBackgroundColorValues = `bg-offwhite` | `bg-charcoal` | `bg-offpink`;

const arrowBackgroundColorMap: { [key in ArrowBackgroundColorValues]: TwStyle } = {
  'bg-offwhite': tw`bg-offwhite`,
  'bg-charcoal': tw`bg-charcoal`,
  'bg-offpink': tw`bg-offpink`,
};

type ArrowProps = {
  direction: StyledInternalLinkDirection;
  backgroundColor: ArrowBackgroundColorValues;
};

export const Arrow = styled.span<ArrowProps>`
  top: 0.1875rem;
  width: 3rem;

  & > span {
    display: block;
    position: relative;
    ${({ backgroundColor }) => backgroundColor && arrowBackgroundColorMap[backgroundColor]}
    width: 3rem;
    height: 0.0625rem;
    will-change: transform;
  }

  & > span:before,
  & > span:after {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 2.5rem;
    ${({ backgroundColor }) => backgroundColor && arrowBackgroundColorMap[backgroundColor]}
    width: 0.5rem;
    height: 0.0625rem;
    content: '';
  }

  & > span:before {
    transform: rotate(-40deg);
    transform-origin: top left;
  }

  & > span:after {
    transform: rotate(40deg);
    transform-origin: bottom left;
  }
`;
