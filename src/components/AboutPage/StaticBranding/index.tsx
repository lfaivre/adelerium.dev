import { StaticBrandingProps } from '@adelerium/components/AboutPage/StaticBranding/types';
import { useStaticBrandingQueryData } from '@adelerium/components/AboutPage/StaticBranding/useStaticBrandingQueryData';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { useElementInView } from '@adelerium/hooks/useElementInView';
import { BoldType, BrandingType } from '@adelerium/styles/text';
import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedFlexColumnWrapper = animated(FlexColumnWrapper);
const AnimatedBoldType = animated(BoldType);
const AnimatedBrandingType = animated(BrandingType);

const staticStudioTitle = `Kevala Design`;
const staticStudioSubtitle = `Website Development & Design Studio`;
const staticStudioLogoText = `KD.`;

export const StaticBranding = ({ dimensions: { width, height, maxHeight } }: StaticBrandingProps): ReactElement => {
  const { brandingLink } = useStaticBrandingQueryData();

  const {
    theme: { colors },
  } = useAppState();

  const componentRef = useRef(null);
  const elementInView = useElementInView({ ref: componentRef });

  const containerSpringStyles = useSpring({
    to: {
      backgroundColor: elementInView
        ? colors.tertiary.default
        : colors.tertiary.transparent_12 || colors.tertiary.default,
    },
    config: config.molasses,
  });

  const textSpringStyles = useSpring({
    to: { color: elementInView ? colors.primary.default : colors.secondary.default },
    config: config.molasses,
  });

  return (
    <AnimatedFlexColumnWrapper
      ref={componentRef}
      alignItems="items-center"
      justifyContent="justify-center"
      style={containerSpringStyles}
      css={[
        css`
          width: ${width !== -1 ? `${width}px` : `100%`};
          height: ${height !== -1 ? `${height}px` : `auto`};
          max-height: ${maxHeight !== -1 ? `${maxHeight}px` : `none`};
        `,
        tw`mb-2 xl:mb-0`,
      ]}
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
              color={colors.secondary.default}
              style={textSpringStyles}
              tw="w-full uppercase text-xs lg:text-base"
            >
              {staticStudioTitle}
            </AnimatedBoldType>
            <AnimatedBoldType
              color={colors.secondary.default}
              style={textSpringStyles}
              tw="w-full uppercase text-xs font-normal"
            >
              {staticStudioSubtitle}
            </AnimatedBoldType>
          </FlexColumnWrapper>
          <FlexColumnWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-grow w-full">
            <AnimatedBrandingType color={colors.secondary.default} style={textSpringStyles} tw="text-5xl">
              {staticStudioLogoText}
            </AnimatedBrandingType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </AnimatedFlexColumnWrapper>
  );
};
