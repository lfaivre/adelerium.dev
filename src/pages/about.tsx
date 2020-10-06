/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { SocialLinkSquare } from '../components/AboutPage/SocialLinkSquare';

import { FlexRowWrapper } from '../shared/styles/wrappers';

import { PageQueryData } from '../shared/types/pages/about';

import { SocialLinkData as GITHUB_SOCIALLINK_DATA } from '../components/AboutPage/SocialLinkSquare__Data/github';

const AboutPage = ({ data, location }: PageProps): ReactElement => {
  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="About" pathname={location.pathname} image={metaImage} />
      <FlexRowWrapper
        alignItems="items-start"
        justifyContent="justify-between"
        tw="flex-wrap p-2 md:p-4"
      >
        <SocialLinkSquare {...GITHUB_SOCIALLINK_DATA} />
        <SocialLinkSquare {...GITHUB_SOCIALLINK_DATA} />
        <SocialLinkSquare {...GITHUB_SOCIALLINK_DATA} />
      </FlexRowWrapper>
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
