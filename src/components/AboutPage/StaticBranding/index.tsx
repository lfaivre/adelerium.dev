import { StaticBrandingProps } from '@adelerium/components/AboutPage/StaticBranding/types';
import { useStaticBrandingQueryData } from '@adelerium/components/AboutPage/StaticBranding/useStaticBrandingQueryData';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { BoldType, BrandingType } from '@adelerium/styles/text';
import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedFlexColumnWrapper = animated(FlexColumnWrapper);
const AnimatedBoldType = animated(BoldType);
const AnimatedBrandingType = animated(BrandingType);

const StaticBrandingTitle = `Kevala Design`;
const StaticBrandingSubtitle = `Website Development & Design Studio`;
const StaticBrandingText = `KD.`;

export const StaticBranding = ({ dimensions: { width, height, maxHeight } }: StaticBrandingProps): ReactElement => {
  const { brandingLink } = useStaticBrandingQueryData();

  const [hovered, setHovered] = useState(false);

  const containerSpringStyles = useSpring({
    to: { backgroundColor: hovered ? `#fcf0ec` : `#fcf0ec1f` },
    config: config.molasses,
  });

  const textSpringStyles = useSpring({
    to: { color: hovered ? `#000000` : `#f3f2f1` },
    config: config.molasses,
  });

  const dimensionsStyles = css`
    width: ${width !== -1 ? `${width}px` : `100%`};
    height: ${height !== -1 ? `${height}px` : `auto`};
    max-height: ${maxHeight !== -1 ? `${maxHeight}px` : `none`};
  `;

  return (
    <AnimatedFlexColumnWrapper
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      alignItems="items-center"
      justifyContent="justify-center"
      style={containerSpringStyles}
      css={[dimensionsStyles, tw`mb-2 xl:mb-0 bg-offpink`]}
    >
      <OutboundLink
        href={brandingLink?.destination || websiteFullPath}
        label={brandingLink?.destination || websiteFullPath}
        target="_blank"
        rel="noopener noreferrer"
        tw="w-full h-full"
      >
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="p-4 lg:p-8 w-full h-full">
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full overflow-x-hidden">
            <AnimatedBoldType
              color="text-offwhite"
              textAlign="text-left"
              style={textSpringStyles}
              tw="w-full uppercase text-xs md:text-xs lg:text-base"
            >
              {StaticBrandingTitle}
            </AnimatedBoldType>
            <AnimatedBoldType
              color="text-offwhite"
              textAlign="text-left"
              style={textSpringStyles}
              tw="w-full uppercase text-xs md:text-xs font-normal"
            >
              {StaticBrandingSubtitle}
            </AnimatedBoldType>
          </FlexColumnWrapper>
          <FlexColumnWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-grow w-full">
            <AnimatedBrandingType
              color="text-offwhite"
              textAlign="text-center"
              style={textSpringStyles}
              tw="text-5xl md:text-5xl"
            >
              {StaticBrandingText}
            </AnimatedBrandingType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </AnimatedFlexColumnWrapper>
  );
};
