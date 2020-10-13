import React, { ReactElement } from 'react';

import { AppProvider } from '../../../shared/hooks/app-state';

type RootWrapperElementProps = { element: ReactElement };

export const RootWrapperElement = ({ element }: RootWrapperElementProps): ReactElement => (
  <AppProvider>{element}</AppProvider>
);
