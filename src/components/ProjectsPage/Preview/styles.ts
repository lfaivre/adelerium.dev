import tw, { css, styled } from 'twin.macro';

export const OrderNumber = styled.p`
  ${tw`leading-149 text-offwhite font-lobster-two text-6xl md:text-7xl font-bold select-none`}
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: var(--color-OffWhite);
`;

export const BoxShadowStyles = css`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Divider = tw.hr`w-full h-0 mb-2 last:mb-0 border border-offwhite`;
