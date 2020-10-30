import { useAppState } from '@adelerium/hooks/app-state';
import { BoldParagraphType } from '@adelerium/styles/text';
import React from 'react';
import 'twin.macro';

const BoldParagraphTypeAsH1 = BoldParagraphType.withComponent(`h1`);
const BoldParagraphTypeAsH2 = BoldParagraphType.withComponent(`h2`);
const BoldParagraphTypeAsH3 = BoldParagraphType.withComponent(`h3`);
const BoldParagraphTypeAsH4 = BoldParagraphType.withComponent(`h4`);
const BoldParagraphTypeAsH5 = BoldParagraphType.withComponent(`h5`);
const BoldParagraphTypeAsH6 = BoldParagraphType.withComponent(`h6`);

export const H1: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldParagraphTypeAsH1
      color={colors.secondary.default}
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-4 text-2xl md:text-3xl"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export const H2: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldParagraphTypeAsH2
      color={colors.secondary.default}
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-4 text-xl md:text-2xl"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export const H3: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldParagraphTypeAsH3
      color={colors.secondary.default}
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-4 text-lg md:text-xl"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export const H4: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldParagraphTypeAsH4
      color={colors.secondary.default}
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-4 text-base md:text-lg"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export const H5: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldParagraphTypeAsH5
      color={colors.secondary.default}
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-4 text-sm md:text-base"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

export const H6: React.FC = (props) => {
  const {
    theme: { colors },
  } = useAppState();

  return (
    <BoldParagraphTypeAsH6
      color={colors.secondary.default}
      textAlign="text-left"
      wordBreak="break-normal"
      enableSelect
      tw="inline-block mb-4 text-xs md:text-sm"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
