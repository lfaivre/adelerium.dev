import { SocialLinkSquareProps } from '@adelerium/components/AboutPage/SocialLinkSquare/types';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import { getFontAwesomeIcon } from '@adelerium/utils/font-awesome';
import { IconType } from '@adelerium/utils/font-awesome/types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedFlexColumnWrapper = animated(FlexColumnWrapper);

export const SocialLinkSquare = ({
  data: { title, subtitle, type, externalLink, accentColorHex },
  dimensions: { width, height, maxHeight },
}: SocialLinkSquareProps): ReactElement => {
  const [hovered, setHovered] = useState(false);

  const springStyles = useSpring({
    to: {
      backgroundColor: hovered
        ? `${accentColorHex || `var(--color-Charcoal)`}`
        : accentColorHex
        ? `${accentColorHex}1F`
        : `var(--color-Charcoal)`,
    },
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
      style={springStyles}
      css={[dimensionsStyles, tw`mb-2 xl:mb-0`]}
    >
      <OutboundLink
        href={externalLink || websiteFullPath}
        label={externalLink || websiteFullPath}
        target="_blank"
        rel="noopener noreferrer"
        tw="w-full h-full"
      >
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="p-4 lg:p-8 w-full h-full">
          <FlexColumnWrapper
            alignItems="items-center"
            justifyContent="justify-center"
            tw="flex-grow w-full text-offwhite"
          >
            {getFontAwesomeIcon(type as IconType, '4x')}
          </FlexColumnWrapper>
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full overflow-x-hidden">
            <BoldType color="text-offwhite" textAlign="text-left" tw="w-full uppercase text-xs md:text-xs lg:text-base">
              {title}
            </BoldType>
            <BoldType color="text-offwhite" textAlign="text-left" tw="w-full uppercase text-xs md:text-xs font-normal">
              {subtitle}
            </BoldType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </AnimatedFlexColumnWrapper>
  );
};
