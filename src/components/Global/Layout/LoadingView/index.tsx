import { LoadingAnimation } from '@adelerium/components/Global/Layout/LoadingView/LoadingAnimation';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/constants';
import { usePathData } from '@adelerium/hooks/usePathData';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useEffect } from 'react';
import 'twin.macro';

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
