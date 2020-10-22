import { StaticLocationProps } from '@adelerium/components/AboutPage/StaticLocation/types';
import { useAppState } from '@adelerium/hooks/app-state';
import { BoldParagraphType } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement } from 'react';
import tw, { css } from 'twin.macro';

const staticLocationText = `Now local to Phoenix, Arizona.`;

export const StaticLocation = ({ dimensions: { width, height, maxHeight } }: StaticLocationProps): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <FlexRowWrapper
      alignItems="items-center"
      justifyContent="justify-center"
      css={[
        css`
          width: ${width !== -1 ? `${width}px` : `100%`};
          height: ${height !== -1 ? `${height}px` : `auto`};
          max-height: ${maxHeight !== -1 ? `${maxHeight}px` : `none`};
        `,
        tw`mb-2 xl:mb-0 p-4 lg:p-8`,
      ]}
    >
      <BoldParagraphType
        color={colors.secondary.default}
        textAlign="text-center"
        wordBreak="break-normal"
        tw="w-full xl:w-3/4 xl:text-left text-2xl md:text-2xl lg:text-3xl"
      >
        {staticLocationText}
      </BoldParagraphType>
    </FlexRowWrapper>
  );
};
