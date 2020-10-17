import { Line, ViewButton } from '@adelerium/components/Global/SideBar/styles';
import { useSideBarQueryData } from '@adelerium/components/Global/SideBar/useSideBarQueryData';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { ExternalLinks, InternalLinks } from '@adelerium/constants/presentation';
import { profileEmail, profileName, profileTag, studioUrl, websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { usePathData } from '@adelerium/hooks/usePathData';
import {
  AccentType,
  BoldParagraphType,
  BoldType,
  BoldTypeAsAnchor,
  BoldTypeAsGatsbyLink,
  BrandingTypeAsAnchor,
} from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { getStrippedInternalLinkPath } from '@adelerium/utils/strings';
import Img, { FluidObject } from 'gatsby-image';
import React, { ReactElement, useState } from 'react';
import tw, { css } from 'twin.macro';

// @todo Break into smaller, more reusable components

export const SideBar = (): ReactElement => {
  const { sideBarData, profileBackgroundImage, brandingLink, email } = useSideBarQueryData();

  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
    dimensions: {
      appWindow: { height: windowHeight },
    },
  } = useAppState();
  const pathData = usePathData();
  const [sideBarView, setSideBarView] = useState(InternalLinks);

  const backgroundImageStyles = css`
    background: var(--color-OffWhite) url(${profileBackgroundImage?.childImageSharp?.fluid?.src}) no-repeat center;
  `;

  return (
    <FlexColumnWrapper
      alignItems="items-center"
      justifyContent="justify-start"
      backgroundColor="bg-offwhite"
      tw="p-8 w-full h-full"
    >
      {windowHeight >= windowDimensionBreakpoints.height.selected_2 && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="pt-8 mb-8 w-full">
          <FlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-center"
            css={[tw`mb-4 rounded-full w-40 h-40 md:w-48 md:h-48`, backgroundImageStyles]}
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
              color="text-charcoal"
              textAlign="text-center"
              tw="mb-2 w-full text-2xl md:text-2xl lowercase"
            >
              {profileName}
            </BoldParagraphType>
            <BoldType color="text-charcoal" textAlign="text-center" tw="w-full uppercase text-xs md:text-xs">
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
                      tw`mr-1/2 w-1 h-full`,
                      sideBarIsVisible && link?.displayText === pathData.pathData?.text && tw`bg-charcoal`,
                    ]}
                  />
                  <BoldTypeAsGatsbyLink
                    to={getStrippedInternalLinkPath(link?.destination || ``)}
                    color={
                      sideBarIsVisible && link?.displayText === pathData.pathData?.text
                        ? `text-offwhite`
                        : `text-charcoal`
                    }
                    css={[
                      tw`flex-grow p-2 pt-3 uppercase`,
                      sideBarIsVisible && link?.displayText === pathData.pathData?.text && tw`bg-charcoal`,
                    ]}
                  >
                    {link?.displayText}
                  </BoldTypeAsGatsbyLink>
                </FlexRowWrapper>
              ))}
            </>
          ) : (
            <>
              {(sideBarData?.externalLinks || []).map((link) => (
                <BoldTypeAsAnchor
                  href={link?.destination || websiteFullPath}
                  label={link?.destination || websiteFullPath}
                  key={link?.id}
                  color="text-charcoal"
                  tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase"
                >
                  {link?.displayText}
                </BoldTypeAsAnchor>
              ))}
              <BoldTypeAsAnchor
                href={`mailto:${email?.destination || profileEmail}`}
                label={`mailto:${email?.destination || profileEmail}`}
                color="text-charcoal"
                tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase"
              >
                {email?.displayText}
              </BoldTypeAsAnchor>
            </>
          )}
        </FlexColumnWrapper>
      </FlexColumnWrapper>

      {windowHeight > windowDimensionBreakpoints.height.selected_1 && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="mb-8 w-full">
          <Line borderColor="border-charcoal" />
          <Line borderColor="border-charcoal" />
        </FlexColumnWrapper>
      )}

      <FlexRowWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-shrink-0 w-full">
        <ViewButton
          onClick={() => setSideBarView(InternalLinks)}
          selected={sideBarView === InternalLinks}
          backgroundColor={sideBarView === InternalLinks ? `bg-charcoal` : `bg-transparent`}
          strokeColor={sideBarView === InternalLinks ? `text-offwhite` : `text-charcoal`}
          aria-label="Internal Links"
        >
          <AccentType
            color={sideBarView === InternalLinks ? `text-charcoal` : `text-transparent`}
            textAlign="text-center"
            tw="text-4xl"
          >
            01.
          </AccentType>
        </ViewButton>
        <ViewButton
          onClick={() => setSideBarView(ExternalLinks)}
          selected={sideBarView === ExternalLinks}
          backgroundColor={sideBarView === ExternalLinks ? `bg-charcoal` : `bg-transparent`}
          strokeColor={sideBarView === ExternalLinks ? `text-offwhite` : `text-charcoal`}
          aria-label="External Links"
        >
          <AccentType
            color={sideBarView === ExternalLinks ? `text-charcoal` : `text-transparent`}
            textAlign="text-center"
            tw="text-4xl"
          >
            02.
          </AccentType>
        </ViewButton>
      </FlexRowWrapper>

      {windowHeight >= windowDimensionBreakpoints.height.selected_2 && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="mt-8 w-full">
          <BrandingTypeAsAnchor
            href={brandingLink?.destination || studioUrl}
            label={brandingLink?.destination || studioUrl}
            color="text-charcoal"
          >
            KD.
          </BrandingTypeAsAnchor>
        </FlexColumnWrapper>
      )}
    </FlexColumnWrapper>
  );
};
