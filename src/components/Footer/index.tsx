import React from 'react';
import { StyledInternalLink } from '../Shared/StyledInternalLink';

import { facts } from '../../data/facts';

import { PathDataHook } from '../../types/paths';
import { InternalLinkDirection as ILD } from '../../types/presentation';
import { SiteData } from '../../data/site';
import { getRandomInt } from '../../utils/math';

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
  StyledInternalLinkPlaceholder,
  BrandingWrapper,
  Branding,
  Divider,
  ThirdFooterRow,
  CopyrightText,
  ResponsiveSpan,
  BrandingTwo,
} from './styles';

export const Footer = (props: PathDataHook): JSX.Element => {
  return (
    <FooterWrapper>
      <FirstFooterRow>
        <BusinessWrapper>
          <BusinessTitle>Need a website?</BusinessTitle>
          <BusinessLink
            href={SiteData.links.kd.url}
            label={SiteData.links.kd.url}
          >
            kevaladesign.com
          </BusinessLink>
        </BusinessWrapper>
        <FactWrapper>
          <FactTitle>Did you know?</FactTitle>
          <FactText>{facts[getRandomInt(0, facts.length - 1)]}</FactText>
        </FactWrapper>
        <LinkWrapper>
          <ExternalLink
            href={SiteData.links.linkedin.url}
            label={SiteData.links.linkedin.url}
          >
            li.
          </ExternalLink>
          <ExternalLink
            href={SiteData.links.github.url}
            label={SiteData.links.github.url}
          >
            gh.
          </ExternalLink>
        </LinkWrapper>
      </FirstFooterRow>
      <SecondFooterRow>
        {props.pathData !== undefined ? (
          <StyledInternalLink
            pathname={props.pathname}
            isIndex={props.isIndex}
            pathData={props.pathData}
            isValidPath={props.isValidPath}
            direction={ILD.Previous}
          />
        ) : (
          <StyledInternalLinkPlaceholder />
        )}
        <BrandingWrapper>
          <Branding>kevala design.</Branding>
        </BrandingWrapper>
        <StyledInternalLink
          pathname={props.pathname}
          isIndex={props.isIndex}
          pathData={props.pathData}
          isValidPath={props.isValidPath}
          direction={ILD.Next}
        />
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
  );
};
