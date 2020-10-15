import React, { ReactElement } from 'react';
import 'twin.macro';
import { TileDimensions } from '../../../shared/hooks/useAllTileDimensions';
import { BoldParagraphType } from '../../../shared/styles/text';
import { StaticLocationComponent } from './styles';

type StaticLocationProps = { dimensions: TileDimensions };

const staticLocationText = `Now local to Phoenix, Arizona.`;

export const StaticLocation = ({ dimensions: { width, height } }: StaticLocationProps): ReactElement => {
  return (
    <StaticLocationComponent width={width} height={height} tw="mb-2 md:mb-0 p-4 lg:p-8">
      <BoldParagraphType
        color="text-offwhite"
        textAlign="text-center"
        wordBreak="break-normal"
        tw="w-full lg:w-3/4 lg:text-left text-2xl md:text-3xl lg:text-4xl"
      >
        {staticLocationText}
      </BoldParagraphType>
    </StaticLocationComponent>
  );
};
