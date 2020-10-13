import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import 'twin.macro';

import { StyledInternalLink } from '../../../StyledInternalLink';

import { usePathData } from '../../../../../shared/hooks/location';
import { getRandomInt } from '../../../../../services/math';

import { InternalLinkDirection } from '../../../../../shared/types/presentation';
import { IFooterFields } from './types';

import {
  NormalParagraphType,
  BoldParagraphType,
  NormalParagraphTypeAsAnchor,
  BoldParagraphTypeAsAnchor,
  BoldType,
  BrandingType,
} from '../../../../../shared/styles/text';
import {
  FullWidthWrapper,
  FlexColumnWrapper,
  FlexRowWrapper,
} from '../../../../../shared/styles/wrappers';

type GraphQLStaticQuery = { contentfulFooter: IFooterFields };

export const Footer = (): ReactElement => {
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

  const { pathname, isIndex, pathData, isValidPath } = usePathData();

  const getRandomFact = (): string => {
    return facts[getRandomInt(0, facts.length - 1)].text || `This site was built with Gatsby.js.`;
  };

  return (
    <FullWidthWrapper tw="px-4 pt-8 pb-4 md:p-8">
      <FlexRowWrapper
        alignItems="items-start"
        justifyContent="justify-start"
        tw="hidden md:flex mb-8 w-full"
      >
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-2/6">
          <BoldParagraphType color="text-charcoal" textAlign="text-left">
            Need a website?
          </BoldParagraphType>
          <NormalParagraphTypeAsAnchor
            href={brandingLink.destination}
            label={brandingLink.destination}
            color="text-charcoal"
          >
            kevaladesign.com
          </NormalParagraphTypeAsAnchor>
        </FlexColumnWrapper>
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="w-2/6">
          <BoldParagraphType color="text-charcoal" textAlign="text-center">
            Did you know?
          </BoldParagraphType>
          <NormalParagraphType color="text-charcoal" textAlign="text-center" tw="w-full">
            {getRandomFact()}
          </NormalParagraphType>
        </FlexColumnWrapper>
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-end" tw="w-2/6">
          <BoldParagraphTypeAsAnchor
            href={linkedInLink.destination}
            label={linkedInLink.destination}
            color="text-charcoal"
            tw="mr-4"
          >
            li.
          </BoldParagraphTypeAsAnchor>
          <BoldParagraphTypeAsAnchor
            href={gitHubLink.destination}
            label={gitHubLink.destination}
            color="text-charcoal"
          >
            gh.
          </BoldParagraphTypeAsAnchor>
        </FlexRowWrapper>
      </FlexRowWrapper>
      <FlexRowWrapper alignItems="items-start" justifyContent="justify-start" tw="mb-8 w-full">
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-start" tw="w-1/2 md:w-2/6">
          {pathData && (
            <StyledInternalLink
              pathname={pathname}
              isIndex={isIndex}
              pathData={pathData}
              isValidPath={isValidPath}
              direction={InternalLinkDirection.Previous}
            />
          )}
        </FlexRowWrapper>
        <FlexRowWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          tw="hidden md:flex w-2/6"
        >
          <BrandingType color="text-charcoal" textAlign="text-center" wordBreak="break-normal">
            KD.
          </BrandingType>
        </FlexRowWrapper>
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-end" tw="w-1/2 md:w-2/6">
          {pathData && (
            <StyledInternalLink
              pathname={pathname}
              isIndex={isIndex}
              pathData={pathData}
              isValidPath={isValidPath}
              direction={InternalLinkDirection.Next}
            />
          )}
        </FlexRowWrapper>
      </FlexRowWrapper>
      <hr tw="block md:hidden mb-4 md:mb-2 border-t border-charcoal w-full h-0" />
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full">
        <FlexRowWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          tw="w-full overflow-hidden"
        >
          <BoldType
            color="text-charcoal"
            textAlign="text-center"
            tw="w-full uppercase text-xs md:text-xs"
            wordBreak="break-normal"
          >
            &copy; {new Date().getFullYear()} Lorenzo Faivre &amp; Kevala Design LLC
          </BoldType>
        </FlexRowWrapper>
      </FlexRowWrapper>
    </FullWidthWrapper>
  );
};
