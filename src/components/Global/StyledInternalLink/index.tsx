import { Link } from 'gatsby';
import React, { ReactElement, useEffect, useState } from 'react';
import 'twin.macro';
import { homePagePathname, sitePaths } from '../../../shared/constants/paths';
import { Previous } from '../../../shared/constants/presentation';
import { PathDataState } from '../../../shared/hooks/usePathData';
import { BoldParagraphType, NormalParagraphType } from '../../../shared/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '../../../shared/styles/wrappers';
import { StyledInternalLinkDirection } from '../../../shared/types/presentation';
import { Arrow } from './styles';

type StyledInternalLinkProps = PathDataState & { direction: StyledInternalLinkDirection };

export const StyledInternalLink = ({ pathData, direction }: StyledInternalLinkProps): ReactElement => {
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

  return (
    <Link to={destinationPathname}>
      <FlexColumnWrapper alignItems={isPrevious() ? `items-end` : `items-start`} justifyContent="justify-center">
        <FlexRowWrapper alignItems="items-center" justifyContent={isPrevious() ? `justify-end` : `justify-start`}>
          <BoldParagraphType color="text-charcoal" textAlign={isPrevious() ? `text-right` : `text-left`}>
            {isPrevious() ? `Previous` : `Next`}
          </BoldParagraphType>
        </FlexRowWrapper>
        <FlexRowWrapper reverse={!isPrevious()} alignItems="items-center" justifyContent="justify-between">
          {isPrevious() ? (
            <div tw="mr-4">
              <Arrow direction={direction} backgroundColor="bg-charcoal">
                <span />
              </Arrow>
            </div>
          ) : (
            <div tw="transform rotate-180 ml-4">
              <Arrow direction={direction} backgroundColor="bg-charcoal">
                <span />
              </Arrow>
            </div>
          )}
          <NormalParagraphType color="text-charcoal" textAlign={isPrevious() ? `text-right` : `text-left`}>
            {sitePaths[destinationPathname].text}
          </NormalParagraphType>
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </Link>
  );
};
