import { MediaLinkQuery_mediaLinks_nodes as ContentfulMediaLink } from '@adelerium/@types/__generated__/MediaLinkQuery';
import { MediaLinkSquareComponent } from '@adelerium/components/AboutPage/MediaLinkSquare/styles';
import { websiteFullPath } from '@adelerium/shared/constants/site-metadata';
import { TileDimensions } from '@adelerium/shared/hooks/useAllTileDimensions';
import { BoldType } from '@adelerium/shared/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/shared/styles/wrappers';
import { getFontAwesomeIcon, IconType } from '@adelerium/utils/getFontAwesomeIcon';
import Img, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement } from 'react';
import 'twin.macro';

type MediaLinkSquareProps = { data: ContentfulMediaLink; dimensions: TileDimensions };

export const MediaLinkSquare = ({
  data: { title, subtitle, description, date, type, externalLink, displayImage },
  dimensions: { width, height },
}: MediaLinkSquareProps): ReactElement => {
  return (
    <MediaLinkSquareComponent width={width} height={height} tw="relative mb-2 md:mb-0 bg-charcoal">
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
