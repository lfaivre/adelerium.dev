import { ContextSwitchButton } from '@adelerium/components/Global/SideBar/ContextSwitchButton';
import { NavigationLink } from '@adelerium/components/Global/SideBar/NavigationLink';
import { Line } from '@adelerium/components/Global/SideBar/styles';
import { SideBarView } from '@adelerium/components/Global/SideBar/types';
import { useSideBarQueryData } from '@adelerium/components/Global/SideBar/useSideBarQueryData';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { ExternalLinks, InternalLinks } from '@adelerium/constants/presentation';
import { profileName, profileTag, studioUrl } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { BoldParagraphType, BoldType, BrandingType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import Img, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useMemo, useState } from 'react';
import tw, { css } from 'twin.macro';

const staticStudioLogoText = `KD.`;

export const SideBar = (): ReactElement => {
  const { sideBarData, brandingLink } = useSideBarQueryData();

  const {
    dimensions: {
      appWindow: { height: windowHeight },
    },
    theme: { colors },
  } = useAppState();

  const [sideBarView, setSideBarView] = useState<SideBarView>(InternalLinks);

  const navigationLinks = useMemo(
    () =>
      ((sideBarView === InternalLinks ? sideBarData?.internalLinks : sideBarData?.externalLinks) || []).map(
        (link) => link && <NavigationLink type={sideBarView} data={link} key={link.id} />
      ),
    [sideBarData?.externalLinks, sideBarData?.internalLinks, sideBarView]
  );

  const contextSwitchButtons = useMemo(
    () =>
      ([InternalLinks, ExternalLinks] as SideBarView[]).map((type, index) => (
        <ContextSwitchButton
          type={type}
          currentView={sideBarView}
          setView={setSideBarView}
          text={`0${index + 1}.`}
          key={type}
        />
      )),
    [sideBarView]
  );

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
                background-color: ${colors.primary.default};
              `,
              tw`mb-4 rounded-full w-40 h-40 md:w-48 md:h-48`,
            ]}
          >
            <Img
              fluid={sideBarData?.profilePicture?.fluid as FluidObject | FluidObject[]}
              loading="eager"
              fadeIn={false}
              draggable={false}
              alt="Profile Picture"
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
          {navigationLinks}
        </FlexColumnWrapper>
      </FlexColumnWrapper>

      {windowHeight > windowDimensionBreakpoints.height.selected_1 && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="mb-8 w-full">
          <Line borderColor={colors.primary.default} />
          <Line borderColor={colors.primary.default} />
        </FlexColumnWrapper>
      )}

      <FlexRowWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-shrink-0 w-full">
        {contextSwitchButtons}
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
