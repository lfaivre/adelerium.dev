import React from 'react';
import tw from 'twin.macro';

export const Ul: React.FC = (props) => {
  return (
    <ul
      css={[tw`mb-4 last:mb-0 w-full list-disc list-inside`]}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};
