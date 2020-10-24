import { MediaLinkSquareProps } from '@adelerium/components/AboutPage/MediaLinkSquare/types';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { useElementInView } from '@adelerium/hooks/useElementInView';
import { BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { getIcon } from '@adelerium/utils/icons';
import { IconType } from '@adelerium/utils/icons/types';
import Img, { FluidObject } from 'gatsby-image';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedImg = animated(Img);

export const MediaLinkSquare = ({
  data: { title, subtitle, description, date, type, externalLink, displayImage },
  dimensions: { width, height, maxHeight },
}: MediaLinkSquareProps): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();

  const componentRef = useRef(null);
  const elementInView = useElementInView({ ref: componentRef });

  const springStyles = useSpring({
    to: { opacity: elementInView ? 1 : 0.12 },
    config: config.molasses,
  });

  return (
    <FlexColumnWrapper
      ref={componentRef}
      alignItems="items-center"
      justifyContent="justify-center"
      css={[
        css`
          width: ${width !== -1 ? `${width}px` : `100%`};
          height: ${height !== -1 ? `${height}px` : `auto`};
          max-height: ${maxHeight !== -1 ? `${maxHeight}px` : `none`};
        `,
        tw`relative mb-2 xl:mb-0`,
      ]}
    >
      <AnimatedImg
        fluid={displayImage?.fluid as FluidObject | FluidObject[]}
        draggable={false}
        style={springStyles}
        tw="absolute top-0 left-0 z-0 w-full h-full object-cover object-center select-none"
      />
      <OutboundLink
        href={externalLink || websiteFullPath}
        label={externalLink || websiteFullPath}
        target="_blank"
        rel="noopener noreferrer"
        tw="absolute top-0 left-0 z-10 w-full h-full"
      >
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-between" tw="p-4 lg:p-8 w-full h-full">
          <FlexRowWrapper alignItems="items-center" justifyContent="justify-between" tw="w-full overflow-x-hidden">
            <FlexRowWrapper
              alignItems="items-center"
              justifyContent="justify-start"
              css={[
                css`
                  color: ${colors.secondary.default};
                `,
                tw`mr-2`,
              ]}
            >
              {getIcon(type as IconType)}
            </FlexRowWrapper>
            <FlexColumnWrapper alignItems="items-end" justifyContent="justify-center" tw="flex-grow">
              <BoldType
                color={colors.secondary.default}
                textAlign="text-right"
                tw="w-full uppercase text-xs lg:text-base"
              >
                {description}
              </BoldType>
              <BoldType
                color={colors.secondary.default}
                textAlign="text-right"
                tw="w-full uppercase text-xs font-normal"
              >
                {date}
              </BoldType>
            </FlexColumnWrapper>
          </FlexRowWrapper>
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full">
            <BoldType color={colors.secondary.default} tw="w-full uppercase text-xs lg:text-base">
              {title}
            </BoldType>
            <BoldType color={colors.secondary.default} tw="w-full uppercase text-xs font-normal">
              {subtitle}
            </BoldType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </FlexColumnWrapper>
  );
};
