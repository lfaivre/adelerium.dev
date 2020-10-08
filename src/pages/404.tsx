import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { Message } from '../components/404Page/Message';

import { useAppState } from '../shared/hooks/global-state';

import { PageQueryData } from '../shared/types/pages/404';

import { MinHeightScreenWrapper } from '../shared/styles/wrappers';

const NotFoundPage = ({ data, location: { pathname } }: PageProps): ReactElement => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;

  return (
    <>
      <SEO title="404: Not Found" pathname={pathname} image={metaImage} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        <Message />
      </MinHeightScreenWrapper>
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
