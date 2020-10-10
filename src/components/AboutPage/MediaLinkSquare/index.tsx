import React, { ReactElement } from 'react';
import Img from 'gatsby-image';
import { css } from 'twin.macro';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { TileDimensions } from '../../../shared/hooks/useAllTileDimensions';

import { FlexColumnWrapper, FlexRowWrapper } from '../../../shared/styles/wrappers';
import { BoldType } from '../../../shared/styles/text';

import { MediaLinkSquareComponent } from './styles';

import { MediaLink } from './types';

type MediaLinkSquareProps = { data: MediaLink; dimensions: TileDimensions };

export const MediaLinkSquare = ({
  data: {
    description,
    date,
    title,
    subTitle,
    externalLink,
    backgroundImageQuery,
    Icon,
    styling: { backgroundColor },
  },
  dimensions: { width, height },
}: MediaLinkSquareProps): ReactElement => {
  const backgroundImage = backgroundImageQuery();

  const backgroundColorStyles = css`
    background-color: ${backgroundColor};
  `;

  return (
    <MediaLinkSquareComponent
      width={width}
      height={height}
      tw="relative mb-2 md:mb-0"
      css={backgroundColorStyles}
    >
      <Img
        fluid={backgroundImage}
        draggable={false}
        tw="absolute top-0 left-0 z-0 w-full h-full object-cover object-center select-none"
      />
      <OutboundLink
        href={externalLink}
        label={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        tw="absolute top-0 left-0 z-10 w-full h-full"
      >
        <FlexColumnWrapper
          alignItems="items-center"
          justifyContent="justify-between"
          tw="w-full h-full p-4 lg:p-8"
        >
          <FlexRowWrapper
            alignItems="items-center"
            justifyContent="justify-between"
            tw="w-full overflow-x-hidden text-offwhite"
          >
            <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="mr-2">
              {Icon}
            </FlexRowWrapper>
            <FlexColumnWrapper
              alignItems="items-end"
              justifyContent="justify-center"
              tw="flex-grow"
            >
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
            <BoldType
              color="text-offwhite"
              textAlign="text-left"
              tw="w-full text-xs md:text-xs font-normal"
            >
              {subTitle}
            </BoldType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </MediaLinkSquareComponent>
  );
};
