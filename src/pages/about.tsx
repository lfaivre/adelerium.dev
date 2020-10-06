/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { SocialLinkSquare } from '../components/AboutPage/SocialLinkSquare';

import { FlexColumnWrapper, FlexRowWrapper } from '../shared/styles/wrappers';

import { PageQueryData } from '../shared/types/pages/about';

import {
  GITHUB_SOCIALLINK_DATA,
  FIGMA_SOCIALLINK_DATA,
  LINKEDIN_SOCIALLINK_DATA,
  GOOGLE_SOCIALLINK_DATA,
} from '../shared/constants/social-link-squares';

const AboutPage = ({ data, location }: PageProps): ReactElement => {
  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="About" pathname={location.pathname} image={metaImage} />
      <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="p-2 md:p-4">
        <FlexRowWrapper
          alignItems="items-start"
          justifyContent="justify-between"
          tw="flex-wrap w-full mb-2 md:mb-4"
        >
          <SocialLinkSquare {...GITHUB_SOCIALLINK_DATA} />
          <SocialLinkSquare {...FIGMA_SOCIALLINK_DATA} />
          <SocialLinkSquare {...LINKEDIN_SOCIALLINK_DATA} />
        </FlexRowWrapper>
        <FlexRowWrapper
          alignItems="items-start"
          justifyContent="justify-between"
          tw="flex-wrap w-full"
        >
          <SocialLinkSquare {...GOOGLE_SOCIALLINK_DATA} />
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AboutPage;

export const pageQuery = graphql`
  query AboutPageQuery {
    contentfulAsset(title: { eq: "About Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
  }
`;

/* eslint-enable react/jsx-props-no-spreading */
