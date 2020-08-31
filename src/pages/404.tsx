import React from 'react';

import { useAppState } from '../state/app-context';

import SEO from '../components/Shared/SEO';
import { Message } from '../components/404Page/Message';

import { ErrorPageContentWrapper } from '../styles/pages';

const NotFoundPage = (): JSX.Element => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  return (
    <>
      <SEO title="404: Not found" />
      <ErrorPageContentWrapper staticsHeight={staticsHeight}>
        <Message />
      </ErrorPageContentWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFoundPage;
