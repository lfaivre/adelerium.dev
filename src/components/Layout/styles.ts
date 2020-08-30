import tw, { styled } from 'twin.macro';
import { MainWrapperProps, ReturnButtonIndicatorProps } from './types';

export const LayoutWrapper = tw.div`w-full max-w-global h-full flex flex-col justify-start items-center`;

export const SideBarWrapper = tw.div`fixed hidden xl:block xl:w-1/5 h-full`;

export const ContentWrapper = styled.div`
  ${tw`relative z-0 w-full xl:w-4/5 flex flex-col`}
  @media (min-width: 1280px) {
    margin-left: 20%;
  }
`;

export const HeaderWrapper = tw.div`fixed z-20 w-full xl:w-4/5 right-0 top-0`;

export const MainWrapper = styled.div<MainWrapperProps>`
  ${tw`z-10 w-full`}
  margin-top: ${({ headerHeight, isIndex }) =>
    !isIndex ? `${headerHeight}px` : 0}
`;

export const ReturnButtonWrapper = tw.div`z-10 w-full p-8 flex flex-shrink-0 flex-row justify-center md:justify-end items-center`;

export const ReturnButton = styled.button`
  ${tw`w-16 h-16 border-2 border-solid border-offwhite rounded-full flex flex-col justify-center items-center bg-transparent overflow-hidden focus:outline-none`}
  &:hover > span:first-of-type {
    background-color: var(--offwhite);
  }
`;

export const ReturnButtonIndicator = styled.span<ReturnButtonIndicatorProps>`
  ${tw`w-full h-8 bg-transparent transition-colors duration-300 ease-in-out`}
`;

export const FooterWrapper = tw.div`z-10 w-full`;
