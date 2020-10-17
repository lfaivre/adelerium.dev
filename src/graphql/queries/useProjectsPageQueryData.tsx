import { ProjectsPageQuery } from '@adelerium/@types/__generated__/ProjectsPageQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useProjectsPageQueryData = (): ProjectsPageQuery => {
  const projectsPageQueryData: ProjectsPageQuery = useStaticQuery(graphql`
    query ProjectsPageQuery {
      metaImage: contentfulAsset(id: { eq: "57fcf54a-7405-5bc4-80cd-acd3e906526c" }) {
        fixed(width: 1200, resizingBehavior: SCALE, quality: 100) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  `);

  return projectsPageQueryData;
};
