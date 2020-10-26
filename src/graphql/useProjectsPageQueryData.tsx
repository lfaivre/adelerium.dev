import { ProjectsPageQuery } from '@adelerium/@types/__generated__/ProjectsPageQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useProjectsPageQueryData = (): ProjectsPageQuery => {
  const projectsPageQueryData: ProjectsPageQuery = useStaticQuery(graphql`
    query ProjectsPageQuery {
      metaImage: contentfulAsset(id: { eq: "3ec18d0b-ad1e-5d94-809c-d43c93a98f37" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          ...GatsbyContentfulFixed
        }
      }
    }
  `);

  return projectsPageQueryData;
};
