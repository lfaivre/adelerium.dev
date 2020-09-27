import { styled } from 'twin.macro';

export const LoadingAnimationContainer = styled.div`
  position: relative;
  width: 5rem;
  height: 5rem;

  & div {
    position: absolute;
    border: 0.25rem solid var(--color-OffPink);
    border-radius: 50%;
    opacity: 1;
    animation: ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & div:nth-of-type(2) {
    animation-delay: -0.75s;
  }

  @keyframes ripple {
    0% {
      top: 2rem;
      left: 2rem;
      width: 1rem;
      height: 1rem;
      opacity: 1;
    }
    100% {
      top: 0;
      left: 0;
      width: 5rem;
      height: 5rem;
      opacity: 0;
    }
  }
`;
