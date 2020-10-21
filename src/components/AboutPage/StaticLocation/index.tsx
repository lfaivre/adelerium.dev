import { StaticLocationComponent } from '@adelerium/components/AboutPage/StaticLocation/styles';
import { StaticLocationProps } from '@adelerium/components/AboutPage/StaticLocation/types';
import { BoldParagraphType } from '@adelerium/styles/text';
import React, { ReactElement } from 'react';
import tw, { css } from 'twin.macro';

const staticLocationText = `Now local to Phoenix, Arizona.`;

export const StaticLocation = ({ dimensions: { width, height, maxHeight } }: StaticLocationProps): ReactElement => {
  const maxHeightStyles = css`
    max-height: ${maxHeight}px;
  `;

  return (
    <StaticLocationComponent
      width={width}
      height={height}
      css={[maxHeight !== -1 && maxHeightStyles, tw`mb-2 xl:mb-0 p-4 lg:p-8`]}
    >
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
