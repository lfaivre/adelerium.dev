import React from 'react';
import { AppProvider } from './app-context';

// TODO: APPLY APPROPRIATE TYPES
interface Props {
  element: React.ReactNode;
}

export default ({ element }: Props) => {
  return <AppProvider>{element}</AppProvider>;
};
