import { Header } from '@adelerium/components/Global/Header';
import { SEO } from '@adelerium/components/Global/SEO';
import { Camera, WavyImage } from '@adelerium/components/HomePage/WavyImage';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useHomePageQueryData } from '@adelerium/graphql/useHomePageQueryData';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { useDimensions } from '@adelerium/hooks/useDimensions';
import { BoldTypeAsButton, BrandingTypeAsAnchor } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Canvas } from 'react-three-fiber';
import tw, { css } from 'twin.macro';

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

  const springProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: config.molasses,
  });

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
        backgroundColor="bg-charcoal"
        tw="relative w-full h-screen"
      >
        <Canvas>
          <Camera position={[0, 0, 1]} />
          <WavyImage />
        </Canvas>
        <BoldTypeAsButton
          ref={buttonRef}
          onClick={() => dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: !sideBarIsVisible } } })}
          color="text-offwhite"
          textAlign="text-center"
          css={[
            tw`hidden md:block absolute transform -rotate-90 z-10 focus:outline-none px-2 py-1 text-xs md:text-xs uppercase`,
            positionLeftStyles,
          ]}
        >
          Toggle Navigation (T)
        </BoldTypeAsButton>
        <BrandingTypeAsAnchor
          href={brandingLink?.destination || websiteFullPath}
          label={brandingLink?.destination || websiteFullPath}
          color="text-offwhite"
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
              <Header disableToggle={layoutWidth >= windowDimensionBreakpoints.width.md} />
            </FlexRowWrapper>
          </FlexRowWrapper>
        </animated.div>
      </FlexRowWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
