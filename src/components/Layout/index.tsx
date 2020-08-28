import React, { useEffect, useRef } from 'react';

import { useAppState, useAppDispatch } from '../../state/app-context';
import { usePathData } from '../../hooks/location';
import { handleScroll } from '../../utils/window-interaction';

import SideBar from '../SideBar';
import Header from '../Header';
import Footer from '../Footer';
import BackgroundImage from '../Shared/BackgroundImage';

import {
  SCREEN_SIZE,
  pathsWithImgBgsDesktop,
  pathsWithImgBgsMobile,
} from '../../data/presentation';

import {
  LayoutWrapper,
  SideBarWrapper,
  ContentWrapper,
  HeaderWrapper,
  MainWrapper,
  ReturnButtonWrapper,
  ReturnButton,
  ReturnButtonIndicator,
  FooterWrapper,
} from './styles';

import { LayoutProps, PageWrapperElementProps } from './types';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const pathData = usePathData();
  const { windowWidth, headerHeight } = useAppState();
  const dispatch = useAppDispatch();

  /* eslint-disable unicorn/no-null */
  const headerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const returnRef = useRef<HTMLDivElement | null>(null);
  /* eslint-enable unicorn/no-null */

  useEffect(() => {
    if (headerRef.current && headerRef.current.clientHeight) {
      const { clientHeight } = headerRef.current;
      dispatch({ type: 'SET_HEADER_HEIGHT', headerHeight: clientHeight });
    }
    if (footerRef.current && footerRef.current.clientHeight) {
      const { clientHeight } = footerRef.current;
      dispatch({ type: 'SET_FOOTER_HEIGHT', footerHeight: clientHeight });
    }
    if (returnRef.current && returnRef.current.clientHeight) {
      const { clientHeight } = returnRef.current;
      dispatch({ type: 'SET_RETURN_HEIGHT', returnHeight: clientHeight });
    }
  }, [pathData.pathname, windowWidth, dispatch]);

  useEffect(() => {
    handleScroll();
  }, [pathData.pathname]);

  return (
    <LayoutWrapper>
      {windowWidth >= SCREEN_SIZE.XL && (
        <SideBarWrapper>
          <SideBar />
        </SideBarWrapper>
      )}
      <ContentWrapper>
        {!pathData.isIndex && (
          <HeaderWrapper ref={headerRef}>
            <Header
              pathname={pathData.pathname}
              isIndex={pathData.isIndex}
              pathData={pathData.pathData}
              isValidPath={pathData.isValidPath}
            />
          </HeaderWrapper>
        )}
        {((windowWidth < SCREEN_SIZE.MD &&
          pathData.pathname in pathsWithImgBgsMobile) ||
          (windowWidth >= SCREEN_SIZE.MD &&
            pathData.pathname in pathsWithImgBgsDesktop)) && (
          <BackgroundImage
            headerHeight={headerHeight}
            isIndex={pathData.isIndex}
          />
        )}
        <MainWrapper headerHeight={headerHeight} isIndex={pathData.isIndex}>
          {children}
        </MainWrapper>
        {!pathData.isIndex && (
          <ReturnButtonWrapper ref={returnRef}>
            <ReturnButton onClick={handleScroll}>
              <ReturnButtonIndicator />
              <ReturnButtonIndicator />
            </ReturnButton>
          </ReturnButtonWrapper>
        )}
        {!pathData.isIndex && (
          <FooterWrapper ref={footerRef}>
            <Footer
              pathname={pathData.pathname}
              isIndex={pathData.isIndex}
              pathData={pathData.pathData}
              isValidPath={pathData.isValidPath}
            />
          </FooterWrapper>
        )}
      </ContentWrapper>
    </LayoutWrapper>
  );
};

export const PageWrapperElement = ({
  element,
  props,
}: PageWrapperElementProps): React.ReactNode => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
