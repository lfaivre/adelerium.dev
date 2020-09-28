import React from 'react';
import { LoadingAnimation } from '../LoadingAnimation';

import { LoadingViewContainer } from './styles';

export const LoadingView = (): JSX.Element => {
  return (
    <LoadingViewContainer>
      <LoadingAnimation />
    </LoadingViewContainer>
  );
};
