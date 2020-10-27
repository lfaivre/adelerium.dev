import { Arrow } from '@adelerium/components/Global/StyledInternalLink/styles';
import { PropsAreEqualFunction, StyledInternalLinkProps } from '@adelerium/components/Global/StyledInternalLink/types';
import { homePagePathname, sitePaths } from '@adelerium/constants/paths';
import { Previous } from '@adelerium/constants/presentation';
import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { usePathData } from '@adelerium/hooks/usePathData';
import { BoldParagraphType, NormalParagraphType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { Link, navigate } from 'gatsby';
import React, { MouseEvent, ReactElement } from 'react';
import tw from 'twin.macro';

const propsAreEqual: PropsAreEqualFunction = (prevProps, nextProps) => {
  return prevProps.direction === nextProps.direction;
};

export const StyledInternalLink = ({ direction }: StyledInternalLinkProps): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();

  const { pathData } = usePathData();

  const destinationPathname = !pathData ? homePagePathname : direction === Previous ? pathData.previous : pathData.next;

  const isPrevious = (): boolean => direction === Previous;

  const handlePageTransition = async (event: MouseEvent): Promise<void> => {
    event.preventDefault();
    dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: true } } });
    await navigate(destinationPathname);
  };

  return (
    <Link to={destinationPathname} onClick={handlePageTransition}>
      <FlexColumnWrapper alignItems={isPrevious() ? `items-end` : `items-start`} justifyContent="justify-center">
        <FlexRowWrapper alignItems="items-center" justifyContent={isPrevious() ? `justify-end` : `justify-start`}>
          <BoldParagraphType
            color={colors.secondary.default}
            defaultFontSize
            textAlign={isPrevious() ? `text-right` : `text-left`}
          >
            {isPrevious() ? `Previous` : `Next`}
          </BoldParagraphType>
        </FlexRowWrapper>
        <FlexRowWrapper reverse={!isPrevious()} alignItems="items-center" justifyContent="justify-between">
          <div css={[isPrevious() ? tw`mr-4` : tw`transform rotate-180 ml-4`]}>
            <Arrow direction={direction} backgroundColor={colors.secondary.default}>
              <span />
            </Arrow>
          </div>
          <NormalParagraphType
            color={colors.secondary.default}
            defaultFontSize
            textAlign={isPrevious() ? `text-right` : `text-left`}
          >
            {sitePaths[destinationPathname].text}
          </NormalParagraphType>
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </Link>
  );
};

export const MemoizedStyledInternalLink = React.memo(StyledInternalLink, propsAreEqual);
