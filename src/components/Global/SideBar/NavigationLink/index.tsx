import { NavigationLinkProps } from '@adelerium/components/Global/SideBar/NavigationLink/types';
import { ExternalLinks, InternalLinks } from '@adelerium/constants/presentation';
import { websiteFullPath } from '@adelerium/constants/site-metadata';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { usePathData } from '@adelerium/hooks/usePathData';
import { BoldType } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import { getStrippedInternalLinkPath } from '@adelerium/utils/strings';
import { Link, navigate } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { MouseEvent, ReactElement, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw from 'twin.macro';

const AnimatedBoldType = animated(BoldType);

export const NavigationLink = ({ type, data }: NavigationLinkProps): ReactElement => {
  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();
  const pathData = usePathData();

  const [hovered, setHovered] = useState(false);

  const internalLinkPath = type === InternalLinks ? getStrippedInternalLinkPath(data?.destination || `/`) : `/`;

  const handlePageTransition = async (event: MouseEvent): Promise<void> => {
    event.preventDefault();
    if (data?.displayText === pathData.pathData?.text) return;
    dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: true } } });
    await navigate(internalLinkPath);
  };

  /** @note React Spring Styles */

  const externalLinkTextSpringStyles = useSpring({
    from: { backgroundColor: `#ffffff00`, color: colors.primary.default },
    to: {
      backgroundColor:
        (type === InternalLinks && sideBarIsVisible && data?.displayText === pathData.pathData?.text) ||
        (type === ExternalLinks && hovered)
          ? colors.primary.default
          : `#ffffff00`,
      color:
        (type === InternalLinks && sideBarIsVisible && data?.displayText === pathData.pathData?.text) ||
        (type === ExternalLinks && hovered)
          ? colors.secondary.default
          : colors.primary.default,
    },
    config: { ...config.default },
  });

  return (
    <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="w-full">
      <animated.span style={externalLinkTextSpringStyles} css={[tw`flex-none mr-1/2 w-1 h-full`]} />
      {type === InternalLinks ? (
        <Link to={internalLinkPath} onClick={(e) => handlePageTransition(e)} tw="flex-grow">
          <AnimatedBoldType
            color={colors.primary.default}
            defaultFontSize
            style={externalLinkTextSpringStyles}
            tw="p-2 pt-3 w-full uppercase"
          >
            {data?.displayText}
          </AnimatedBoldType>
        </Link>
      ) : (
        <OutboundLink
          href={data?.destination || websiteFullPath}
          label={data?.destination || websiteFullPath}
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          tw="flex-grow"
        >
          <AnimatedBoldType
            color={colors.primary.default}
            defaultFontSize
            style={externalLinkTextSpringStyles}
            tw="p-2 pt-3 w-full uppercase"
          >
            {data?.displayText}
          </AnimatedBoldType>
        </OutboundLink>
      )}
    </FlexRowWrapper>
  );
};
