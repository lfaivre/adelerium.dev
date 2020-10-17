import { StaticIntroductionComponent } from '@adelerium/components/AboutPage/StaticIntroduction/styles';
import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions';
import { BoldParagraphType } from '@adelerium/styles/text';
import React, { ReactElement } from 'react';
import 'twin.macro';

type StaticIntroductionProps = { dimensions: TileDimensions };

const staticIntroductionText = `Hey, I’m Lorenzo. Welcome to adelerium.`;

export const StaticIntroduction = ({ dimensions: { width, height } }: StaticIntroductionProps): ReactElement => {
  return (
    <StaticIntroductionComponent width={width} height={height} tw="mb-2 md:mb-0 p-4 lg:p-8">
      <BoldParagraphType
        color="text-offwhite"
        textAlign="text-center"
        wordBreak="break-normal"
        tw="w-full text-2xl md:text-3xl lg:text-4xl"
      >
        {staticIntroductionText}
      </BoldParagraphType>
    </StaticIntroductionComponent>
  );
};
