import React, { useEffect, useRef } from 'react';

import { useAppState, useAppDispatch } from '../../state/app-context';
import { usePathData } from '../../hooks/location';
import { handleScroll } from '../../utils/window-interaction';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BackgroundImage from '../../components/Shared/BackgroundImage';

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
  HeaderWrapper,
  MainWrapper,
  ReturnButtonWrapper,
  ReturnButton,
  ReturnButtonIndicator,
  FooterWrapper,
} from './styles';
import { TPathname } from '../../types/paths';

export const DefaultView = ({ children }: DefaultViewProps): JSX.Element => {
  const pathData = usePathData();
  const { windowWidth, headerHeight } = useAppState();
  const dispatch = useAppDispatch();

  /* eslint-disable unicorn/no-null */
  const headerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const returnRef = useRef<HTMLDivElement | null>(null);
  /* eslint-enable unicorn/no-null */

  // @todo Extract this to an external hook
  useEffect(() => {
    console.log(pathData);
    if (headerRef.current && headerRef.current.clientHeight) {
      const { clientHeight } = headerRef.current;
      console.log('SET HEADER HEIGHT:', clientHeight);
      dispatch({ type: 'SET_HEADER_HEIGHT', headerHeight: clientHeight });
    } else {
      console.log('NO HEADER REF');
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

  return (
    <DefaultViewContainer>
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
          (pathData.pathname as TPathname) in pathsWithImgBgsMobile) ||
          (windowWidth >= SCREEN_SIZE.MD &&
            (pathData.pathname as TPathname) in pathsWithImgBgsDesktop)) && (
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
    </DefaultViewContainer>
  );
};
