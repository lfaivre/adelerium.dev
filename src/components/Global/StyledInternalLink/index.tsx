import { Arrow } from '@adelerium/components/Global/StyledInternalLink/styles';
import { StyledInternalLinkProps } from '@adelerium/components/Global/StyledInternalLink/types';
import { homePagePathname, sitePaths } from '@adelerium/constants/paths';
import { Previous } from '@adelerium/constants/presentation';
import { useAppDispatch } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { BoldParagraphType, NormalParagraphType } from '@adelerium/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '@adelerium/styles/wrappers';
import { Link, navigate } from 'gatsby';
import React, { MouseEvent, ReactElement, useEffect, useState } from 'react';
import 'twin.macro';

export const StyledInternalLink = ({ pathData, direction }: StyledInternalLinkProps): ReactElement => {
  const dispatch = useAppDispatch();
  const [destinationPathname, setDestinationPathname] = useState(homePagePathname);

  const isPrevious = (): boolean => direction === Previous;

  useEffect(() => {
    const newDestinationPathname = !pathData
      ? homePagePathname
      : direction === Previous
      ? pathData.previous
      : pathData.next;
    setDestinationPathname(newDestinationPathname);
  }, [pathData, direction]);

  const handlePageTransition = async (event: MouseEvent): Promise<void> => {
    event.preventDefault();
    dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: true } } });
    await navigate(destinationPathname);
  };

  return (
    <Link to={destinationPathname} onClick={(e) => handlePageTransition(e)}>
      <FlexColumnWrapper alignItems={isPrevious() ? `items-end` : `items-start`} justifyContent="justify-center">
        <FlexRowWrapper alignItems="items-center" justifyContent={isPrevious() ? `justify-end` : `justify-start`}>
          <BoldParagraphType color="text-offwhite" textAlign={isPrevious() ? `text-right` : `text-left`}>
            {isPrevious() ? `Previous` : `Next`}
          </BoldParagraphType>
        </FlexRowWrapper>
        <FlexRowWrapper reverse={!isPrevious()} alignItems="items-center" justifyContent="justify-between">
          {isPrevious() ? (
            <div tw="mr-4">
              <Arrow direction={direction} backgroundColor="bg-offwhite">
                <span />
              </Arrow>
            </div>
          ) : (
            <div tw="transform rotate-180 ml-4">
              <Arrow direction={direction} backgroundColor="bg-offwhite">
                <span />
              </Arrow>
            </div>
          )}
          <NormalParagraphType color="text-offwhite" textAlign={isPrevious() ? `text-right` : `text-left`}>
            {sitePaths[destinationPathname].text}
          </NormalParagraphType>
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </Link>
  );
};
