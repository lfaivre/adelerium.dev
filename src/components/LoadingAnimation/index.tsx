import React from 'react';
import { LoadingAnimationContainer } from './styles';

export const LoadingAnimation = (): JSX.Element => {
  return (
    <LoadingAnimationContainer className="loading-ripple">
      <div />
      <div />
    </LoadingAnimationContainer>
  );
};
