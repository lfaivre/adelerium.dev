import React, { ReactElement, useEffect } from 'react';
import 'twin.macro';

import { LoadingAnimation } from './LoadingAnimation';

import { useAppState, useAppDispatch } from '../../../../shared/hooks/app-state';
import { usePathData } from '../../../../shared/hooks/usePathData';

import { SET_VIEW } from '../../../../shared/types/state';

import { FlexRowWrapper } from '../../../../shared/styles/wrappers';

export const LoadingView = (): ReactElement => {
  const {
    view: {
      loadingScreen: { isVisible: loadingScreenIsVisible },
    },
  } = useAppState();
  const dispatch = useAppDispatch();
  const { pathname } = usePathData();

  useEffect(() => {
    dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: false } } });
  }, [pathname, dispatch]);

  return loadingScreenIsVisible ? (
    <FlexRowWrapper
      alignItems="items-center"
      justifyContent="justify-center"
      backgroundColor="bg-offwhite"
      tw="absolute top-0 left-0 z-40 w-full h-full"
    >
      <LoadingAnimation />
    </FlexRowWrapper>
  ) : (
    <></>
  );
};
