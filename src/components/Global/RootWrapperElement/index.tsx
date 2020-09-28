import React from 'react';
import { AppProvider } from '../../../shared/hooks/global-state';
import { RootWrapperElementProps } from './types';

export const RootWrapperElement = ({ element }: RootWrapperElementProps): React.ReactNode => {
  return <AppProvider>{element}</AppProvider>;
};
