import { useAppState } from '@adelerium/hooks/app-state';
import { NormalParagraphType } from '@adelerium/styles/text';
import React from 'react';
import 'twin.macro';

export const Paragraph: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <NormalParagraphType
      color={colors.secondary.default}
      defaultFontSize
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-2"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
