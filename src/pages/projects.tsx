import React, { ReactElement } from 'react';
import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { PreviewList } from '../components/ProjectsPage/PreviewList';

import { useProjectsPageQueryData } from '../graphql/queries/useProjectsPageQueryData';
import { useAppState } from '../shared/hooks/app-state';

import { MinHeightScreenWrapper } from '../shared/styles/wrappers';

const ProjectsPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage } = useProjectsPageQueryData();

  const {
    dimensions: {
      header: { height: headerHeight },
      footer: { height: footerHeight },
      returnButton: { height: returnButtonHeight },
    },
  } = useAppState();

  // @todo Convert this to component state
  const staticsHeight = headerHeight + footerHeight + returnButtonHeight;

  return (
    <>
      <SEO title="Projects" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        <PreviewList />
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProjectsPage;
