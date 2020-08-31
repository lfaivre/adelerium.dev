import tw, { styled } from 'twin.macro';
import {
  SideBarWrapperProps,
  ContentWrapperProps,
  BackgroundImageProps,
  HeaderWrapperProps,
  MainWrapperProps,
  ReturnButtonIndicatorProps,
} from './types';

import backgroundImage from './waves-1344.jpg';

export const DefaultViewContainer = tw.div`w-full h-full min-h-screen flex flex-row justify-start`;

// @todo Add max-height to SideBar component, and center content
export const SideBarWrapper = styled.div<SideBarWrapperProps>`
  ${tw`fixed top-0 z-20 hidden xl:block h-full min-h-screen`}
  @media (min-width: 1280px) {
    width: ${({ layoutWidth }) => `${Math.floor(0.2 * layoutWidth)}px`};
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  ${tw`relative z-0 w-full min-h-screen flex flex-col`}
  @media (min-width: 1280px) {
    margin-left: ${({ layoutWidth }) => `${Math.floor(0.2 * layoutWidth)}px`};
    width: ${({ layoutWidth }) => `${Math.floor(0.8 * layoutWidth)}px`};
  }
`;

export const BackgroundImage = styled.div<BackgroundImageProps>`
  ${tw`fixed top-0 w-full h-screen`}
  @media (min-width: 1280px) {
    width: ${({ layoutWidth }) => `${Math.floor(0.8 * layoutWidth)}px`};
  }
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const HeaderWrapper = styled.div<HeaderWrapperProps>`
  ${tw`fixed top-0 z-20 w-full`}
  @media (min-width: 1280px) {
    width: ${({ layoutWidth }) => `${Math.floor(0.8 * layoutWidth)}px`};
  }
`;

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

export const FooterWrapper = tw.div`z-20 w-full`;
