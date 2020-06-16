import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// TODO: REFACTOR TYPESCRIPT, PATCHED IN FOR NOW
import { SideBarData } from "./data"
import { SiteData } from "../../data/site"
import { TSideBarSection } from "../../types/sidebar"

import {
  SideBarWrapper,
  ProfileWrapper,
  ProfileImageWrapper,
  ProfileImage,
  ProfileTextWrapper,
  ProfileName,
  ProfileTag,
  BrandingWrapper,
  Branding,
  LinkSectionWrapper,
  LinkSectionSeparator,
  LinkSectionTitle,
  ExternalLink,
  InternaLink,
} from "./styles"

const SideBar = () => {
  const sideBarQuery = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile-placeholder-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 75) {
            ...GatsbyImageSharpFluid_tracedSVG
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
      {Object.values(SideBarData).map((data: TSideBarSection) => {
        return (
          <LinkSectionWrapper key={data.title}>
            <LinkSectionSeparator />
            <LinkSectionTitle>{data.title}</LinkSectionTitle>
            {data.links.map(link => {
              return link.isInternal ? (
                <InternaLink to={link.url} key={link.text}>
                  {link.text}
                </InternaLink>
              ) : (
                <ExternalLink href={link.url} key={link.text}>
                  {link.text}
                </ExternalLink>
              )
            })}
          </LinkSectionWrapper>
        )
      })}
      <BrandingWrapper>
        <Branding href={SiteData.links.kd.url}>KD.</Branding>
      </BrandingWrapper>
    </SideBarWrapper>
  )
}

export default SideBar
