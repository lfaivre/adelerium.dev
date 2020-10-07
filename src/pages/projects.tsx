import React from 'react';
import { PageProps, graphql } from 'gatsby';
import { SkeletonTheme } from 'react-loading-skeleton';

import { SEO } from '../components/Global/SEO';
import { Preview } from '../components/ProjectsPage/Preview';

import { PageQueryData } from '../shared/types/pages/projects';
import { ProjectsPageContentWrapper } from '../shared/styles/pages';

const ProjectsPage = ({ data, location }: PageProps): JSX.Element => {
  const metaImage = (data as PageQueryData).contentfulAsset.fixed;
  const projects = (data as PageQueryData).allContentfulProject.edges;

  return (
    <>
      <SEO title="Projects" pathname={location.pathname} image={metaImage} />
      <ProjectsPageContentWrapper>
        <SkeletonTheme color="var(--color-OffWhite)" highlightColor="var(--color-OffPink)">
          {projects.map(({ node }, index) => {
            return <Preview project={node} order={index + 1} key={node.title} />;
          })}
        </SkeletonTheme>
      </ProjectsPageContentWrapper>
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
