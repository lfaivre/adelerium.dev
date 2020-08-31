import React from 'react';

import SEO from '../components/Shared/SEO';
import { SideBar } from '../components/SideBar';

import { useAppState } from '../state/app-context';

import { SCREEN_SIZE } from '../data/presentation';

import {
  IndexPageNavigatorWrapper,
  IndexPageContentWrapper,
} from '../styles/pages';

const IndexPage = () => {
  const { windowWidth } = useAppState();

  return (
    <>
      <SEO title="Home" />
      {!(windowWidth < SCREEN_SIZE.XL) ? (
        <IndexPageContentWrapper></IndexPageContentWrapper>
      ) : (
        <IndexPageNavigatorWrapper>
          <SideBar />
        </IndexPageNavigatorWrapper>
      )}
    </>
  );
};

export default IndexPage;
