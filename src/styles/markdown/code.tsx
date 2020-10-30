import React from 'react';
import tw from 'twin.macro';

export const Code: React.FC = (props) => {
  return (
    <code
      css={[tw`w-full`, tw`leading-149 font-mono font-normal text-sm md:text-base text-left break-normal`]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
