import React, { ReactElement, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import tw, { css } from 'twin.macro';

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
import { FlexColumnWrapper, FlexRowWrapper } from '../../../../../shared/styles/wrappers';

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
      profileBackgroundImage: file(relativePath: { eq: "profile-background.png" }) {
        childImageSharp {
          fluid(maxWidth: 192, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      contentfulSideBar: contentfulSideBar(title: { eq: "Default" }) {
        profilePicture {
          fluid(maxWidth: 320, resizingBehavior: SCALE, quality: 100) {
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

  const profileBackgroundImage = sideBarQuery.profileBackgroundImage.childImageSharp.fluid;

  const backgroundImageStyles = css`
    background: var(--color-OffWhite) url(${profileBackgroundImage.src}) no-repeat center;
  `;

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
            <FlexRowWrapper
              alignItems="items-center"
              justifyContent="justify-center"
              css={[tw`mb-4 rounded-full w-40 h-40 md:w-48 md:h-48`, backgroundImageStyles]}
            >
              <Img
                fluid={profilePicture.fluid}
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
              <BoldType
                color="text-charcoal"
                textAlign="text-center"
                tw="w-full uppercase text-xs md:text-xs"
              >
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
                        tw`mr-1/2 w-1 h-full`,
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
                        tw`flex-grow p-2 pt-3 uppercase`,
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
                    tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase"
                  >
                    {link.displayText}
                  </BoldTypeAsAnchor>
                ))}
                <BoldTypeAsAnchor
                  href={`mailto:${email}`}
                  label={`mailto:${email}`}
                  key="Email"
                  color="text-charcoal"
                  tw="transition-colors duration-200 ease-in-out hover:bg-charcoal p-2 pt-3 w-full hover:text-offwhite uppercase"
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
            strokeColor={sideBarView === SBV.InternalLinks ? `text-offwhite` : `text-charcoal`}
            aria-label="Internal Links"
          >
            <AccentType
              color={sideBarView === SBV.InternalLinks ? `text-charcoal` : `text-transparent`}
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
            strokeColor={sideBarView === SBV.ExternalLinks ? `text-offwhite` : `text-charcoal`}
            aria-label="External Links"
          >
            <AccentType
              color={sideBarView === SBV.ExternalLinks ? `text-charcoal` : `text-transparent`}
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
            >
              KD.
            </BrandingTypeAsAnchor>
          </FlexColumnWrapper>
        )}
      </FlexColumnWrapper>
    </FlexRowWrapper>
  );
};
