import React, { ReactElement, useLayoutEffect, useState } from 'react';
import { css } from 'twin.macro';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import { FlexColumnWrapper } from '../../../shared/styles/wrappers';
import { BoldType } from '../../../shared/styles/text';
import { useAppState } from '../../../shared/hooks/global-state';

import { SocialLinkSquareComponent } from './styles';

import { SocialLink } from './types';

// @note Size: 1/3

const sizeDivisor = 3;
const numberOfGutters = 4;
const sizeOfGutters = 16;

type SocialLinkSquareProps = SocialLink;

export const SocialLinkSquare = ({
  title,
  subTitle,
  externalLinkText,
  externalLink,
  Icon,
  styling: { backgroundColor, externalLinkTextColor },
}: SocialLinkSquareProps): ReactElement => {
  const { layoutWidth } = useAppState();

  const [size, setSize] = useState<number>(0);

  useLayoutEffect(() => {
    const calculatedSize = (layoutWidth - numberOfGutters * sizeOfGutters) / sizeDivisor;
    const newSize = calculatedSize > 0 ? calculatedSize : 0;
    console.log(`SocialLinkSquare Size: ${newSize}`);
    setSize(newSize);
  }, [layoutWidth]);

  const externalLinkTextStyles = css`
    color: ${externalLinkTextColor};
  `;

  const backgroundColorStyles = css`
    background-color: ${backgroundColor};
  `;

  return (
    <SocialLinkSquareComponent
      width={size}
      height={size}
      tw="relative p-8"
      css={backgroundColorStyles}
    >
      <OutboundLink
        href={externalLink}
        label={externalLink}
        tw="absolute top-0 left-0 flex flex-row items-center justify-center transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100 z-10 bg-offwhite p-8 w-full h-full"
      >
        <BoldType color="text-charcoal" textAlign="text-center" css={externalLinkTextStyles}>
          {externalLinkText}
        </BoldType>
      </OutboundLink>
      <FlexColumnWrapper
        alignItems="items-center"
        justifyContent="justify-start"
        tw="w-full h-full"
      >
        <FlexColumnWrapper
          alignItems="items-center"
          justifyContent="justify-center"
          tw="flex-grow w-full text-offwhite"
        >
          {Icon}
        </FlexColumnWrapper>
        <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full">
          <BoldType color="text-offwhite" textAlign="text-left" tw="uppercase">
            {title}
          </BoldType>
          <BoldType color="text-offwhite" textAlign="text-left" tw="uppercase text-xs font-normal">
            {subTitle}
          </BoldType>
        </FlexColumnWrapper>
      </FlexColumnWrapper>
    </SocialLinkSquareComponent>
  );
};
