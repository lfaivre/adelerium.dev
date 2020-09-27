import React, { useEffect, useRef } from 'react';

import { useAppState, useAppDispatch } from '../../state/app-context';
import { usePathData } from '../../hooks/location';

import { SideBar } from '../../components/SideBar';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import {
  SCREEN_SIZE,
  pathsWithImgBgsDesktop,
  pathsWithImgBgsMobile,
} from '../../data/presentation';

import { DefaultViewProps } from './types';
import {
  DefaultViewContainer,
  SideBarWrapper,
  ContentWrapper,
  BackgroundImage,
  HeaderWrapper,
  MainWrapper,
  ReturnButtonWrapper,
  ReturnButton,
  ReturnButtonIndicator,
  FooterWrapper,
} from './styles';
import { TPathname } from '../../types/paths';

const handleScroll = (): void => {
  if (typeof window !== `undefined`) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
};

export const DefaultView = ({ children }: DefaultViewProps): JSX.Element => {
  const pathData = usePathData();
  const { windowWidth, layoutWidth, headerHeight } = useAppState();
  const dispatch = useAppDispatch();

  const headerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const returnRef = useRef<HTMLDivElement | null>(null);

  // @todo Extract this to an external hook
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
  }, [pathData.pathname, pathData.isIndex, windowWidth, dispatch]);

  useEffect(() => {
    handleScroll();
  }, [pathData.pathname]);

  const shouldShowBackgroundImage = (): boolean => {
    return (
      (windowWidth < SCREEN_SIZE.MD && (pathData.pathname as TPathname) in pathsWithImgBgsMobile) ||
      (windowWidth >= SCREEN_SIZE.MD && (pathData.pathname as TPathname) in pathsWithImgBgsDesktop)
    );
  };

  return (
    <DefaultViewContainer>
      {windowWidth >= SCREEN_SIZE.XL && (
        <SideBarWrapper layoutWidth={layoutWidth}>
          <SideBar />
        </SideBarWrapper>
      )}
      <ContentWrapper layoutWidth={layoutWidth}>
        {!pathData.isIndex && (
          <HeaderWrapper ref={headerRef} layoutWidth={layoutWidth}>
            <Header
              pathname={pathData.pathname}
              isIndex={pathData.isIndex}
              pathData={pathData.pathData}
              isValidPath={pathData.isValidPath}
            />
          </HeaderWrapper>
        )}
        {shouldShowBackgroundImage() && <BackgroundImage layoutWidth={layoutWidth} />}
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
    </DefaultViewContainer>
  );
};
