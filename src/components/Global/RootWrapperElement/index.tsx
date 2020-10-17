import { AppProvider } from '@adelerium/hooks/app-state';
import React, { ReactElement } from 'react';

type RootWrapperElementProps = { element: ReactElement };

export const RootWrapperElement = ({ element }: RootWrapperElementProps): ReactElement => (
  <AppProvider>{element}</AppProvider>
);
