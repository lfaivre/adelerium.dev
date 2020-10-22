import { StyledInternalLinkDirection } from '@adelerium/components/Global/StyledInternalLink/types';
import { styled } from 'twin.macro';

type ArrowProps = { direction: StyledInternalLinkDirection; backgroundColor: string };

export const Arrow = styled.span<ArrowProps>`
  top: 0.1875rem;
  width: 3rem;

  & > span {
    display: block;
    position: relative;
    ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
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
    ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
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
