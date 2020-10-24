import { StaticResumeProps } from '@adelerium/components/AboutPage/StaticResume/types';
import { useStaticResumeQueryData } from '@adelerium/components/AboutPage/StaticResume/useStaticResumeQueryData';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { GOOGLE_DRIVE } from '@adelerium/constants/icons';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { useElementInView } from '@adelerium/hooks/useElementInView';
import { BoldParagraphType, BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { getIcon } from '@adelerium/utils/icons';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedFlexRowWrapper = animated(FlexRowWrapper);
const AnimatedBoldParagraphType = animated(BoldParagraphType);
const AnimatedBoldType = animated(BoldType);

const windowWidthBreakpoint = windowDimensionBreakpoints.width.xl;

const staticResumeTitleText = `Are you looking to hire? Here’s my resume.`;
const staticResumeLinkText = `View on Google Drive`;

export const StaticResume = ({ dimensions: { width, height, maxHeight } }: StaticResumeProps): ReactElement => {
  const { resumeLink } = useStaticResumeQueryData();

  const {
    dimensions: {
      appWindow: { width: windowWidth },
    },
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
    <AnimatedFlexRowWrapper
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
        href={resumeLink?.destination || websiteFullPath}
        label={resumeLink?.destination || websiteFullPath}
        target="_blank"
        rel="noopener noreferrer"
        tw="w-full h-full"
      >
        <FlexColumnWrapper
          alignItems="items-start"
          justifyContent="justify-center"
          tw="px-4 py-8 xl:px-16 xl:py-8 w-full h-full"
        >
          <AnimatedBoldParagraphType
            color={colors.secondary.default}
            textAlign="text-center"
            wordBreak="break-normal"
            style={textSpringStyles}
            tw="mb-8 md:mb-16 xl:mb-24 w-full xl:text-left text-2xl lg:text-3xl"
          >
            {staticResumeTitleText}
          </AnimatedBoldParagraphType>
          <FlexRowWrapper alignItems="items-center" justifyContent="justify-center" tw="xl:justify-start w-full">
            <animated.div style={textSpringStyles} tw="mr-4 lg:mr-8">
              {getIcon(GOOGLE_DRIVE, windowWidth >= windowWidthBreakpoint ? 4 : 2)}
            </animated.div>
            <AnimatedBoldType
              color={colors.secondary.default}
              style={textSpringStyles}
              tw="uppercase text-xs lg:text-base"
            >
              {staticResumeLinkText}
            </AnimatedBoldType>
          </FlexRowWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </AnimatedFlexRowWrapper>
  );
};
