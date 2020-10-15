import { LoadingAnimationWrapper } from '@adelerium/components/Global/Layout/LoadingView/LoadingAnimation/styles';
import React, { ReactElement } from 'react';

export const LoadingAnimation = (): ReactElement => {
  return (
    <LoadingAnimationWrapper borderColor="border-charcoal">
      <div />
      <div />
    </LoadingAnimationWrapper>
  );
};
