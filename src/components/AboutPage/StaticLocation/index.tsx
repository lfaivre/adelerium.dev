import React, { ReactElement } from 'react';
import 'twin.macro';

import { TileDimensions } from '../../../shared/hooks/useAllTileDimensions';

import { BoldParagraphType } from '../../../shared/styles/text';

import { StaticLocationComponent } from './styles';

type StaticLocationProps = { dimensions: TileDimensions };

const StaticLocationText = `Now local to Phoenix, Arizona.`;

export const StaticLocation = ({
  dimensions: { width, height },
}: StaticLocationProps): ReactElement => {
  return (
    <StaticLocationComponent width={width} height={height} tw="mb-2 md:mb-0 bg-offpink p-8">
      <BoldParagraphType
        color="text-charcoal"
        textAlign="text-center"
        wordBreak="break-normal"
        tw="md:w-3/4 md:text-left text-2xl md:text-4xl"
      >
        {StaticLocationText}
      </BoldParagraphType>
    </StaticLocationComponent>
  );
};
