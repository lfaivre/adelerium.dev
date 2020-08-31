import React, { useEffect } from 'react';

import { useAppState, useAppDispatch } from '../../state/app-context';
import { usePathData } from '../../hooks/location';

import { DefaultView } from '../../views/DefaultView';
// import { ErrorView } from '../../views/ErrorView';
import { LoadingView } from '../../views/LoadingView';

import { LayoutProps, PageWrapperElementProps } from './types';
import { LayoutWrapper } from './styles';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const pathData = usePathData();
  const { isLoading } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', isLoading: false });
  }, [dispatch]);

  return (
    <LayoutWrapper>
      {isLoading && <LoadingView />}
      {!isLoading && pathData.isValidPath && (
        <DefaultView>{children}</DefaultView>
      )}
      {/* {!isLoading && !pathData.isValidPath && <ErrorView>{children}</ErrorView>} */}
      {/* {!isLoading && <ErrorView>{children}</ErrorView>} */}
    </LayoutWrapper>
  );
};

export const PageWrapperElement = ({
  element,
  props,
}: PageWrapperElementProps): React.ReactNode => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
};
