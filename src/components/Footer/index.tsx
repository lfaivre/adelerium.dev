import React from "react"
import StyledInternalLink from "../Shared/StyledInternalLink"

import { PathDataHook } from "../../types/paths"
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
  Divider,
  ThirdFooterRow,
  CopyrightText,
  ResponsiveSpan,
  BrandingTwo,
} from "./styles"

interface Props extends PathDataHook {}

const Footer = (props: Props) => {
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
        <StyledInternalLink {...props} direction={ILD.Previous} />
        <BrandingWrapper>
          <Branding>kevala design.</Branding>
        </BrandingWrapper>
        <StyledInternalLink {...props} direction={ILD.Next} />
      </SecondFooterRow>
      <Divider />
      <ThirdFooterRow>
        <CopyrightText>
          <ResponsiveSpan>Copyright&nbsp;</ResponsiveSpan>&copy;&nbsp;
          {new Date().getFullYear()}
          &nbsp;Lorenzo&nbsp;Faivre
        </CopyrightText>
        <BrandingTwo>kevala design.</BrandingTwo>
      </ThirdFooterRow>
    </FooterWrapper>
  )
}

export default Footer
