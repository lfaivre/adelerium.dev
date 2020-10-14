import React, { ReactElement } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'twin.macro';

import { Preview } from '../Preview';

import { usePreviewListQueryData } from '../../../graphql/queries/usePreviewListQueryData';

import { FlexColumnWrapper } from '../../../shared/styles/wrappers';

export const PreviewList = (): ReactElement => {
  const {
    projectPreviews: { edges: projectPreviews },
  } = usePreviewListQueryData();

  return (
    <div tw="w-full">
      <SkeletonTheme
        color="var(--color-OffWhite)"
        highlightColor="var(--color-OffPink)"
        tw="w-full"
      >
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
          {projectPreviews.map(({ node }, index) => {
            return <Preview project={node} order={index + 1} key={node.id} />;
          })}
        </FlexColumnWrapper>
      </SkeletonTheme>
    </div>
  );
};
