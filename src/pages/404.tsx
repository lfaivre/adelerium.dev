import React from 'react';
import { PageProps, graphql } from 'gatsby';

import { useAppState } from '../shared/hooks/global-state';

import { SEO } from '../components/Shared/SEO';
import { Message } from '../components/404Page/Message';

import { PageQueryData } from '../shared/types/pages/404';
import { ErrorPageContentWrapper } from '../shared/styles/pages';

const NotFoundPage = ({ data, location }: PageProps): JSX.Element => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="404: Not Found" pathname={location.pathname} image={metaImage} />
      <ErrorPageContentWrapper staticsHeight={staticsHeight}>
        <Message />
      </ErrorPageContentWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default NotFoundPage;

export const pageQuery = graphql`
  query NotFoundPageQuery {
    contentfulAsset(title: { eq: "404 Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
  }
`;
