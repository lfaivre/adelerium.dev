import { HeaderProps } from '@adelerium/components/Global/Header/types';
import { MemoizedStyledInternalLink } from '@adelerium/components/Global/StyledInternalLink';
import { homePageTitleText, notFoundPageTitleText } from '@adelerium/constants/paths';
import { Next } from '@adelerium/constants/presentation';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { usePathData } from '@adelerium/hooks/usePathData';
import { BoldParagraphType, BoldTypeAsButton } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useCallback, useState } from 'react';
import tw from 'twin.macro';

const defaultHeaderText = `Welcome`;
const staticToggleText = `Toggle Navigation (T)`;

export const Header = ({ disableToggle }: HeaderProps): ReactElement => {
  const {
    view: {
      sideBar: { isVisible: sideBarIsVisible },
    },
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();

  const { pathData } = usePathData();

  const [toggleIsVisible, setToggleIsVisible] = useState(false);

  const headerTitle = useCallback(
    () =>
      pathData && pathData.text
        ? `${pathData.text !== homePageTitleText ? pathData.text : defaultHeaderText}.`
        : `${notFoundPageTitleText}.`,
    [pathData]
  );

  return (
    <FlexRowWrapper alignItems="items-center" justifyContent="justify-between" tw="w-full h-full">
      <FlexRowWrapper
        onMouseOver={() => !disableToggle && setToggleIsVisible(true)}
        onMouseOut={() => setToggleIsVisible(false)}
        alignItems="items-center"
        justifyContent="justify-start"
        tw="relative w-1/2 h-full"
      >
        <BoldParagraphType
          color={colors.secondary.default}
          textAlign="text-left"
          css={[
            tw`z-0 transition-opacity duration-300 ease-in-out text-3xl md:text-4xl`,
            toggleIsVisible && tw`opacity-0`,
          ]}
          aria-label="Toggle Side Bar Navigation"
        >
          {headerTitle()}
        </BoldParagraphType>
        <BoldTypeAsButton
          disabled={disableToggle}
          color={colors.secondary.default}
          defaultFontSize
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
          {staticToggleText}
        </BoldTypeAsButton>
      </FlexRowWrapper>
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-end" tw="w-1/2 h-full">
        <MemoizedStyledInternalLink direction={Next} />
      </FlexRowWrapper>
    </FlexRowWrapper>
  );
};
