import { StaticResumeQuery } from '@adelerium/@types/__generated__/StaticResumeQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useStaticResumeQueryData = (): StaticResumeQuery => {
  const staticResumeQueryData: StaticResumeQuery = useStaticQuery(graphql`
    query StaticResumeQuery {
      resumeLink: contentfulLink(id: { eq: "da43800a-be74-5061-b753-3c97f271f11c" }) {
        destination
      }
    }
  `);

  return staticResumeQueryData;
};
