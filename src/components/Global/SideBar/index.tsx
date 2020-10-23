import { ContextSwitchButton } from '@adelerium/components/Global/SideBar/ContextSwitchButton';
import { Line } from '@adelerium/components/Global/SideBar/styles';
import { SideBarView } from '@adelerium/components/Global/SideBar/types';
import { useSideBarQueryData } from '@adelerium/components/Global/SideBar/useSideBarQueryData';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { ExternalLinks, InternalLinks } from '@adelerium/constants/presentation';
import { profileName, profileTag, studioUrl, websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { usePathData } from '@adelerium/hooks/usePathData';
import { BoldParagraphType, BoldType, BrandingType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { getStrippedInternalLinkPath } from '@adelerium/utils/strings';
import { Link, navigate } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { MouseEvent, ReactElement, useState } from 'react';
import tw, { css } from 'twin.macro';

const staticStudioLogoText = `KD.`;
const contextSwitchButton1Text = `01.`;
const contextSwitchButton2Text = `02.`;

/** @todo Break into smaller, more reusable components */

export const SideBar = (): ReactElement => {
  const { sideBarData, profileBackgroundImage, brandingLink } = useSideBarQueryData();

  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
    dimensions: {
      appWindow: { height: windowHeight },
    },
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();
  const pathData = usePathData();

  const [sideBarView, setSideBarView] = useState<SideBarView>(InternalLinks);

  const handlePageTransition = async (event: MouseEvent, to: string): Promise<void> => {
    event.preventDefault();
    dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: true } } });
    await navigate(to);
  };

  return (
    <FlexColumnWrapper
      alignItems="items-center"
      justifyContent="justify-start"
      backgroundColor={colors.secondary.default}
      tw="p-8 w-full h-full"
    >
      {windowHeight >= windowDimensionBreakpoints.height.selected_2 && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="pt-8 mb-8 w-full">
          <FlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-center"
            css={[
              css`
                background: url(${profileBackgroundImage?.childImageSharp?.fluid?.src}) no-repeat center;
              `,
              tw`mb-4 rounded-full w-40 h-40 md:w-48 md:h-48`,
            ]}
          >
            <Img
              fluid={sideBarData?.profilePicture?.fluid as FluidObject | FluidObject[]}
              loading="eager"
              alt="Profile Picture"
              draggable={false}
              tw="rounded-full w-32 h-32 md:w-40 md:h-40 select-none"
            />
          </FlexRowWrapper>
          <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full">
            <BoldParagraphType
              color={colors.primary.default}
              textAlign="text-center"
              tw="mb-2 w-full lowercase text-2xl"
            >
              {profileName}
            </BoldParagraphType>
            <BoldType color={colors.primary.default} textAlign="text-center" tw="w-full uppercase text-xs">
              {profileTag}
            </BoldType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      )}

      <FlexColumnWrapper
        alignItems="items-center"
        justifyContent="justify-start"
        tw="flex-grow mb-8 w-full overflow-y-scroll"
      >
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-center" tw="my-auto w-full">
          {sideBarView === InternalLinks ? (
            <>
              {(sideBarData?.internalLinks || []).map((link) => (
                <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full" key={link?.id}>
                  <span
                    css={[
                      tw`flex-none mr-1/2 w-1 h-full`,
                      sideBarIsVisible &&
                        link?.displayText === pathData.pathData?.text &&
                        css`
                          background-color: ${colors.primary.default};
                        `,
                    ]}
                  />
                  <Link
                    to={getStrippedInternalLinkPath(link?.destination || ``)}
                    onClick={(e) => handlePageTransition(e, getStrippedInternalLinkPath(link?.destination || ``))}
                    tw="flex-grow"
                  >
                    <BoldType
                      color={
                        sideBarIsVisible && link?.displayText === pathData.pathData?.text
                          ? colors.secondary.default
                          : colors.primary.default
                      }
                      defaultFontSize
                      css={[
                        sideBarIsVisible &&
                          link?.displayText === pathData.pathData?.text &&
                          css`
                            background-color: ${colors.primary.default};
                          `,
                        tw`p-2 pt-3 w-full uppercase`,
                      ]}
                    >
                      {link?.displayText}
                    </BoldType>
                  </Link>
                </FlexRowWrapper>
              ))}
            </>
          ) : (
            <>
              {(sideBarData?.externalLinks || []).map((link) => (
                <OutboundLink
                  href={link?.destination || websiteFullPath}
                  label={link?.destination || websiteFullPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link?.id}
                  tw="w-full"
                >
                  <BoldType color={colors.primary.default} tw="p-2 pt-3 w-full uppercase" defaultFontSize>
                    {link?.displayText}
                  </BoldType>
                </OutboundLink>
              ))}
            </>
          )}
        </FlexColumnWrapper>
      </FlexColumnWrapper>

      {windowHeight > windowDimensionBreakpoints.height.selected_1 && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="mb-8 w-full">
          <Line borderColor={colors.primary.default} />
          <Line borderColor={colors.primary.default} />
        </FlexColumnWrapper>
      )}

      <FlexRowWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-shrink-0 w-full">
        <ContextSwitchButton
          type={InternalLinks}
          currentView={sideBarView}
          setView={setSideBarView}
          text={contextSwitchButton1Text}
        />
        <ContextSwitchButton
          type={ExternalLinks}
          currentView={sideBarView}
          setView={setSideBarView}
          text={contextSwitchButton2Text}
        />
      </FlexRowWrapper>

      {windowHeight >= windowDimensionBreakpoints.height.selected_2 && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="mt-8 w-full">
          <OutboundLink
            href={brandingLink?.destination || studioUrl}
            label={brandingLink?.destination || studioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandingType color={colors.primary.default} defaultFontSize>
              {staticStudioLogoText}
            </BrandingType>
          </OutboundLink>
        </FlexColumnWrapper>
      )}
    </FlexColumnWrapper>
  );
};
