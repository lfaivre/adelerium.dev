import React, { ReactElement, useLayoutEffect, useState } from 'react';
import 'twin.macro';

import { useAppState } from '../../../shared/hooks/global-state';
import { SCREEN_SIZE } from '../../../shared/constants/presentation';
import { BoldParagraphType } from '../../../shared/styles/text';

import { StaticLocationComponent } from './styles';

const TILE_TEXT = `Now local to Phoenix, Arizona.`;

export const StaticLocation = (): ReactElement => {
  const { layoutWidth } = useAppState();

  const [size, setSize] = useState<number>(0);

  useLayoutEffect(() => {
    const sizeDivisor = layoutWidth >= SCREEN_SIZE.MD ? 3 : 1;
    const numberOfGutters = layoutWidth >= SCREEN_SIZE.MD ? 4 : 2;
    const sizeOfGutters = layoutWidth >= SCREEN_SIZE.MD ? 16 : 8;

    const calculatedSize = (layoutWidth - numberOfGutters * sizeOfGutters) / sizeDivisor;
    const newSize = calculatedSize > 0 ? calculatedSize : 0;
    setSize(newSize);
  }, [layoutWidth]);

  return (
    <StaticLocationComponent width={size} height={size} tw="mb-2 md:mb-0 p-8">
      <BoldParagraphType
        color="text-offwhite"
        textAlign="text-center"
        wordBreak="break-normal"
        tw="md:w-3/4 md:text-left text-2xl md:text-4xl"
      >
        {TILE_TEXT}
      </BoldParagraphType>
    </StaticLocationComponent>
  );
};
