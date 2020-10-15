import Img, { FluidObject } from 'gatsby-image';
import React, { ReactElement, useState } from 'react';
import tw, { css } from 'twin.macro';
import { useSideBarQueryData } from '../../../../../graphql/queries/useSideBarQueryData';
import { SiteData } from '../../../../../shared/constants/contentful-mock';
import { useAppState } from '../../../../../shared/hooks/app-state';
import { usePathData } from '../../../../../shared/hooks/usePathData';
import {
  AccentType,
  BoldParagraphType,
  BoldType,
  BoldTypeAsAnchor,
  BoldTypeAsGatsbyLink,
  BrandingTypeAsAnchor,
} from '../../../../../shared/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '../../../../../shared/styles/wrappers';
import { SideBarView } from '../../../../../shared/types/presentation';
import { getStrippedInternalLinkPath } from '../../../../../utils/strings';
import { Line, ViewButton } from './styles';

// @todo Move to and export from shared file
const IPHONE_X_LANDSCAPE_HEIGHT = 667;
const IPHONE_5_LANDSCAPE_HEIGHT = 320;
const { name, tag } = SiteData.profile;
const linkOnError = `https://github.com/lfaivre`;
const brandingLinkOnError = `https://www.kevaladesign.com`;
const emailOnError = `lorenzo.faivre@gmail.com`;

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
  const [sideBarView, setSideBarView] = useState(SideBarView.InternalLinks);

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
      {windowHeight >= IPHONE_X_LANDSCAPE_HEIGHT && (
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
              {name}
            </BoldParagraphType>
            <BoldType color="text-charcoal" textAlign="text-center" tw="w-full uppercase text-xs md:text-xs">
              {tag}
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
          {sideBarView === SideBarView.InternalLinks ? (
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
                  href={link?.destination || linkOnError}
                  label={link?.destination || linkOnError}
                  key={link?.id}
                  color="text-charcoal"
                  tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase"
                >
                  {link?.displayText}
                </BoldTypeAsAnchor>
              ))}
              <BoldTypeAsAnchor
                href={`mailto:${email?.destination || emailOnError}`}
                label={`mailto:${email?.destination || emailOnError}`}
                color="text-charcoal"
                tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase"
              >
                {email?.displayText}
              </BoldTypeAsAnchor>
            </>
          )}
        </FlexColumnWrapper>
      </FlexColumnWrapper>

      {windowHeight > IPHONE_5_LANDSCAPE_HEIGHT && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="mb-8 w-full">
          <Line borderColor="border-charcoal" />
          <Line borderColor="border-charcoal" />
        </FlexColumnWrapper>
      )}

      <FlexRowWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-shrink-0 w-full">
        <ViewButton
          onClick={() => setSideBarView(SideBarView.InternalLinks)}
          selected={sideBarView === SideBarView.InternalLinks}
          backgroundColor={sideBarView === SideBarView.InternalLinks ? `bg-charcoal` : `bg-transparent`}
          strokeColor={sideBarView === SideBarView.InternalLinks ? `text-offwhite` : `text-charcoal`}
          aria-label="Internal Links"
        >
          <AccentType
            color={sideBarView === SideBarView.InternalLinks ? `text-charcoal` : `text-transparent`}
            textAlign="text-center"
            tw="text-4xl"
          >
            01.
          </AccentType>
        </ViewButton>
        <ViewButton
          onClick={() => setSideBarView(SideBarView.ExternalLinks)}
          selected={sideBarView === SideBarView.ExternalLinks}
          backgroundColor={sideBarView === SideBarView.ExternalLinks ? `bg-charcoal` : `bg-transparent`}
          strokeColor={sideBarView === SideBarView.ExternalLinks ? `text-offwhite` : `text-charcoal`}
          aria-label="External Links"
        >
          <AccentType
            color={sideBarView === SideBarView.ExternalLinks ? `text-charcoal` : `text-transparent`}
            textAlign="text-center"
            tw="text-4xl"
          >
            02.
          </AccentType>
        </ViewButton>
      </FlexRowWrapper>

      {windowHeight >= IPHONE_X_LANDSCAPE_HEIGHT && (
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="mt-8 w-full">
          <BrandingTypeAsAnchor
            href={brandingLink?.destination || brandingLinkOnError}
            label={brandingLink?.destination || brandingLinkOnError}
            color="text-charcoal"
          >
            KD.
          </BrandingTypeAsAnchor>
        </FlexColumnWrapper>
      )}
    </FlexColumnWrapper>
  );
};
