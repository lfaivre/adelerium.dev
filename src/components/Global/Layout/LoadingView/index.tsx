import React, { ReactElement, useEffect } from 'react';
import 'twin.macro';

import { LoadingAnimation } from './LoadingAnimation';

import { useAppState, useAppDispatch } from '../../../../shared/hooks/global-state';
import { usePathData } from '../../../../shared/hooks/location';

import { SET_LOADING } from '../../../../shared/types/state';

import { FlexRowWrapper } from '../../../../shared/styles/wrappers';

export const LoadingView = (): ReactElement => {
  const { isLoading } = useAppState();
  const dispatch = useAppDispatch();
  const { pathname } = usePathData();

  useEffect(() => {
    dispatch({ type: SET_LOADING, isLoading: true });
  }, [pathname, dispatch]);

  return isLoading ? (
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
