import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { Preview } from '../components/ProjectsPage/Preview';

import { useAppState } from '../shared/hooks/global-state';

import { PageQueryData } from '../shared/types/pages/projects';

import { MinHeightScreenWrapper, FlexColumnWrapper } from '../shared/styles/wrappers';

const ProjectsPage = ({ data, location: { pathname } }: PageProps): ReactElement => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;
  const projects = (data as PageQueryData).allContentfulProject.edges;

  return (
    <>
      <SEO title="Projects" pathname={pathname} image={metaImage} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        <SkeletonTheme
          color="var(--color-OffWhite)"
          highlightColor="var(--color-OffPink)"
          tw="w-full"
        >
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-full">
            {projects.map(({ node }, index) => {
              return <Preview project={node} order={index + 1} key={node.title} />;
            })}
          </FlexColumnWrapper>
        </SkeletonTheme>
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsPageQuery {
    contentfulAsset(title: { eq: "Projects Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
    allContentfulProject(sort: { fields: [rating, dateRangeEnd], order: [DESC, DESC] }) {
      edges {
        node {
          id
          title
          rating
          type
          dateRangeBeginning(formatString: "MMM YYYY")
          dateRangeEnd(formatString: "MMM YYYY")
          previewDescription {
            previewDescription
          }
          previewPicture {
            fluid(maxWidth: 720, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          technologyTags
          hostedUrl
          gitHubUrl
          figmaUrl
        }
      }
    }
  }
`;
