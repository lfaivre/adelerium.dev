import { useAppState } from '@adelerium/hooks/app-state';
import { FlexColumnWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import tw, { css } from 'twin.macro';

const handleSmoothScrollToTop = (): void => {
  if (typeof window !== `undefined`) window.scrollTo({ top: 0, behavior: `smooth` });
};

export const ReturnButton = (): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();
  const [hoverIsActive, setHoverIsActive] = useState(false);

  const springStyles = useSpring({
    to: {
      opacity: hoverIsActive ? 1 : 0.25,
    },
    config: { ...config.molasses },
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
        onClick={handleSmoothScrollToTop}
        type="button"
        aria-label="Return To Top"
        style={springStyles}
        css={[
          css`
            background-color: ${colors.secondary.default};
          `,
          tw`focus:outline-none w-full h-full`,
        ]}
      />
    </FlexColumnWrapper>
  );
};
