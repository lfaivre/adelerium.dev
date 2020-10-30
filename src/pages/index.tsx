import { SEO } from '@adelerium/components/Global/SEO';
import { studioUrl } from '@adelerium/constants/site-metadata';
import { useHomePageQueryData } from '@adelerium/graphql/useHomePageQueryData';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { useDimensions } from '@adelerium/hooks/useDimensions';
import Accent from '@adelerium/images/home-page-accent.inline.svg';
import '@adelerium/styles/other/spin.css';
import { BoldTypeAsButton, BrandingType } from '@adelerium/styles/text';
import { MinHeightScreenWrapper } from '@adelerium/styles/wrappers';
import { PageProps } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useLayoutEffect, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedBoldTypeAsButton = animated(BoldTypeAsButton);
const AnimatedAccent = animated(Accent);

const staticToggleText = `Toggle Navigation (T)`;
const staticStudioLogoText = `KD.`;

const IndexPage = ({ location: { pathname } }: PageProps): ReactElement => {
  const { metaImage, brandingLink, wavesBackgroundImage } = useHomePageQueryData();

  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
    dimensions: {
      navigationCollection: { height: navigationCollectionHeight },
    },
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();

  const buttonRef = useRef(null);
  const { width: sideBarToggleWidth } = useDimensions({ ref: buttonRef });

  useLayoutEffect(() => {
    dispatch({
      type: SET_VIEW,
      payload: { header: { isVisible: true }, footer: { isVisible: false }, returnButton: { isVisible: false } },
    });

    return () => {
      dispatch({
        type: SET_VIEW,
        payload: { header: { isVisible: true }, footer: { isVisible: true }, returnButton: { isVisible: true } },
      });
    };
  }, [dispatch]);

  const navigationToggleSpringStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: sideBarToggleWidth !== 0 ? 1 : 0 },
    config: config.molasses,
  });

  return (
    <>
      <SEO title="Home" pathname={pathname} image={metaImage?.fixed as FixedObject} />
      <MinHeightScreenWrapper
        minHeight={navigationCollectionHeight}
        backgroundColor={colors.primary.default}
        css={[
          css`
            height: calc(100vh - ${navigationCollectionHeight}px);
          `,
          tw`relative flex flex-col justify-start items-center w-full`,
        ]}
      >
        <div
          css={[
            css`
              top: calc(50% - ${(202 + 16) / 2}px);
              border-color: ${colors.secondary.default};
              background-color: ${colors.primary.default};
            `,
            tw`absolute z-10 border rounded-full p-2`,
          ]}
        >
          <AnimatedAccent className="spin" />
        </div>
        <hr
          css={[
            css`
              top: 50%;
              border-color: ${colors.secondary.default};
            `,
            tw`absolute w-full`,
          ]}
        />
        <div
          css={[
            css`
              height: 50%;
            `,
            tw`relative pb-2 md:pb-4 w-full`,
          ]}
        >
          <AnimatedBoldTypeAsButton
            ref={buttonRef}
            onClick={() => dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: !sideBarIsVisible } } })}
            color={colors.secondary.default}
            textAlign="text-center"
            style={navigationToggleSpringStyles}
            css={[
              css`
                top: 50%;
                left: ${-(sideBarToggleWidth / 2) + 32}px;
              `,
              tw`hidden md:block absolute transform -rotate-90 z-10 focus:outline-none px-2 py-1 uppercase text-xs`,
            ]}
          >
            {staticToggleText}
          </AnimatedBoldTypeAsButton>
        </div>
        <div
          css={[
            css`
              height: 50%;
            `,
            tw`pt-2 md:pt-4 w-full overflow-hidden`,
          ]}
        >
          <Img
            fluid={wavesBackgroundImage?.childImageSharp?.fluid as FluidObject | FluidObject[]}
            loading="eager"
            draggable={false}
            alt=""
            tw="flex-grow h-full select-none"
          />
        </div>
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
      </MinHeightScreenWrapper>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default IndexPage;
