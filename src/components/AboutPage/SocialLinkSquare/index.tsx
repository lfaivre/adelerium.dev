import { SocialLinkQuery_socialLinks_nodes as ContentfulSocialLink } from '@adelerium/@types/__generated__/SocialLinkQuery';
import { SocialLinkSquareComponent } from '@adelerium/components/AboutPage/SocialLinkSquare/styles';
import { websiteFullPath } from '@adelerium/shared/constants/site-metadata';
import { TileDimensions } from '@adelerium/shared/hooks/useAllTileDimensions';
import { BoldType } from '@adelerium/shared/styles/text';
import { FlexColumnWrapper } from '@adelerium/shared/styles/wrappers';
import { getFontAwesomeIcon, IconType } from '@adelerium/utils/getFontAwesomeIcon';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement } from 'react';
import { css } from 'twin.macro';

type SocialLinkSquareProps = { data: ContentfulSocialLink; dimensions: TileDimensions };

export const SocialLinkSquare = ({
  data: { title, subtitle, type, externalLinkText, externalLink, accentColorHex },
  dimensions: { width, height },
}: SocialLinkSquareProps): ReactElement => {
  const externalLinkTextStyles = css`
    color: ${accentColorHex};
  `;

  const backgroundColorStyles = css`
    background-color: ${accentColorHex};
  `;

  return (
    <SocialLinkSquareComponent
      width={width}
      height={height}
      tw="relative mb-2 md:mb-0 p-4 lg:p-8"
      css={backgroundColorStyles}
    >
      <OutboundLink
        href={externalLink || websiteFullPath}
        label={externalLink || websiteFullPath}
        target="_blank"
        rel="noopener noreferrer"
        tw="absolute top-0 left-0 flex flex-row items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 z-10 bg-offwhite p-8 w-full h-full"
      >
        <BoldType color="text-charcoal" textAlign="text-center" tw="uppercase" css={externalLinkTextStyles}>
          {externalLinkText}
        </BoldType>
      </OutboundLink>
      <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full h-full">
        <FlexColumnWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          tw="flex-grow w-full text-offwhite"
        >
          {getFontAwesomeIcon(type as IconType, '4x')}
        </FlexColumnWrapper>
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full overflow-x-hidden">
          <BoldType color="text-offwhite" textAlign="text-left" tw="w-full uppercase">
            {title}
          </BoldType>
          <BoldType color="text-offwhite" textAlign="text-left" tw="w-full text-xs md:text-xs font-normal">
            {subtitle}
          </BoldType>
        </FlexColumnWrapper>
      </FlexColumnWrapper>
    </SocialLinkSquareComponent>
  );
};
