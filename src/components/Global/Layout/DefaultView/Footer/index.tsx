import React, { ReactElement } from 'react';
import 'twin.macro';
import { useFooterQueryData } from '../../../../../graphql/queries/useFooterQueryData';
import { usePathData } from '../../../../../shared/hooks/usePathData';
import {
  BoldParagraphType,
  BoldParagraphTypeAsAnchor,
  BoldType,
  BrandingType,
  NormalParagraphType,
  NormalParagraphTypeAsAnchor,
} from '../../../../../shared/styles/text';
import { FlexColumnWrapper, FlexRowWrapper, FullWidthWrapper } from '../../../../../shared/styles/wrappers';
import { InternalLinkDirection } from '../../../../../shared/types/presentation';
import { getRandomInt } from '../../../../../utils/math';
import { StyledInternalLink } from '../../../StyledInternalLink';

const factOnError = `This site was built with Gatsby.js.`;
const linkDestinationOnError = `https://github.com/lfaivre`;

export const Footer = (): ReactElement => {
  const { footerData, brandingLink, linkedInLink, gitHubLink } = useFooterQueryData();
  const { pathname, isIndex, pathData, isValidPath } = usePathData();

  const getRandomFact = (): string => {
    if (!footerData?.facts) return factOnError;
    return footerData.facts[getRandomInt(0, footerData.facts.length - 1)]?.text || factOnError;
  };

  return (
    <FullWidthWrapper tw="px-4 pt-8 pb-4 md:p-8">
      <FlexRowWrapper alignItems="items-start" justifyContent="justify-start" tw="hidden md:flex mb-8 w-full">
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-start" tw="w-2/6">
          <BoldParagraphType color="text-charcoal" textAlign="text-left">
            Need a website?
          </BoldParagraphType>
          <NormalParagraphTypeAsAnchor
            href={brandingLink?.destination || linkDestinationOnError}
            label={brandingLink?.destination || linkDestinationOnError}
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
            href={linkedInLink?.destination || linkDestinationOnError}
            label={linkedInLink?.destination || linkDestinationOnError}
            color="text-charcoal"
            tw="mr-4"
          >
            li.
          </BoldParagraphTypeAsAnchor>
          <BoldParagraphTypeAsAnchor
            href={gitHubLink?.destination || linkDestinationOnError}
            label={gitHubLink?.destination || linkDestinationOnError}
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
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-center" tw="hidden md:flex w-2/6">
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
        <FlexRowWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full overflow-hidden">
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
