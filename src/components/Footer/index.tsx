import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { StyledInternalLink } from '../Shared/StyledInternalLink';

import { getRandomInt } from '../../services/math';

import { PathDataHook } from '../../types/paths';
import { InternalLinkDirection as ILD } from '../../types/presentation';

import { GraphQLStaticQuery } from './types';
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
  const footerQuery: GraphQLStaticQuery = useStaticQuery(graphql`
    query {
      contentfulFooter: contentfulFooter(title: { eq: "Default" }) {
        brandingLink {
          destination
        }
        linkedInLink {
          destination
        }
        gitHubLink {
          destination
        }
        facts {
          text
          id
        }
      }
    }
  `);

  const { brandingLink, linkedInLink, gitHubLink, facts } = footerQuery.contentfulFooter;

  return (
    <FooterWrapper>
      <FirstFooterRow>
        <BusinessWrapper>
          <BusinessTitle>Need a website?</BusinessTitle>
          <BusinessLink
            href={brandingLink.destination}
            target="_blank"
            rel="noopener noreferrer"
            label={brandingLink.destination}
          >
            kevaladesign.com
          </BusinessLink>
        </BusinessWrapper>
        <FactWrapper>
          <FactTitle>Did you know?</FactTitle>
          <FactText>{facts[getRandomInt(0, facts.length - 1)].text}</FactText>
        </FactWrapper>
        <LinkWrapper>
          <ExternalLink
            href={linkedInLink.destination}
            target="_blank"
            rel="noopener noreferrer"
            label={linkedInLink.destination}
          >
            li.
          </ExternalLink>
          <ExternalLink
            href={gitHubLink.destination}
            target="_blank"
            rel="noopener noreferrer"
            label={gitHubLink.destination}
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
