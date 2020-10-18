import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import 'twin.macro';

const handleSmoothScrollToTop = (): void => {
  if (typeof window !== `undefined`) window.scrollTo({ top: 0, behavior: `smooth` });
};

export const ReturnButton = (): ReactElement => {
  const [hoverIsActive, setHoverIsActive] = useState(false);

  const springStyles = useSpring({
    to: {
      opacity: hoverIsActive ? 1 : 0.25,
    },
    config: { ...config.default },
  });

  return (
    <FlexColumnWrapper
      onMouseOver={() => setHoverIsActive(true)}
      onMouseOut={() => setHoverIsActive(false)}
      alignItems="items-center"
      justifyContent="justify-center"
      tw="rounded-full w-16 h-16 overflow-hidden"
    >
      <animated.button
        type="button"
        aria-label="Return To Top"
        onClick={handleSmoothScrollToTop}
        style={springStyles}
        tw="focus:outline-none bg-offwhite w-full h-full"
      />
    </FlexColumnWrapper>
  );
};
