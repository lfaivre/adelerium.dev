import React from "react"

import StyledInternalLink from "../Shared/StyledInternalLink"
import { InternalLinkDirection as ILD } from "../../types/presentation"
import { SiteData } from "../../data/site"

import {
  FooterWrapper,
  FirstFooterRow,
  BusinessWrapper,
  BusinessTitle,
  BusinessLink,
  FactWrapper,
  FactTitle,
  FactText,
  LinkWrapper,
  ExternalLink,
  SecondFooterRow,
  BrandingWrapper,
  Branding,
  ThirdFooterRow,
  CopyrightText,
} from "./styles"

interface Props {
  pathname: string
}

const Footer = ({ pathname }: Props) => {
  return (
    <FooterWrapper>
      <FirstFooterRow>
        <BusinessWrapper>
          <BusinessTitle>Need a website?</BusinessTitle>
          <BusinessLink href={SiteData.links.kd.url}>
            kevaladesign.com
          </BusinessLink>
        </BusinessWrapper>
        <FactWrapper>
          <FactTitle>Did you know?</FactTitle>
          <FactText>
            You know those facts written under Snapple caps? Use them here.
          </FactText>
        </FactWrapper>
        <LinkWrapper>
          <ExternalLink href={SiteData.links.linkedin.url}>li.</ExternalLink>
          <ExternalLink href={SiteData.links.github.url}>gh.</ExternalLink>
        </LinkWrapper>
      </FirstFooterRow>
      <SecondFooterRow>
        <StyledInternalLink pathname={pathname} direction={ILD.Previous} />
        <BrandingWrapper>
          <Branding>kevala design.</Branding>
        </BrandingWrapper>
        <StyledInternalLink pathname={pathname} direction={ILD.Next} />
      </SecondFooterRow>
      <ThirdFooterRow>
        <CopyrightText>
          Copyright&nbsp;&copy;&nbsp;{new Date().getFullYear()}
          &nbsp;Lorenzo&nbsp;Faivre
        </CopyrightText>
      </ThirdFooterRow>
    </FooterWrapper>
  )
}

export default Footer
