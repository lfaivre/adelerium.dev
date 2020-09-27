import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { SEO } from '../components/Shared/SEO';
import { SideBar } from '../components/SideBar';

import { useAppState } from '../shared/hooks/global-state';

import { SCREEN_SIZE } from '../shared/constants/presentation';

import { PageQueryData } from '../shared/types/pages/home';
import { IndexPageNavigatorWrapper, IndexPageContentWrapper } from '../shared/styles/pages';

const IndexPage = ({ data, location }: PageProps): JSX.Element => {
  const { windowWidth } = useAppState();

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="Home" pathname={location.pathname} image={metaImage} />
      {!(windowWidth < SCREEN_SIZE.XL) ? (
        <IndexPageContentWrapper />
      ) : (
        <IndexPageNavigatorWrapper>
          <SideBar />
        </IndexPageNavigatorWrapper>
      )}
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
    contentfulAsset(title: { eq: "Home Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
  }
`;
