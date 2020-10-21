import { StaticResumeQuery } from '@adelerium/@types/__generated__/StaticResumeQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useStaticResumeQueryData = (): StaticResumeQuery => {
  const staticResumeQueryData: StaticResumeQuery = useStaticQuery(graphql`
    query StaticResumeQuery {
      resumeLink: contentfulLink(id: { eq: "06858e36-4d4d-5e76-a752-4948e60e27d3" }) {
        destination
      }
    }
  `);

  return staticResumeQueryData;
};
