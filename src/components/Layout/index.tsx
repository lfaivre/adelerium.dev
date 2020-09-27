import React, { useEffect, useRef } from 'react';
import { GlobalStyles } from 'twin.macro';

import { useAppState, useAppDispatch } from '../../shared/hooks/global-state';

import { DefaultView } from '../../views/DefaultView';
import { LoadingView } from '../../views/LoadingView';

import { LayoutProps, PageWrapperElementProps } from './types';
import { LayoutWrapper } from './styles';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { isLoading, windowWidth } = useAppState();
  const dispatch = useAppDispatch();

  const layoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', isLoading: false });
  }, [dispatch]);

  useEffect(() => {
    if (layoutRef.current && layoutRef.current.clientWidth) {
      const { clientWidth } = layoutRef.current;
      dispatch({ type: 'SET_LAYOUT_WIDTH', layoutWidth: clientWidth });
    }
  }, [windowWidth, dispatch]);

  return (
    <>
      <GlobalStyles />
      <LayoutWrapper ref={layoutRef}>
        {isLoading && <LoadingView />}
        <DefaultView>{children}</DefaultView>
      </LayoutWrapper>
    </>
  );
};

export const PageWrapperElement = ({
  element,
  props,
}: PageWrapperElementProps): React.ReactNode => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
