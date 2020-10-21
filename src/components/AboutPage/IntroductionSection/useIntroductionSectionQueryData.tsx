import { IntroductionSectionQuery } from '@adelerium/@types/__generated__/IntroductionSectionQuery';
import { graphql, useStaticQuery } from 'gatsby';

export const useIntroductionSectionQueryData = (): IntroductionSectionQuery => {
  const introductionSectionQueryData: IntroductionSectionQuery = useStaticQuery(graphql`
    query IntroductionSectionQuery {
      introductionSection: contentfulPersonalInformationSection(id: { eq: "04004202-6a36-5286-b3a3-5786d612f749" }) {
        title
        content {
          title
          order
          content {
            content
          }
        }
      }
    }
  `);

  return introductionSectionQueryData;
};
