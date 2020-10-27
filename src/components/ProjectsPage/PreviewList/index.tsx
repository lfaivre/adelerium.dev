import { Preview } from '@adelerium/components/ProjectsPage/Preview';
import { usePreviewListQueryData } from '@adelerium/components/ProjectsPage/PreviewList/usePreviewListQueryData';
import { useAppState } from '@adelerium/hooks/app-state';
import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useMemo } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'twin.macro';

export const PreviewList = (): ReactElement => {
  const {
    projectPreviews: { edges: projectPreviews },
  } = usePreviewListQueryData();

  const {
    theme: { colors },
  } = useAppState();

  const memoizedProjectPreviews = useMemo(
    () =>
      projectPreviews.map(({ node }, index) => {
        return <Preview project={node} order={index + 1} key={node.id} />;
      }),
    [projectPreviews]
  );

  return (
    <div tw="w-full">
      <SkeletonTheme color={colors.secondary.default} highlightColor={colors.tertiary.default} tw="w-full">
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
          {memoizedProjectPreviews}
        </FlexColumnWrapper>
      </SkeletonTheme>
    </div>
  );
};
