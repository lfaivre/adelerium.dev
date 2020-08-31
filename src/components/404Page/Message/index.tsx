import React from 'react';

import { MessageWrapper, TitleWrapper, Title } from './styles';

export const Message = (): JSX.Element => {
  return (
    <MessageWrapper>
      <TitleWrapper>
        <Title>Page not found.</Title>
      </TitleWrapper>
    </MessageWrapper>
  );
};
