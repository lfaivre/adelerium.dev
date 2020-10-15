import React, { ReactElement, useEffect } from 'react';
import 'twin.macro';
import { useAppDispatch, useAppState } from '../../../../shared/hooks/app-state';
import { usePathData } from '../../../../shared/hooks/usePathData';
import { FlexRowWrapper } from '../../../../shared/styles/wrappers';
import { SET_VIEW } from '../../../../shared/types/state';
import { LoadingAnimation } from './LoadingAnimation';

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
