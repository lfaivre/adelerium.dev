import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { GlobalStyles } from 'twin.macro';
import { useAppDispatch } from '../../../shared/hooks/app-state';
import { SET_DIMENSIONS } from '../../../shared/hooks/app-state/constants';
import { useDimensions } from '../../../shared/hooks/useDimensions';
import { useWindowDimensions } from '../../../shared/hooks/useWindowDimensions';
import { FullWidthWrapper } from '../../../shared/styles/wrappers';
import { DefaultView } from './DefaultView';
import { LoadingView } from './LoadingView';

type LayoutProps = { children: ReactElement };

export const Layout = ({ children }: LayoutProps): ReactElement => {
  const dispatch = useAppDispatch();
  const windowDimensions = useWindowDimensions();

  useLayoutEffect(() => {
    const { width, height } = windowDimensions;
    dispatch({ type: SET_DIMENSIONS, payload: { appWindow: { width, height } } });
  }, [windowDimensions, dispatch]);

  const layoutRef = useRef(null);
  const layoutDimensions = useDimensions({ ref: layoutRef });

  useLayoutEffect(() => {
    const { width, height } = layoutDimensions;
    dispatch({ type: SET_DIMENSIONS, payload: { layout: { width, height } } });
  }, [layoutDimensions, dispatch]);

  return (
    <>
      <GlobalStyles />
      <FullWidthWrapper ref={layoutRef} tw="relative w-full max-w-global h-full">
        <LoadingView />
        <DefaultView>{children}</DefaultView>
      </FullWidthWrapper>
    </>
  );
};

type PageWrapperElementProps = { element: ReactElement; props: Record<string, unknown> };

export const PageWrapperElement = ({ element, props }: PageWrapperElementProps): ReactElement => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
