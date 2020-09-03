import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { SEO } from '../components/Shared/SEO';
import { Preview } from '../components/ProjectsPage/Preview';

import { PageQueryData } from '../types/projects';
import { ProjectsPageContentWrapper } from '../styles/pages';

const ProjectsPage = ({ data }: PageProps): JSX.Element => {
  const projects = (data as PageQueryData).allContentfulProject.edges;

  return (
    <>
      <SEO title="Projects" />
      <ProjectsPageContentWrapper>
        {projects.map(({ node }, index) => {
          return <Preview project={node} order={index + 1} key={node.title} />;
        })}
      </ProjectsPageContentWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsPageQuery {
    allContentfulProject(
      sort: { fields: [rating, dateRangeEnd], order: [DESC, DESC] }
    ) {
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
            fluid(maxWidth: 1024, resizingBehavior: SCALE) {
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
