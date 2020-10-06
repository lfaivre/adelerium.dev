import React, { ReactElement, useLayoutEffect, useState } from 'react';
import 'twin.macro';

import { useAppState } from '../../../shared/hooks/global-state';
import { SCREEN_SIZE } from '../../../shared/constants/presentation';
import { BoldParagraphType } from '../../../shared/styles/text';

import { StaticIntroductionComponent } from './styles';

export const StaticIntroduction = (): ReactElement => {
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
    <StaticIntroductionComponent width={width} height={height} tw="mb-2 md:mb-0 bg-offpink p-8">
      <BoldParagraphType
        color="text-charcoal"
        textAlign="text-center"
        wordBreak="break-normal"
        tw="text-2xl md:text-4xl"
      >
        Hey, I’m Lorenzo. Welcome to adelerium.
      </BoldParagraphType>
    </StaticIntroductionComponent>
  );
};
