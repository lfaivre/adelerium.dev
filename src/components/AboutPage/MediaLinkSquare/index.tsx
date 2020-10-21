import { MediaLinkSquareComponent } from '@adelerium/components/AboutPage/MediaLinkSquare/styles';
import { MediaLinkSquareProps } from '@adelerium/components/AboutPage/MediaLinkSquare/types';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { getFontAwesomeIcon } from '@adelerium/utils/font-awesome';
import { IconType } from '@adelerium/utils/font-awesome/types';
import Img, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement } from 'react';
import tw, { css } from 'twin.macro';

export const MediaLinkSquare = ({
  data: { title, subtitle, description, date, type, externalLink, displayImage },
  dimensions: { width, height, maxHeight },
}: MediaLinkSquareProps): ReactElement => {
  const maxHeightStyles = css`
    max-height: ${maxHeight}px;
  `;

  return (
    <MediaLinkSquareComponent
      width={width}
      height={height}
      css={[maxHeight !== -1 && maxHeightStyles, tw`relative mb-2 xl:mb-0 bg-charcoal`]}
    >
      <Img
        fluid={displayImage?.fluid as FluidObject | FluidObject[]}
        draggable={false}
        tw="absolute top-0 left-0 z-0 w-full h-full object-cover object-center select-none"
      />
      <OutboundLink
        href={externalLink || websiteFullPath}
        label={externalLink || websiteFullPath}
        target="_blank"
        rel="noopener noreferrer"
        tw="absolute top-0 left-0 z-10 w-full h-full"
      >
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-between" tw="w-full h-full p-4 lg:p-8">
          <FlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-between"
            tw="w-full overflow-x-hidden text-offwhite"
          >
            <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="mr-2">
              {getFontAwesomeIcon(type as IconType)}
            </FlexRowWrapper>
            <FlexColumnWrapper alignItems="items-end" justifyContent="justify-center" tw="flex-grow">
              <BoldType color="text-offwhite" textAlign="text-right" tw="w-full uppercase">
                {description}
              </BoldType>
              <BoldType
                color="text-offwhite"
                textAlign="text-right"
                tw="w-full uppercase text-xs md:text-xs font-normal"
              >
                {date}
              </BoldType>
            </FlexColumnWrapper>
          </FlexRowWrapper>
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full">
            <BoldType color="text-offwhite" textAlign="text-left" tw="w-full">
              {title}
            </BoldType>
            <BoldType color="text-offwhite" textAlign="text-left" tw="w-full text-xs md:text-xs font-normal">
              {subtitle}
            </BoldType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </MediaLinkSquareComponent>
  );
};
