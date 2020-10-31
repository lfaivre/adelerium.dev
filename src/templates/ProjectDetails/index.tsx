import { MemoizedDetails } from '@adelerium/components/ProjectsPage/Details';
import { ProjectDetailsProps } from '@adelerium/templates/ProjectDetails/types';
import { graphql } from 'gatsby';
import React from 'react';

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ data: { contentfulProject } }) => (
  <MemoizedDetails data={contentfulProject} />
);

// eslint-disable-next-line import/no-default-export
export default ProjectDetails;

export const pageQuery = graphql`
  query($id: String!) {
    contentfulProject(id: { eq: $id }) {
      id
      slug
      title
      type
      dateRangeBeginning(formatString: "MMM YYYY")
      dateRangeEnd(formatString: "MMM YYYY")
      details {
        childContentfulProjectDetailsContentTextNode {
          childMdx {
            body
          }
        }
      }
    }
  }
`;
