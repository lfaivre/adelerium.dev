import React, { ReactElement, useLayoutEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons/faGoogleDrive';
import 'twin.macro';

import { useAppState } from '../../../shared/hooks/global-state';
import { SCREEN_SIZE } from '../../../shared/constants/presentation';
import { FlexRowWrapper } from '../../../shared/styles/wrappers';
import { BoldParagraphType, BoldTypeAsAnchor } from '../../../shared/styles/text';

import { StaticResumeComponent } from './styles';

const TILE_TEXT = `Are you looking to hire? Here’s my resume.`;
const LINK_TEXT = `View on Google Drive`;

// @todo Source link from Contentful
const RESUME_LINK = `https://github.com`;

export const StaticResume = (): ReactElement => {
  const { layoutWidth } = useAppState();

  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    const sizeDivisor = layoutWidth >= SCREEN_SIZE.MD ? 3 : 1;
    const numberOfGutters = layoutWidth >= SCREEN_SIZE.MD ? 4 : 2;
    const sizeOfGutters = layoutWidth >= SCREEN_SIZE.MD ? 16 : 8;

    const calculatedHeight = (layoutWidth - numberOfGutters * sizeOfGutters) / sizeDivisor;
    const newHeight = calculatedHeight > 0 ? calculatedHeight : 0;
    setHeight(newHeight);

    const newWidth = layoutWidth >= SCREEN_SIZE.MD ? 2 * newHeight + 1 * sizeOfGutters : -1;
    setWidth(newWidth);
  }, [layoutWidth]);

  return (
    <StaticResumeComponent width={width} height={height} tw="mb-2 md:mb-0 bg-offwhite p-8">
      <BoldParagraphType
        color="text-charcoal"
        textAlign="text-center"
        wordBreak="break-normal"
        tw="mb-8 md:mb-0 md:mt-4 text-2xl md:text-4xl"
      >
        {TILE_TEXT}
      </BoldParagraphType>
      <FlexRowWrapper alignItems="items-center" justifyContent="justify-start" tw="md:mb-4">
        <FontAwesomeIcon icon={faGoogleDrive} size="2x" tw="mr-4" />
        <BoldTypeAsAnchor
          href={RESUME_LINK}
          label={RESUME_LINK}
          color="text-charcoal"
          tw="uppercase"
        >
          {LINK_TEXT}
        </BoldTypeAsAnchor>
      </FlexRowWrapper>
    </StaticResumeComponent>
  );
};
