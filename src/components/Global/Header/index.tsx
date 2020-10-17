import { StyledInternalLink } from '@adelerium/components/Global/StyledInternalLink';
import { homePageTitleText, notFoundPageTitleText } from '@adelerium/constants/paths';
import { Next } from '@adelerium/constants/presentation';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/constants';
import { usePathData } from '@adelerium/hooks/usePathData';
import { BoldParagraphType, BoldTypeAsButton } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useEffect, useState } from 'react';
import tw from 'twin.macro';

const defaultHeaderText = `Welcome`;

type HeaderProps = { disableToggle?: boolean };

export const Header = ({ disableToggle }: HeaderProps): ReactElement => {
  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
  } = useAppState();
  const dispatch = useAppDispatch();
  const { pathname, isIndex, pathData, isValidPath } = usePathData();
  const [headerTitle, setHeaderTitle] = useState<string>(defaultHeaderText);
  const [toggleIsVisible, setToggleIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const { text } = pathData || { text: notFoundPageTitleText };
    const newHeaderTitle = text !== homePageTitleText ? text : defaultHeaderText;
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
            !disableToggle && dispatch({ type: SET_VIEW, payload: { sideBar: { isVisible: !sideBarIsVisible } } })
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
          direction={Next}
        />
      </FlexRowWrapper>
    </FlexRowWrapper>
  );
};
