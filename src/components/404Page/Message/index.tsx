import React, { ReactElement } from 'react';

import { MessageWrapper, TitleWrapper, Title } from './styles';

export const Message = (): ReactElement => {
  return (
    <MessageWrapper>
      <TitleWrapper>
        <Title>Page not found.</Title>
      </TitleWrapper>
    </MessageWrapper>
  );
};
