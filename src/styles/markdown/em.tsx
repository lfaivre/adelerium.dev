import { useAppState } from '@adelerium/hooks/app-state';
import { NormalParagraphType } from '@adelerium/styles/text';
import React from 'react';
import 'twin.macro';

const NormalParagraphTypeAsEmphasis = NormalParagraphType.withComponent(`em`);

export const Em: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <NormalParagraphTypeAsEmphasis
      color={colors.secondary.default}
      defaultFontSize
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-2 italic"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
