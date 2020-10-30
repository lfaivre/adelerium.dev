import React from 'react';
import tw from 'twin.macro';

export const Li: React.FC = (props) => {
  return (
    <li
      css={[
        tw`mb-2 last:mb-0 w-full`,
        tw`leading-149 font-playfair-display font-normal text-sm md:text-base text-left break-normal`,
      ]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
