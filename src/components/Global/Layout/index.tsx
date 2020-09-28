import React, { ReactElement, useEffect, useRef } from 'react';
import { GlobalStyles } from 'twin.macro';

import { useAppState, useAppDispatch } from '../../../shared/hooks/global-state';
import { SET_LOADING, SET_LAYOUT_WIDTH } from '../../../shared/types/state';

import { DefaultView } from './DefaultView';
import { LoadingView } from './LoadingView';

import { FlexColumnWrapper } from '../../../shared/styles/wrappers';

type LayoutProps = { children: ReactElement };

export const Layout = ({ children }: LayoutProps): ReactElement => {
  const { isLoading, windowWidth } = useAppState();
  const dispatch = useAppDispatch();

  const layoutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dispatch({ type: SET_LOADING, isLoading: false });
  }, [dispatch]);

  useEffect(() => {
    if (layoutRef.current && layoutRef.current.clientWidth) {
      const { clientWidth: layoutWidth } = layoutRef.current;
      dispatch({ type: SET_LAYOUT_WIDTH, layoutWidth });
    }
  }, [windowWidth, dispatch]);

  return (
    <>
      <GlobalStyles />
      <FlexColumnWrapper
        alignItems="items-center"
        justifyContent="justify-start"
        ref={layoutRef}
        tw="relative w-full max-w-global h-screen overflow-hidden"
      >
        {isLoading && <LoadingView />}
        <DefaultView>{children}</DefaultView>
      </FlexColumnWrapper>
    </>
  );
};

type PageWrapperElementProps = { element: ReactElement; props: Record<string, unknown> };

export const PageWrapperElement = ({ element, props }: PageWrapperElementProps): ReactElement => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
