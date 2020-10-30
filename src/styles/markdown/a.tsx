import { useAppState } from '@adelerium/hooks/app-state';
import { BoldParagraphType } from '@adelerium/styles/text';
import React from 'react';
import 'twin.macro';

const BoldParagraphTypeAsAnchor = BoldParagraphType.withComponent(`a`);

export const A: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldParagraphTypeAsAnchor
      color={colors.secondary.default}
      defaultFontSize
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-2 underline"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
