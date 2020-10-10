import React, { ReactElement } from 'react';
import { PageProps, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useSpring, animated, config } from 'react-spring';
import 'twin.macro';

import { SEO } from '../components/Global/SEO';

import { useAppState } from '../shared/hooks/global-state';

import { INDEX } from '../shared/types/paths';
import { PageQueryData } from '../shared/types/pages/404';

import { MinHeightScreenWrapper, FlexColumnWrapper } from '../shared/styles/wrappers';
import { BoldTypeAsGatsbyLink } from '../shared/styles/text';

const NotFoundPage = ({ data, location: { pathname } }: PageProps): ReactElement => {
  const { headerHeight, footerHeight, returnHeight } = useAppState();
  const staticsHeight = headerHeight + footerHeight + returnHeight;

  const metaImage = (data as PageQueryData).contentfulAsset.fixed;
  const accentImage = (data as PageQueryData).accentImage.childImageSharp.fluid;

  const springProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

  return (
    <>
      <SEO title="404: Not Found" pathname={pathname} image={metaImage} />
      <MinHeightScreenWrapper staticsHeight={staticsHeight} tw="p-2 md:p-4 w-full">
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-center" tw="w-full">
          <animated.div style={springProps} tw="flex flex-row justify-center w-full">
            <Img
              fluid={accentImage}
              alt=""
              loading="eager"
              draggable={false}
              tw="w-1/2 mb-4 select-none"
            />
          </animated.div>
          <BoldTypeAsGatsbyLink color="text-offwhite" to={INDEX} tw="p-2 pt-3 uppercase">
            Exit to Home
          </BoldTypeAsGatsbyLink>
        </FlexColumnWrapper>
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
    accentImage: file(relativePath: { eq: "error-page-accent.png" }) {
      childImageSharp {
        fluid(maxWidth: 840, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
