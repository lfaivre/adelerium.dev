import React from 'react';
import { LoadingAnimation } from '../../components/LoadingAnimation';

import { LoadingViewContainer } from './styles';

export const LoadingView = (): JSX.Element => {
  return (
    <LoadingViewContainer>
      <LoadingAnimation />
    </LoadingViewContainer>
  );
};
