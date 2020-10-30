import { useAppState } from '@adelerium/hooks/app-state';
import { BoldType } from '@adelerium/styles/text';
import React from 'react';
import 'twin.macro';

const BoldTypeAsStrong = BoldType.withComponent(`strong`);

export const Strong: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldTypeAsStrong
      color={colors.secondary.default}
      defaultFontSize
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
