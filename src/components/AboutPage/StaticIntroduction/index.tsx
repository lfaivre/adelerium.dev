import React, { ReactElement } from 'react';
import 'twin.macro';

import { TileDimensions } from '../../../shared/hooks/useAllTileDimensions';

import { BoldParagraphType } from '../../../shared/styles/text';

import { StaticIntroductionComponent } from './styles';

type StaticIntroductionProps = { dimensions: TileDimensions };

const StaticIntroductionText = `Hey, I’m Lorenzo. Welcome to adelerium.`;

export const StaticIntroduction = ({
  dimensions: { width, height },
}: StaticIntroductionProps): ReactElement => {
  return (
    <StaticIntroductionComponent width={width} height={height} tw="mb-2 md:mb-0 bg-offpink p-8">
      <BoldParagraphType
        color="text-charcoal"
        textAlign="text-center"
        wordBreak="break-normal"
        tw="text-2xl md:text-4xl"
      >
        {StaticIntroductionText}
      </BoldParagraphType>
    </StaticIntroductionComponent>
  );
};
