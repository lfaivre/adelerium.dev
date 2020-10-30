import React from 'react';
import tw, { css } from 'twin.macro';

export const Ol: React.FC = (props) => {
  return (
    <ol
      css={[
        css`
          li::marker {
            ${tw`leading-149 font-helvetica font-bold text-sm md:text-base text-left truncate`}
          }
        `,
        tw`mb-4 last:mb-0 w-full list-decimal list-inside`,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
