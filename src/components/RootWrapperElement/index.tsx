import React from 'react';
import { AppProvider } from '../../state/app-context';
import { RootWrapperElementProps } from './types';

export const RootWrapperElement = ({
  element,
}: RootWrapperElementProps): React.ReactNode => {
  return <AppProvider>{element}</AppProvider>;
};
