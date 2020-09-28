import React, { ReactElement } from 'react';

import { LoadingAnimationWrapper } from './styles';

export const LoadingAnimation = (): ReactElement => {
  return (
    <LoadingAnimationWrapper borderColor="border-offpink">
      <div />
      <div />
    </LoadingAnimationWrapper>
  );
};
