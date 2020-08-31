import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { SEO } from '../components/Shared/SEO';
import { Preview } from '../components/ProjectsPage/Preview';

import { ProjectsPageContentWrapper } from '../styles/pages';

// @todo Will fix after Contentful integration

const ProjectsPage = ({ data }: PageProps): JSX.Element => {
  return (
    <>
      <SEO title="Projects" />
      <ProjectsPageContentWrapper>
        {data.allContentfulProject.edges.map(({ node }) => {
          return <Preview project={node} key={node.id} />;
        })}
      </ProjectsPageContentWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProjectsPage;

export const pageQuery = graphql`
  query ProjectsPageQuery {
    allContentfulProject(sort: { fields: [order], order: ASC }) {
      edges {
        node {
          id
          title
          order
          type
          dateRangeBeginning(formatString: "MMM YYYY")
          dateRangeEnd(formatString: "MMM YYYY")
          childContentfulProjectDescriptionTextNode {
            description
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
