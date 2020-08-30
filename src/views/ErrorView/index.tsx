import React from 'react';
import { ErrorViewContainer } from './styles';

interface ErrorViewProps {
  children: React.ReactNode;
}

export const ErrorView = ({ children }: ErrorViewProps): JSX.Element => {
  return (
    <ErrorViewContainer>
      <p>Error View</p>
      {children}
    </ErrorViewContainer>
  );
};
