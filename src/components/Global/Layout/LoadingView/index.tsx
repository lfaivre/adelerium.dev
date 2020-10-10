import React, { ReactElement } from 'react';
import 'twin.macro';

import { LoadingAnimation } from './LoadingAnimation';

import { FlexRowWrapper } from '../../../../shared/styles/wrappers';

export const LoadingView = (): ReactElement => {
  return (
    <FlexRowWrapper
      alignItems="items-center"
      justifyContent="justify-center"
      backgroundColor="bg-offwhite"
      tw="absolute top-0 left-0 z-40 w-full h-full"
    >
      <LoadingAnimation />
    </FlexRowWrapper>
  );
};
