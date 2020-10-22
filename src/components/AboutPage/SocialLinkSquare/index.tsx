import { SocialLinkSquareProps } from '@adelerium/components/AboutPage/SocialLinkSquare/types';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { useElementInView } from '@adelerium/hooks/useElementInView';
import { BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import { getFontAwesomeIcon } from '@adelerium/utils/font-awesome';
import { IconType } from '@adelerium/utils/font-awesome/types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { ReactElement, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedFlexColumnWrapper = animated(FlexColumnWrapper);

export const SocialLinkSquare = ({
  data: { title, subtitle, type, externalLink, accentColorHex },
  dimensions: { width, height, maxHeight },
}: SocialLinkSquareProps): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();

  const componentRef = useRef(null);
  const elementInView = useElementInView({ ref: componentRef });

  const springStyles = useSpring({
    to: {
      backgroundColor: elementInView
        ? `${accentColorHex || colors.primary.default}`
        : accentColorHex
        ? `${accentColorHex}1F`
        : `${colors.primary.default}`,
    },
    config: config.molasses,
  });

  return (
    <AnimatedFlexColumnWrapper
      ref={componentRef}
      alignItems="items-center"
      justifyContent="justify-center"
      style={springStyles}
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
            css={[
              css`
                color: ${colors.secondary.default};
              `,
              tw`flex-grow w-full`,
            ]}
          >
            {getFontAwesomeIcon(type as IconType, '4x')}
          </FlexColumnWrapper>
          <FlexColumnWrapper alignItems="items-start" justifyContent="justify-center" tw="w-full overflow-x-hidden">
            <BoldType color={colors.secondary.default} tw="w-full uppercase text-xs lg:text-base">
              {title}
            </BoldType>
            <BoldType color={colors.secondary.default} tw="w-full uppercase text-xs font-normal">
              {subtitle}
            </BoldType>
          </FlexColumnWrapper>
        </FlexColumnWrapper>
      </OutboundLink>
    </AnimatedFlexColumnWrapper>
  );
};
