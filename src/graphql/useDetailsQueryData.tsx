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
      projects: allContentfulProject {
        nodes {
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
    }
  `);

  return detailsQueryData;
};
