import { DefaultView } from '@adelerium/components/Global/Layout/DefaultView';
import { LoadingView } from '@adelerium/components/Global/Layout/LoadingView';
import { useAppDispatch } from '@adelerium/hooks/app-state';
import { SET_DIMENSIONS } from '@adelerium/hooks/app-state/constants';
import { useDimensions } from '@adelerium/hooks/useDimensions';
import { useWindowDimensions } from '@adelerium/hooks/useWindowDimensions';
import { FullWidthWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { GlobalStyles } from 'twin.macro';

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
