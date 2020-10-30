import React from 'react';
import tw, { css } from 'twin.macro';

/** @todo Source colors from app-state theme */

export const InlineCode: React.FC = (props) => {
  return (
    <code
      css={[
        css`
          background-color: #181a1b;
        `,
        tw`p-1`,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
