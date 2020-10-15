import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';
import { Header } from '../components/Global/Layout/DefaultView/Header';
import { SEO } from '../components/Global/SEO';
import { KoiPond } from '../components/HomePage/KoiPond';
import { useHomePageQueryData } from '../graphql/queries/useHomePageQueryData';
import { SCREEN_SIZE } from '../shared/constants/presentation';
import { useAppDispatch, useAppState } from '../shared/hooks/app-state';
import { useDimensions } from '../shared/hooks/useDimensions';
import { BoldTypeAsButton, BrandingTypeAsAnchor } from '../shared/styles/text';
import { FlexRowWrapper } from '../shared/styles/wrappers';
import { SET_VIEW } from '../shared/types/state';

const CSS_OFFSET_PATH = `offset-path: path('M11.7692 229.5C14.552 200.052 7.51901 171.858 -42.8757 170.644C-105.869 169.128 -131.294 76.612 -101.695 51.5872C-72.0955 26.5625 -24.6607 -50.7867 70.5883 51.5872C165.837 153.961 27.7073 131.211 33.0199 183.157C38.3326 235.102 90.3211 195.669 139.274 223.727C188.226 251.785 207.959 299.56 139.274 316.243C70.5883 332.926 41.3685 398.9 81.9726 419.754C122.577 440.608 222 478.524 222 419.754C222 372.738 222 242.432 222 183.157C219.091 129.948 175.78 30.8091 25.8099 59.9288C-161.652 96.3284 -30.3529 119.837 25.8099 141.07C81.9726 162.303 171.529 204.769 126.751 260.506C81.9726 316.243 101.326 362.501 139.274 373.496C177.222 384.492 170.012 464.495 70.5883 462.979C-28.835 461.462 -42.8757 393.015 -42.8757 373.496C-42.8757 238.288 11.7692 293 11.7692 240.506C11.7692 208.05 11.7692 237.336 11.7692 229.5Z')`;

const linkDestinationOnError = `https://github.com/lfaivre`;

const IndexPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage, brandingLink } = useHomePageQueryData();

  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
    dimensions: {
      layout: { width: layoutWidth },
    },
  } = useAppState();

  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch({
      type: SET_VIEW,
      payload: { header: { isVisible: false }, footer: { isVisible: false }, returnButton: { isVisible: false } },
    });

    return () => {
      dispatch({
        type: SET_VIEW,
        payload: { header: { isVisible: true }, footer: { isVisible: true }, returnButton: { isVisible: true } },
      });
    };
  }, [dispatch]);

  const [browserSupportsAnimation, setBrowserSupportsAnimation] = useState<boolean>(true);

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
  const { width: sideBarToggleWidth } = useDimensions({ ref: buttonRef });

  const positionLeftStyles = css`
    left: ${-(sideBarToggleWidth / 2) + 32}px;
  `;

  return (
    <>
      <SEO title="Home" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <FlexRowWrapper
        alignItems="items-center"
        justifyContent="justify-center"
        backgroundColor="bg-offwhite"
        tw="relative w-full h-screen"
      >
        {browserSupportsAnimation && <KoiPond />}
        <BoldTypeAsButton
          ref={buttonRef}
          onClick={() => dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: !sideBarIsVisible } } })}
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
          href={brandingLink?.destination || linkDestinationOnError}
          label={brandingLink?.destination || linkDestinationOnError}
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
