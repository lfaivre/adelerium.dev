/**
 * @temp
 * This query is only used to generate types.
 * The type generator cannot generate types for dynamic queries (currently passing in `id` prop).
 *
 * @todo
 * Figure out some other way to generate these types that doesn't require an unnecessary file.
 */

import { DetailsQuery } from '@adelerium/@types/__generated__/DetailsQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useDetailsQueryData = (): DetailsQuery => {
  const detailsQueryData: DetailsQuery = useStaticQuery(graphql`
    query DetailsQuery {
      projectDetails: allContentfulProjectDetails {
        nodes {
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
    }
  `);

  return detailsQueryData;
};
