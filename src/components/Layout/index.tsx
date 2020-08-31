import React, { useState, useEffect, useRef } from 'react';

import { useAppState, useAppDispatch } from '../../state/app-context';
import { usePathData } from '../../hooks/location';
import { handleScroll } from '../../utils/window-interaction';

import { DefaultView } from '../../views/DefaultView';
import { ErrorView } from '../../views/ErrorView';
import { LoadingView } from '../../views/LoadingView';

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
  const { windowWidth, headerHeight, isLoading } = useAppState();
  const dispatch = useAppDispatch();

  /* eslint-disable unicorn/no-null */
  const headerRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const returnRef = useRef<HTMLDivElement | null>(null);
  /* eslint-enable unicorn/no-null */

  useEffect(() => {
    // setIsLoading(false);
    dispatch({ type: 'SET_LOADING', isLoading: false });
  }, [dispatch]);

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
    <LayoutWrapper>
      {isLoading && <LoadingView />}
      {/* {!isLoading && pathData.isValidPath && (
        <DefaultView>{children}</DefaultView>
      )} */}
      {/* {!isLoading && !pathData.isValidPath && <ErrorView>{children}</ErrorView>} */}
      {!isLoading && <ErrorView>{children}</ErrorView>}
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
