import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import WelcomeNavigation from "../Shared/WelcomeNavigation"

// TODO: REFACTOR TYPESCRIPT, PATCHED IN FOR NOW
import { SideBarData } from "./data"
import { SiteData } from "../../data/site"
import { SideBarView as SBV } from "../../types/presentation"

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
} from "./styles"

const SideBar = () => {
  const [sideBarView, setSideBarView] = useState(SBV.InternalLinks)

  const sideBarQuery = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile-375.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <SideBarWrapper>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage fluid={sideBarQuery.profile.childImageSharp.fluid} />
        </ProfileImageWrapper>
        <ProfileTextWrapper>
          <ProfileName>{SiteData.profile.name}</ProfileName>
          <ProfileTag>{SiteData.profile.tag}</ProfileTag>
        </ProfileTextWrapper>
      </ProfileWrapper>
      <ResponsiveWelcomeNavigationWrapper>
        <WelcomeNavigation />
      </ResponsiveWelcomeNavigationWrapper>
      {sideBarView === SBV.InternalLinks ? (
        <LinkSectionWrapper>
          {SideBarData.internal.links.map(link => (
            <InternaLink to={link.url} key={link.text}>
              {link.text}
            </InternaLink>
          ))}
        </LinkSectionWrapper>
      ) : (
        <LinkSectionWrapper>
          {SideBarData.external.links.map(link => (
            <ExternalLink href={link.url} label={link.url} key={link.text}>
              {link.text}
            </ExternalLink>
          ))}
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
        <Branding href={SiteData.links.kd.url} label={SiteData.links.kd.url}>
          KD.
        </Branding>
      </BrandingWrapper>
    </SideBarWrapper>
  )
}

export default SideBar
