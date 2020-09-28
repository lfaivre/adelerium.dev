import React from 'react';
import tw, { styled } from 'twin.macro';
import { Link } from 'gatsby';
import { InternalLinkDirection as ILD } from '../../../shared/types/presentation';
import { DirectionProps, StyledArrowProps } from './types';

const StyledArrow = ({ className, ...rest }: StyledArrowProps): JSX.Element => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <span {...rest} className={className}>
    <span />
  </span>
);

export const InternalLink = styled(Link)`
  ${tw`h-full w-32`}
`;

export const Placeholder = tw.div`h-full w-32`;

export const InternalLinkWrapper = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === ILD.Previous ? tw`items-end` : tw`items-start`)}
  ${tw`w-full h-full flex flex-col justify-center`}
`;

export const TitleTextWrapper = styled.div<DirectionProps>`
  ${({ _direction }) => (_direction === ILD.Previous ? tw`justify-end` : tw`justify-start`)}
  ${tw`flex flex-row items-center`}
`;

export const TitleText = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === ILD.Previous ? tw`text-right` : tw`text-left`)}
  ${tw`text-base font-playfair-display font-bold text-charcoal`}
`;

export const PathInfoWrapper = tw.div`w-full flex flex-row justify-between items-center`;

export const PathText = styled.p<DirectionProps>`
  ${({ _direction }) => (_direction === ILD.Previous ? tw`text-right` : tw`text-left`)}
  ${tw`text-base font-playfair-display font-normal text-charcoal`}
`;

export const Arrow = styled(StyledArrow)`
  ${({ _direction }) => (_direction === ILD.Previous ? tw`mr-4` : tw`ml-4`)}
  width: 3rem;
  top: 0.1875rem;
  & > span {
    width: 3rem;
    height: 0.0625rem;
    position: relative;
    display: block;
    background-color: var(--color-Charcoal);
    will-change: transform;
  }
  & > span:before,
  & > span:after {
    position: absolute;
    top: 0;
    right: 0;
    width: 0.5rem;
    height: 0.0625rem;
    margin-right: ${({ _direction }) => (_direction === ILD.Previous ? `2.5rem` : ``)};
    display: block;
    background-color: var(--color-Charcoal);
    content: '';
  }
  & > span:before {
    transform-origin: ${({ _direction }) =>
      _direction === ILD.Previous ? `top left` : `top right`};
    transform: ${({ _direction }) =>
      _direction === ILD.Previous ? `rotate(-40deg)` : `rotate(40deg)`};
  }
  & > span:after {
    transform-origin: ${({ _direction }) =>
      _direction === ILD.Previous ? `bottom left` : `bottom right`};
    transform: ${({ _direction }) =>
      _direction === ILD.Previous ? `rotate(40deg)` : `rotate(-40deg)`};
  }
`;
