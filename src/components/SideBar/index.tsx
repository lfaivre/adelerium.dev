import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { WelcomeNavigation } from '../Shared/WelcomeNavigation';

// @todo: Refactor TypeScript, patched in for now
import { getStrippedInternalLinkPath } from '../../utils/strings';
import { SiteData } from '../../data/site';
import { SideBarView as SBV } from '../../types/presentation';

import { GraphQLStaticQuery } from './types';
import {
  SideBarWrapper,
  ProfileWrapper,
  ProfileImageWrapper,
  ProfileImage,
  ProfileTextWrapper,
  ProfileName,
  ProfileTag,
  ResponsiveWelcomeNavigationWrapper,
  BrandingWrapper,
  Branding,
  LinkSectionWrapper,
  ExternalLink,
  InternaLink,
  ViewButtonsWrapper,
  LineWrapper,
  Line,
  ButtonsWrapper,
  ViewButton,
} from './styles';

export const SideBar = (): JSX.Element => {
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
    <SideBarWrapper>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage fluid={profilePicture.fluid} />
        </ProfileImageWrapper>
        <ProfileTextWrapper>
          <ProfileName>{name}</ProfileName>
          <ProfileTag>{tag}</ProfileTag>
        </ProfileTextWrapper>
      </ProfileWrapper>
      <ResponsiveWelcomeNavigationWrapper>
        <WelcomeNavigation />
      </ResponsiveWelcomeNavigationWrapper>
      {sideBarView === SBV.InternalLinks ? (
        <LinkSectionWrapper>
          {internalLinks.map((link) => (
            <InternaLink to={getStrippedInternalLinkPath(link.destination)} key={link.title}>
              {link.displayText}
            </InternaLink>
          ))}
        </LinkSectionWrapper>
      ) : (
        <LinkSectionWrapper>
          {externalLinks.map((link) => (
            <ExternalLink
              href={link.destination}
              target="_blank"
              rel="noopener noreferrer"
              label={link.destination}
              key={link.title}
            >
              {link.displayText}
            </ExternalLink>
          ))}
          <ExternalLink
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            label={`mailto:${email}`}
            key="Email"
          >
            Email
          </ExternalLink>
        </LinkSectionWrapper>
      )}
      <ViewButtonsWrapper>
        <LineWrapper>
          <Line />
          <Line />
        </LineWrapper>
        <ButtonsWrapper>
          <ViewButton
            onClick={() => setSideBarView(SBV.InternalLinks)}
            selected={sideBarView === SBV.InternalLinks}
          >
            01.
          </ViewButton>
          <ViewButton
            onClick={() => setSideBarView(SBV.ExternalLinks)}
            selected={sideBarView === SBV.ExternalLinks}
          >
            02.
          </ViewButton>
        </ButtonsWrapper>
      </ViewButtonsWrapper>
      <BrandingWrapper>
        <Branding
          href={brandingLink.destination}
          target="_blank"
          rel="noopener noreferrer"
          label={brandingLink.destination}
        >
          KD.
        </Branding>
      </BrandingWrapper>
    </SideBarWrapper>
  );
};
