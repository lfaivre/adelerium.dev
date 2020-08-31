import tw, { styled } from 'twin.macro';
import { MainWrapperProps, ReturnButtonIndicatorProps } from './types';

export const DefaultViewContainer = tw.div`relative w-full h-full min-h-screen bg-green-900 flex flex-row justify-center items-start`;

export const SideBarWrapper = tw.div`absolute top-0 left-0 hidden xl:block xl:w-1/5 h-full min-h-screen bg-blue-900`;

export const ContentWrapper = styled.div`
  ${tw`relative w-full xl:w-4/5 min-h-screen flex flex-col`}
  @media (min-width: 1280px) {
    margin-left: 20%;
  }
  background-color: purple;
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
