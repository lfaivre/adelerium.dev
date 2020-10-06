import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { SocialLinkSquare } from '../components/AboutPage/SocialLinkSquare';

import { FlexRowWrapper } from '../shared/styles/wrappers';

import { PageQueryData } from '../shared/types/pages/about';

const AboutPage = ({ data, location }: PageProps): ReactElement => {
  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="About" pathname={location.pathname} image={metaImage} />
      <FlexRowWrapper alignItems="items-start" justifyContent="justify-start" tw="p-2 md:p-4">
        <SocialLinkSquare />
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
