import { PropsAreEqualFunction, SocialLinkSquareProps } from '@adelerium/components/AboutPage/SocialLinkSquare/types';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppState } from '@adelerium/hooks/app-state';
import { useElementInView } from '@adelerium/hooks/useElementInView';
import { BoldType } from '@adelerium/styles/text';
import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import { getIcon } from '@adelerium/utils/icons';
import { IconType } from '@adelerium/utils/icons/types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import isEqual from 'lodash.isequal';
import React, { ReactElement, useRef } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const AnimatedFlexColumnWrapper = animated(FlexColumnWrapper);

const propsAreEqual: PropsAreEqualFunction = (prevProps, nextProps) => {
  return (
    prevProps.dimensions.width === nextProps.dimensions.width &&
    prevProps.dimensions.height === nextProps.dimensions.height &&
    prevProps.dimensions.maxHeight === nextProps.dimensions.maxHeight &&
    isEqual(prevProps.data, nextProps.data)
  );
};

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
        tw`relative mb-2 xl:mb-0`,
      ]}
    >
      <FlexColumnWrapper
        alignItems="items-center"
        justifyContent="justify-center"
        css={[
          css`
            color: ${colors.secondary.default};
          `,
          tw`absolute top-0 left-0 z-0 w-full h-full`,
        ]}
      >
        {getIcon(type as IconType, 4)}
      </FlexColumnWrapper>
      <OutboundLink
        href={externalLink || websiteFullPath}
        label={externalLink || websiteFullPath}
        target="_blank"
        rel="noopener noreferrer"
        tw="z-10 w-full h-full"
      >
        <FlexColumnWrapper alignItems="items-center" justifyContent="justify-start" tw="p-4 lg:p-8 w-full h-full">
          <FlexColumnWrapper alignItems="items-center" justifyContent="justify-center" tw="flex-grow w-full" />
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

export const MemoizedSocialLinkSquare = React.memo(SocialLinkSquare, propsAreEqual);
