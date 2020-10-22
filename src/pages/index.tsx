import { Header } from '@adelerium/components/Global/Header';
import { SEO } from '@adelerium/components/Global/SEO';
import { Camera, WavyImage } from '@adelerium/components/HomePage/WavyImage';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { studioUrl } from '@adelerium/constants/site-metadata';
import { useHomePageQueryData } from '@adelerium/graphql/useHomePageQueryData';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { useDimensions } from '@adelerium/hooks/useDimensions';
import { BoldTypeAsButton, BrandingType } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import { PageProps } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, Suspense, useLayoutEffect, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Canvas } from 'react-three-fiber';
import tw, { css } from 'twin.macro';

const AnimatedFlexRowWrapper = animated(FlexRowWrapper);

const staticToggleText = `Toggle Navigation (T)`;
const staticStudioLogoText = `KD.`;

const IndexPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage, brandingLink } = useHomePageQueryData();

  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
    dimensions: {
      layout: { width: layoutWidth },
    },
    theme: { colors },
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

  return (
    <>
      <SEO title="Home" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-center" tw="relative w-full h-screen">
        <Canvas>
          <Camera position={[0, 0, 1]} />
          <Suspense fallback={null}>
            <WavyImage />
          </Suspense>
        </Canvas>
        <BoldTypeAsButton
          ref={buttonRef}
          onClick={() => dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: !sideBarIsVisible } } })}
          color={colors.secondary.default}
          textAlign="text-center"
          css={[
            css`
              left: ${-(sideBarToggleWidth / 2) + 32}px;
            `,
            tw`hidden md:block absolute transform -rotate-90 z-10 focus:outline-none px-2 py-1 uppercase text-xs`,
          ]}
        >
          {staticToggleText}
        </BoldTypeAsButton>
        <OutboundLink
          href={brandingLink?.destination || studioUrl}
          label={brandingLink?.destination || studioUrl}
          target="_blank"
          rel="noopener noreferrer"
          tw="absolute bottom-8 right-8"
        >
          <BrandingType color={colors.secondary.default} defaultFontSize>
            {staticStudioLogoText}
          </BrandingType>
        </OutboundLink>
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-center" tw="absolute w-full">
          <AnimatedFlexRowWrapper
            style={springProps}
            alignItems="items-start"
            justifyContent="justify-center"
            tw="py-4 px-8 md:px-32 w-full max-w-sm md:max-w-screen-md"
          >
            <Header disableToggle={layoutWidth >= windowDimensionBreakpoints.width.md} />
          </AnimatedFlexRowWrapper>
        </FlexRowWrapper>
      </FlexRowWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
