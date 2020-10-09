import React, { ReactElement, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import tw from 'twin.macro';

// @todo: Refactor TypeScript, patched in for now
import { useAppState } from '../../../../../shared/hooks/global-state';
import { usePathData } from '../../../../../shared/hooks/location';
import { getStrippedInternalLinkPath } from '../../../../../services/strings';
import { SiteData } from '../../../../../shared/constants/contentful-mock';
import { SideBarView as SBV } from '../../../../../shared/types/presentation';

import {
  BoldParagraphType,
  BoldType,
  BoldTypeAsAnchor,
  BoldTypeAsGatsbyLink,
  BrandingTypeAsAnchor,
  AccentType,
} from '../../../../../shared/styles/text';
import {
  DefaultWrapper,
  FlexColumnWrapper,
  FlexRowWrapper,
} from '../../../../../shared/styles/wrappers';

import { Line, ViewButton } from './styles';

import { GraphQLStaticQuery } from './types';

// @todo Move to shared file
const IPHONE_X_LANDSCAPE_HEIGHT = 667;
const IPHONE_5_LANDSCAPE_HEIGHT = 320;

// @todo Break into smaller, more reusable components

export const SideBar = (): ReactElement => {
  const { sideBarIsVisible, windowHeight } = useAppState();
  const pathData = usePathData();
  const [sideBarView, setSideBarView] = useState(SBV.InternalLinks);

  const sideBarQuery: GraphQLStaticQuery = useStaticQuery(graphql`
    query {
      contentfulSideBar: contentfulSideBar(title: { eq: "Default" }) {
        profilePicture {
          fluid(maxWidth: 320, resizingBehavior: SCALE) {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
        internalLinks {
          title
          type
          destination
          displayText
        }
        externalLinks {
          title
          type
          destination
          displayText
        }
        email
        brandingLink {
          destination
        }
      }
    }
  `);

  const { name, tag } = SiteData.profile;

  const {
    profilePicture,
    internalLinks,
    externalLinks,
    email,
    brandingLink,
  } = sideBarQuery.contentfulSideBar;

  return (
    <FlexRowWrapper
      alignItems="items-center"
      justifyContent="justify-center"
      backgroundColor="bg-offwhite"
      tw="border-r-2 border-charcoal w-full h-full"
    >
      <FlexColumnWrapper
        alignItems="items-center"
        justifyContent="justify-start"
        tw="p-8 w-full h-full max-h-global"
      >
        {windowHeight >= IPHONE_X_LANDSCAPE_HEIGHT && (
          <FlexColumnWrapper
            alignItems="items-center"
            justifyContent="justify-start"
            tw="pt-8 mb-8 w-full"
          >
            <DefaultWrapper tw="mb-4 rounded-full p-2 sm:p-4 w-32 h-32 sm:w-48 sm:h-48">
              <Img
                fluid={profilePicture.fluid}
                alt="Profile Picture"
                draggable={false}
                tw="rounded-full w-full h-full object-cover object-center select-none"
              />
            </DefaultWrapper>
            <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full">
              <BoldParagraphType
                color="text-charcoal"
                textAlign="text-center"
                tw="mb-2 w-full text-2xl lowercase"
              >
                {name}
              </BoldParagraphType>
              <BoldType color="text-charcoal" textAlign="text-center" tw="w-full uppercase text-xs">
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
          <FlexColumnWrapper
            alignItems="items-center"
            justifyContent="justify-center"
            tw="my-auto w-full"
          >
            {sideBarView === SBV.InternalLinks ? (
              <>
                {internalLinks.map((link) => (
                  <FlexRowWrapper
                    alignItems="items-center"
                    justifyContent="justify-start"
                    tw="w-full"
                    key={link.title}
                  >
                    <span
                      css={[
                        tw`mr-1 w-1 h-full`,
                        sideBarIsVisible &&
                          link.displayText === pathData.pathData?.text &&
                          tw`bg-charcoal`,
                      ]}
                    />
                    <BoldTypeAsGatsbyLink
                      to={getStrippedInternalLinkPath(link.destination)}
                      color={
                        sideBarIsVisible && link.displayText === pathData.pathData?.text
                          ? `text-offwhite`
                          : `text-charcoal`
                      }
                      css={[
                        tw`flex-grow p-2 pt-3 uppercase text-base`,
                        sideBarIsVisible &&
                          link.displayText === pathData.pathData?.text &&
                          tw`bg-charcoal`,
                      ]}
                    >
                      {link.displayText}
                    </BoldTypeAsGatsbyLink>
                  </FlexRowWrapper>
                ))}
              </>
            ) : (
              <>
                {externalLinks.map((link) => (
                  <BoldTypeAsAnchor
                    href={link.destination}
                    label={link.destination}
                    key={link.title}
                    color="text-charcoal"
                    tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase text-base"
                  >
                    {link.displayText}
                  </BoldTypeAsAnchor>
                ))}
                <BoldTypeAsAnchor
                  href={`mailto:${email}`}
                  label={`mailto:${email}`}
                  key="Email"
                  color="text-charcoal"
                  tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase text-base"
                >
                  Email
                </BoldTypeAsAnchor>
              </>
            )}
          </FlexColumnWrapper>
        </FlexColumnWrapper>
        {windowHeight > IPHONE_5_LANDSCAPE_HEIGHT && (
          <FlexColumnWrapper
            alignItems="items-center"
            justifyContent="justify-start"
            tw="mb-8 w-full"
          >
            <Line borderColor="border-charcoal" />
            <Line borderColor="border-charcoal" />
          </FlexColumnWrapper>
        )}
        <FlexRowWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          tw="flex-shrink-0 w-full"
        >
          <ViewButton
            onClick={() => setSideBarView(SBV.InternalLinks)}
            selected={sideBarView === SBV.InternalLinks}
            backgroundColor={sideBarView === SBV.InternalLinks ? `bg-charcoal` : `bg-transparent`}
            strokeColor={sideBarView === SBV.InternalLinks ? `text-transparent` : `text-charcoal`}
            aria-label="Internal Links"
          >
            <AccentType
              color={sideBarView === SBV.InternalLinks ? `text-offwhite` : `text-transparent`}
              textAlign="text-center"
              tw="text-4xl"
            >
              01.
            </AccentType>
          </ViewButton>
          <ViewButton
            onClick={() => setSideBarView(SBV.ExternalLinks)}
            selected={sideBarView === SBV.ExternalLinks}
            backgroundColor={sideBarView === SBV.ExternalLinks ? `bg-charcoal` : `bg-transparent`}
            strokeColor={sideBarView === SBV.ExternalLinks ? `text-transparent` : `text-charcoal`}
            aria-label="External Links"
          >
            <AccentType
              color={sideBarView === SBV.ExternalLinks ? `text-offwhite` : `text-transparent`}
              textAlign="text-center"
              tw="text-4xl"
            >
              02.
            </AccentType>
          </ViewButton>
        </FlexRowWrapper>
        {windowHeight >= IPHONE_X_LANDSCAPE_HEIGHT && (
          <FlexColumnWrapper
            alignItems="items-center"
            justifyContent="justify-start"
            tw="mt-8 w-full"
          >
            <BrandingTypeAsAnchor
              href={brandingLink.destination}
              label={brandingLink.destination}
              color="text-charcoal"
              tw="text-2xl"
            >
              KD.
            </BrandingTypeAsAnchor>
          </FlexColumnWrapper>
        )}
      </FlexColumnWrapper>
    </FlexRowWrapper>
  );
};
