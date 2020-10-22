import { DefaultView } from '@adelerium/components/Global/Layout/DefaultView';
import { LoadingView } from '@adelerium/components/Global/Layout/LoadingView';
import { LayoutProps, PageWrapperElementProps } from '@adelerium/components/Global/Layout/types';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_DIMENSIONS } from '@adelerium/hooks/app-state/actions';
import { useDimensions } from '@adelerium/hooks/useDimensions';
import { useWindowDimensions } from '@adelerium/hooks/useWindowDimensions';
import { GlobalStyles } from '@adelerium/styles/global';
import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { GlobalStyles as TailwindGlobalStyles } from 'twin.macro';

export const Layout = ({ children }: LayoutProps): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();
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
      <TailwindGlobalStyles />
      <GlobalStyles backgroundColor={colors.primary.default} />
      <div ref={layoutRef} tw="relative w-full max-w-global h-full">
        <LoadingView />
        <DefaultView>{children}</DefaultView>
      </div>
    </>
  );
};

export const PageWrapperElement = ({ element, props }: PageWrapperElementProps): ReactElement => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
