import React, { ReactElement, useLayoutEffect, useState } from 'react';
import Img from 'gatsby-image';
import { css } from 'twin.macro';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { SCREEN_SIZE } from '../../../shared/constants/presentation';
import { FlexColumnWrapper, FlexRowWrapper } from '../../../shared/styles/wrappers';
import { BoldType } from '../../../shared/styles/text';
import { useAppState } from '../../../shared/hooks/global-state';

import { MediaLinkSquareComponent } from './styles';

import { MediaLink } from './types';

type MediaLinkSquareProps = MediaLink;

export const MediaLinkSquare = ({
  description,
  date,
  title,
  subTitle,
  externalLink,
  backgroundImageQuery,
  Icon,
  styling: { backgroundColor },
}: MediaLinkSquareProps): ReactElement => {
  const { layoutWidth } = useAppState();

  const [size, setSize] = useState<number>(0);
  const backgroundImage = backgroundImageQuery();

  useLayoutEffect(() => {
    const sizeDivisor = layoutWidth >= SCREEN_SIZE.MD ? 3 : 1;
    const numberOfGutters = layoutWidth >= SCREEN_SIZE.MD ? 4 : 2;
    const sizeOfGutters = layoutWidth >= SCREEN_SIZE.MD ? 16 : 8;

    const calculatedSize = (layoutWidth - numberOfGutters * sizeOfGutters) / sizeDivisor;
    const newSize = calculatedSize > 0 ? calculatedSize : 0;
    setSize(newSize);
  }, [layoutWidth]);

  const backgroundColorStyles = css`
    background-color: ${backgroundColor};
  `;

  return (
    <MediaLinkSquareComponent
      width={size}
      height={size}
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
            tw="w-full text-offwhite"
          >
            <FlexRowWrapper alignItems="items-center" justifyContent="justify-start">
              {Icon}
            </FlexRowWrapper>
            <FlexColumnWrapper alignItems="items-end" justifyContent="justify-center">
              <BoldType color="text-offwhite" textAlign="text-right" tw="uppercase">
                {description}
              </BoldType>
              <BoldType
                color="text-offwhite"
                textAlign="text-right"
                tw="uppercase text-xs font-normal"
              >
                {date}
              </BoldType>
            </FlexColumnWrapper>
          </FlexRowWrapper>
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full">
            <BoldType color="text-offwhite" textAlign="text-left" tw="uppercase">
              {title}
            </BoldType>
            <BoldType
              color="text-offwhite"
              textAlign="text-left"
              tw="uppercase text-xs font-normal"
            >
              {subTitle}
            </BoldType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </MediaLinkSquareComponent>
  );
};
