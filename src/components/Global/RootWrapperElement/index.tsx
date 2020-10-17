import { RootWrapperElementProps } from '@adelerium/components/Global/RootWrapperElement/types';
import { AppProvider } from '@adelerium/hooks/app-state';
import React, { ReactElement } from 'react';

export const RootWrapperElement = ({ element }: RootWrapperElementProps): ReactElement => (
  <AppProvider>{element}</AppProvider>
);
