import { useFooterQueryData } from '@adelerium/components/Global/Footer/useFooterQueryData';
import { StyledInternalLink } from '@adelerium/components/Global/StyledInternalLink';
import { Next, Previous } from '@adelerium/constants/presentation';
import { studioCopyrightText, studioUrl, websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { usePathData } from '@adelerium/hooks/usePathData';
import { BoldParagraphType, BoldType, BrandingType, NormalParagraphType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { getRandomInt } from '@adelerium/utils/math';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement } from 'react';
import tw, { css } from 'twin.macro';

const factOnError = `This site was built with Gatsby.js.`;
const staticStudioCTA = `Need a website?`;
const staticStudioUrlText = `kevaladesign.com`;
const staticStudioLogoText = `KD.`;
const staticFactTitle = `Did you know?`;
const staticLinkedInText = `li.`;
const staticGitHubText = `gh.`;

export const Footer = (): ReactElement => {
  const { footerData, brandingLink, linkedInLink, gitHubLink } = useFooterQueryData();

  const {
    theme: { colors },
  } = useAppState();
  const { pathname, isIndex, pathData, isValidPath } = usePathData();

  const getRandomFact = (): string => {
    if (!footerData?.facts) return factOnError;
    return footerData.facts[getRandomInt(0, footerData.facts.length - 1)]?.text || factOnError;
  };

  return (
    <div tw="px-4 pt-8 pb-4 md:p-8 w-full">
      <FlexRowWrapper alignItems="items-start" justifyContent="justify-start" tw="hidden md:flex mb-8 w-full">
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-2/6">
          <BoldParagraphType color={colors.secondary.default} defaultFontSize>
            {staticStudioCTA}
          </BoldParagraphType>
          <OutboundLink
            href={brandingLink?.destination || websiteFullPath}
            label={brandingLink?.destination || websiteFullPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            <NormalParagraphType color={colors.secondary.default} defaultFontSize>
              {staticStudioUrlText}
            </NormalParagraphType>
          </OutboundLink>
        </FlexColumnWrapper>
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="w-2/6">
          <BoldParagraphType color={colors.secondary.default} defaultFontSize textAlign="text-center">
            {staticFactTitle}
          </BoldParagraphType>
          <NormalParagraphType color={colors.secondary.default} defaultFontSize textAlign="text-center" tw="w-full">
            {getRandomFact()}
          </NormalParagraphType>
        </FlexColumnWrapper>
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-end" tw="w-2/6">
          <OutboundLink
            href={linkedInLink?.destination || websiteFullPath}
            label={linkedInLink?.destination || websiteFullPath}
            target="_blank"
            rel="noopener noreferrer"
            tw="mr-4"
          >
            <BoldParagraphType color={colors.secondary.default} defaultFontSize>
              {staticLinkedInText}
            </BoldParagraphType>
          </OutboundLink>
          <OutboundLink
            href={gitHubLink?.destination || websiteFullPath}
            label={gitHubLink?.destination || websiteFullPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BoldParagraphType color={colors.secondary.default} defaultFontSize>
              {staticGitHubText}
            </BoldParagraphType>
          </OutboundLink>
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
              direction={Previous}
            />
          )}
        </FlexRowWrapper>
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-center" tw="hidden md:flex w-2/6">
          <OutboundLink
            href={brandingLink?.destination || studioUrl}
            label={brandingLink?.destination || studioUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BrandingType color={colors.secondary.default} defaultFontSize>
              {staticStudioLogoText}
            </BrandingType>
          </OutboundLink>
        </FlexRowWrapper>
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-end" tw="w-1/2 md:w-2/6">
          {pathData && (
            <StyledInternalLink
              pathname={pathname}
              isIndex={isIndex}
              pathData={pathData}
              isValidPath={isValidPath}
              direction={Next}
            />
          )}
        </FlexRowWrapper>
      </FlexRowWrapper>
      <hr
        css={[
          css`
            border-color: ${colors.secondary.default};
          `,
          tw`block md:hidden mb-4 md:mb-2 border-t w-full h-0`,
        ]}
      />
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full">
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full overflow-hidden">
          <BoldType
            color={colors.secondary.default}
            textAlign="text-center"
            wordBreak="break-normal"
            tw="w-full uppercase text-xs"
          >
            {studioCopyrightText}
          </BoldType>
        </FlexRowWrapper>
      </FlexRowWrapper>
    </div>
  );
};
