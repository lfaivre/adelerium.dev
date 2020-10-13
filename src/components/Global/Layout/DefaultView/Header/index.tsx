import React, { ReactElement, useState, useEffect } from 'react';
import tw from 'twin.macro';

import { useAppState, useAppDispatch } from '../../../../../shared/hooks/global-state';
import { usePathData } from '../../../../../shared/hooks/location';
import { SET_VIEW } from '../../../../../shared/types/state';

import { StyledInternalLink } from '../../../StyledInternalLink';

import { INDEX_TEXT } from '../../../../../shared/types/paths';
import { InternalLinkDirection } from '../../../../../shared/types/presentation';

import { FlexRowWrapper } from '../../../../../shared/styles/wrappers';
import { BoldParagraphType, BoldTypeAsButton } from '../../../../../shared/styles/text';

const DEFAULT_HEADER_TEXT = `Home`;
const ERROR_HEADER_TEXT = `Error`;

type HeaderProps = { disableToggle?: boolean };

export const Header = ({ disableToggle }: HeaderProps): ReactElement => {
  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
  } = useAppState();
  const dispatch = useAppDispatch();
  const { pathname, isIndex, pathData, isValidPath } = usePathData();
  const [headerTitle, setHeaderTitle] = useState<string>(DEFAULT_HEADER_TEXT);
  const [toggleIsVisible, setToggleIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const { text } = pathData || { text: ERROR_HEADER_TEXT };
    const newHeaderTitle = text !== INDEX_TEXT ? text : `Welcome`;
    setHeaderTitle(newHeaderTitle);
  }, [pathData]);

  return (
    <FlexRowWrapper alignItems="items-center" justifyContent="justify-between" tw="w-full h-full">
      <FlexRowWrapper
        alignItems="items-center"
        justifyContent="justify-start"
        onMouseOver={() => !disableToggle && setToggleIsVisible(true)}
        onMouseOut={() => setToggleIsVisible(false)}
        tw="relative w-1/2 h-full"
      >
        <BoldParagraphType
          color="text-charcoal"
          textAlign="text-left"
          css={[
            tw`z-0 transition-opacity duration-300 ease-in-out text-3xl md:text-4xl`,
            toggleIsVisible && tw`opacity-0`,
          ]}
          aria-label="Toggle Side Bar Navigation"
        >{`${headerTitle}.`}</BoldParagraphType>
        <BoldTypeAsButton
          disabled={disableToggle}
          color="text-charcoal"
          textAlign="text-left"
          onClick={() =>
            !disableToggle &&
            dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: !sideBarIsVisible } } })
          }
          css={[
            tw`block absolute left-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 focus:outline-none pt-1 md:pt-2 h-full uppercase`,
            toggleIsVisible && tw`opacity-100`,
            disableToggle && tw`cursor-default`,
          ]}
        >
          Toggle Navigation
        </BoldTypeAsButton>
      </FlexRowWrapper>
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-end" tw="w-1/2 h-full">
        <StyledInternalLink
          pathname={pathname}
          isIndex={isIndex}
          pathData={pathData}
          isValidPath={isValidPath}
          direction={InternalLinkDirection.Next}
        />
      </FlexRowWrapper>
    </FlexRowWrapper>
  );
};
