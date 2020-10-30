import React from 'react';
import tw, { css } from 'twin.macro';

/** @todo Source colors from app-state theme */

export const Pre: React.FC = (props) => {
  return (
    <pre
      css={[
        css`
          background-color: #181a1b;
        `,
        tw`mb-4 p-4 w-full overflow-x-scroll`,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
