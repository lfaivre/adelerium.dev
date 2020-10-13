import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { GlobalStyles } from 'twin.macro';

import { useAppDispatch } from '../../../shared/hooks/global-state';

import { useDimensions } from '../../../shared/hooks/useDimensions';
import { SET_DIMENSIONS } from '../../../shared/types/state';

import { DefaultView } from './DefaultView';
import { LoadingView } from './LoadingView';

import { FullWidthWrapper } from '../../../shared/styles/wrappers';

type LayoutProps = { children: ReactElement };

export const Layout = ({ children }: LayoutProps): ReactElement => {
  const dispatch = useAppDispatch();

  const layoutRef = useRef(null);
  const { width: observedLayoutWidth } = useDimensions({ ref: layoutRef });

  useLayoutEffect(() => {
    dispatch({
      type: SET_DIMENSIONS,
      payload: { layout: { width: observedLayoutWidth, height: -1 } },
    });
  }, [observedLayoutWidth, dispatch]);

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
