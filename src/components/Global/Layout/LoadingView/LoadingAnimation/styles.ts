import tw, { styled, TwStyle } from 'twin.macro';

// @todo Move color map to shared utility

type LoadingAnimationBorderColorValues = `border-offwhite` | `border-charcoal` | `border-offpink`;

const loadingAnimationBorderColorMap: { [key in LoadingAnimationBorderColorValues]: TwStyle } = {
  'border-offwhite': tw`border-offwhite`,
  'border-charcoal': tw`border-charcoal`,
  'border-offpink': tw`border-offpink`,
};

type LoadingAnimationProps = { borderColor: LoadingAnimationBorderColorValues };

export const LoadingAnimationWrapper = styled.div<LoadingAnimationProps>`
  position: relative;
  width: 5rem;
  height: 5rem;

  & div {
    position: absolute;
    opacity: 1;
    border-width: 0.125rem;
    border-style: solid;
    border-radius: 50%;
    ${({ borderColor }) => loadingAnimationBorderColorMap[borderColor]}
    animation: ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-of-type(2) {
    animation-delay: -0.75s;
  }

  @keyframes ripple {
    0% {
      top: 2rem;
      left: 2rem;
      opacity: 1;
      width: 1rem;
      height: 1rem;
    }
    100% {
      top: 0;
      left: 0;
      opacity: 0;
      width: 5rem;
      height: 5rem;
    }
  }
`;
