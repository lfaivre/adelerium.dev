import { Link } from 'gatsby';
import React, { ReactElement, useEffect, useState } from 'react';
import 'twin.macro';
import { SitePaths } from '../../../shared/constants/paths';
import { BoldParagraphType, NormalParagraphType } from '../../../shared/styles/text';
import { FlexColumnWrapper, FlexRowWrapper } from '../../../shared/styles/wrappers';
import { INDEX, PathDataHook, TPathname } from '../../../shared/types/paths';
import { InternalLinkDirection } from '../../../shared/types/presentation';
import { Arrow } from './styles';

const PREVIOUS = `Previous` as const;
const NEXT = `Next` as const;

type StyledInternalLinkProps = PathDataHook & { direction: InternalLinkDirection };

export const StyledInternalLink = ({ pathData, direction }: StyledInternalLinkProps): ReactElement => {
  const [destinationPathname, setDestinationPathname] = useState<TPathname>(INDEX);

  const isPrevious = (): boolean => {
    return direction === InternalLinkDirection.Previous;
  };

  useEffect(() => {
    const newDestinationPathname = !pathData
      ? INDEX
      : direction === InternalLinkDirection.Previous
      ? pathData.previous
      : pathData.next;
    setDestinationPathname(newDestinationPathname);
  }, [pathData, direction]);

  return (
    <Link to={destinationPathname}>
      <FlexColumnWrapper alignItems={isPrevious() ? `items-end` : `items-start`} justifyContent="justify-center">
        <FlexRowWrapper alignItems="items-center" justifyContent={isPrevious() ? `justify-end` : `justify-start`}>
          <BoldParagraphType color="text-charcoal" textAlign={isPrevious() ? `text-right` : `text-left`}>
            {isPrevious() ? PREVIOUS : NEXT}
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
            {SitePaths[destinationPathname].text}
          </NormalParagraphType>
        </FlexRowWrapper>
      </FlexColumnWrapper>
    </Link>
  );
};
