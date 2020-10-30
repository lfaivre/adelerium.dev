import { MemoizedDetails } from '@adelerium/components/ProjectsPage/Details';
import { ProjectDetailsProps } from '@adelerium/templates/ProjectDetails/types';
import { graphql } from 'gatsby';
import React from 'react';

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ data: { contentfulProjectDetails } }) => (
  <MemoizedDetails data={contentfulProjectDetails} />
);

// eslint-disable-next-line import/no-default-export
export default ProjectDetails;

export const pageQuery = graphql`
  query($id: String!) {
    contentfulProjectDetails(id: { eq: $id }) {
      id
      slug
      title
      content {
        childMdx {
          body
        }
      }
    }
  }
`;
