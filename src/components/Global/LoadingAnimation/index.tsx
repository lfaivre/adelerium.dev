import { LoadingAnimationWrapper } from '@adelerium/components/Global/LoadingAnimation/styles';
import React, { ReactElement } from 'react';

export const LoadingAnimation = (): ReactElement => {
  return (
    <LoadingAnimationWrapper borderColor="border-charcoal">
      <div />
      <div />
    </LoadingAnimationWrapper>
  );
};
