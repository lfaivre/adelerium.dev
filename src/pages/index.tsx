import React, { ReactElement, useState, useRef, useEffect } from 'react';
import { PageProps, graphql } from 'gatsby';
import { useSpring, animated, config } from 'react-spring';
import tw, { css } from 'twin.macro';

import { SEO } from '../components/Global/SEO';
import { Header } from '../components/Global/Layout/DefaultView/Header';
import { KoiPond } from '../components/HomePage/KoiPond';

import { useAppState, useAppDispatch } from '../shared/hooks/global-state';
import { useDimensions } from '../shared/hooks/useDimensions';

import { SCREEN_SIZE } from '../shared/constants/presentation';

import { PageQueryData } from '../shared/types/pages/home';

import { FlexRowWrapper } from '../shared/styles/wrappers';
import { BoldTypeAsButton, BrandingTypeAsAnchor } from '../shared/styles/text';
import { SET_SIDEBAR_VISIBILITY } from '../shared/types/state';

const CSS_OFFSET_PATH = `offset-path: path('M11.7692 229.5C14.552 200.052 7.51901 171.858 -42.8757 170.644C-105.869 169.128 -131.294 76.612 -101.695 51.5872C-72.0955 26.5625 -24.6607 -50.7867 70.5883 51.5872C165.837 153.961 27.7073 131.211 33.0199 183.157C38.3326 235.102 90.3211 195.669 139.274 223.727C188.226 251.785 207.959 299.56 139.274 316.243C70.5883 332.926 41.3685 398.9 81.9726 419.754C122.577 440.608 222 478.524 222 419.754C222 372.738 222 242.432 222 183.157C219.091 129.948 175.78 30.8091 25.8099 59.9288C-161.652 96.3284 -30.3529 119.837 25.8099 141.07C81.9726 162.303 171.529 204.769 126.751 260.506C81.9726 316.243 101.326 362.501 139.274 373.496C177.222 384.492 170.012 464.495 70.5883 462.979C-28.835 461.462 -42.8757 393.015 -42.8757 373.496C-42.8757 238.288 11.7692 293 11.7692 240.506C11.7692 208.05 11.7692 237.336 11.7692 229.5Z')`;

// @todo Source this link from Contentful
const KEVALA_DESIGN_LINK = `https://www.kevaladesign.com`;

const IndexPage = ({ data, location: { pathname } }: PageProps): ReactElement => {
  const { sideBarIsVisible, layoutWidth } = useAppState();
  const dispatch = useAppDispatch();

  const [browserSupportsAnimation, setBrowserSupportsAnimation] = useState<boolean>(true);

  const metaImage = (data as PageQueryData).metaImage.fixed;

  const springProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

  useEffect(() => {
    try {
      const browserCheck = CSS.supports(CSS_OFFSET_PATH);
      setBrowserSupportsAnimation(browserCheck || false);
    } catch {
      console.log(`Failed browser check or triggered during a static build`);
    }
  }, []);

  const buttonRef = useRef(null);
  const { width } = useDimensions({ ref: buttonRef });

  const positionLeftStyles = css`
    left: ${-(width / 2) + 32}px;
  `;

  return (
    <>
      <SEO title="Home" pathname={pathname} image={metaImage} />
      <FlexRowWrapper
        alignItems="items-center"
        justifyContent="justify-center"
        backgroundColor="bg-offwhite"
        tw="relative w-full h-screen"
      >
        {browserSupportsAnimation && <KoiPond />}
        <BoldTypeAsButton
          ref={buttonRef}
          onClick={() =>
            dispatch({ type: SET_SIDEBAR_VISIBILITY, sideBarIsVisible: !sideBarIsVisible })
          }
          color="text-charcoal"
          textAlign="text-center"
          css={[
            tw`hidden md:block absolute transform -rotate-90 z-10 focus:outline-none px-2 py-1 text-xs md:text-xs uppercase`,
            positionLeftStyles,
          ]}
        >
          Toggle Navigation
        </BoldTypeAsButton>
        <BrandingTypeAsAnchor
          href={KEVALA_DESIGN_LINK}
          label={KEVALA_DESIGN_LINK}
          color="text-charcoal"
          tw="absolute bottom-8 right-8"
        >
          KD.
        </BrandingTypeAsAnchor>
        <animated.div style={springProps} tw="absolute w-full">
          <FlexRowWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full">
            <FlexRowWrapper
              alignItems="items-start"
              justifyContent="justify-center"
              tw="py-4 px-8 md:px-32 w-full max-w-sm md:max-w-screen-md"
            >
              <Header disableToggle={layoutWidth >= SCREEN_SIZE.MD} />
            </FlexRowWrapper>
          </FlexRowWrapper>
        </animated.div>
      </FlexRowWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;

export const pageQuery = graphql`
  query HomePageQuery {
    metaImage: contentfulAsset(title: { eq: "Home Page Meta Image" }) {
      fixed(width: 3360, resizingBehavior: SCALE) {
        ...GatsbyContentfulFixed
      }
    }
  }
`;
