import { StaticResumeProps } from '@adelerium/components/AboutPage/StaticResume/types';
import { useStaticResumeQueryData } from '@adelerium/components/AboutPage/StaticResume/useStaticResumeQueryData';
import { windowDimensionBreakpoints } from '@adelerium/constants/dimensions';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { BoldParagraphType, BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons/faGoogleDrive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedFlexRowWrapper = animated(FlexRowWrapper);
const AnimatedBoldParagraphType = animated(BoldParagraphType);
const AnimatedFontAwesomeIcon = animated(FontAwesomeIcon);
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
  } = useAppState();

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
    <AnimatedFlexRowWrapper
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      alignItems="items-start"
      justifyContent="justify-start"
      style={containerSpringStyles}
      css={[dimensionsStyles, tw`mb-2 xl:mb-0`]}
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
            color="text-offwhite"
            textAlign="text-center"
            wordBreak="break-normal"
            style={textSpringStyles}
            tw="mb-8 md:mb-16 xl:mb-24 w-full xl:text-left text-2xl md:text-2xl lg:text-3xl"
          >
            {staticResumeTitleText}
          </AnimatedBoldParagraphType>
          <FlexRowWrapper alignItems="items-center" justifyContent="justify-center" tw="xl:justify-start w-full">
            <AnimatedFontAwesomeIcon
              icon={faGoogleDrive}
              size={windowWidth >= windowWidthBreakpoint ? `4x` : `2x`}
              style={textSpringStyles}
              tw="mr-4 lg:mr-8 text-offwhite"
            />
            <AnimatedBoldType
              color="text-offwhite"
              textAlign="text-left"
              style={textSpringStyles}
              tw="uppercase text-xs md:text-xs lg:text-base"
            >
              {staticResumeLinkText}
            </AnimatedBoldType>
          </FlexRowWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </AnimatedFlexRowWrapper>
  );
};
