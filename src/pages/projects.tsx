import { SEO } from '@adelerium/components/Global/SEO';
import { PreviewList } from '@adelerium/components/ProjectsPage/PreviewList';
import { useProjectsPageQueryData } from '@adelerium/graphql/useProjectsPageQueryData';
import { useAppState } from '@adelerium/hooks/app-state';
import { MinHeightScreenWrapper } from '@adelerium/styles/wrappers';
import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { ReactElement } from 'react';
import 'twin.macro';

const ProjectsPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage } = useProjectsPageQueryData();

  const {
    dimensions: {
      navigationCollection: { height: navigationCollectionHeight },
    },
  } = useAppState();

  return (
    <>
      <SEO title="Projects" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <MinHeightScreenWrapper minHeight={navigationCollectionHeight} tw="p-2 md:p-4 w-full">
        <PreviewList />
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProjectsPage;
