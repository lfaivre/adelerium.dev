import { ContextSwitchButtonProps } from '@adelerium/components/Global/SideBar/ContextSwitchButton/types';
import { InternalLinks } from '@adelerium/constants/presentation';
import { useAppState } from '@adelerium/hooks/app-state';
import { AccentType } from '@adelerium/styles/text';
import React, { ReactElement } from 'react';
import { animated, config, useSpring } from 'react-spring';
import 'twin.macro';

const AnimatedAccentType = animated(AccentType);

export const ContextSwitchButton = ({ type, currentView, setView, text }: ContextSwitchButtonProps): ReactElement => {
  const {
    theme: { colors },
  } = useAppState();

  /** @note React Spring Styles */

  const buttonSpringStyles = useSpring({
    to: { backgroundColor: type === currentView ? colors.primary.default : `#ffffff00` },
    config: { ...config.default },
  });

  const textSpringStyles = useSpring({
    to: { WebkitTextStrokeColor: type === currentView ? colors.secondary.default : colors.primary.default },
    config: { ...config.default },
  });

  return (
    <animated.button
      onClick={() => setView(type)}
      type="button"
      aria-label={`See ${type === InternalLinks ? `Internal` : `External`} Links`}
      style={buttonSpringStyles}
      tw="mr-8 last:mr-0 focus:outline-none rounded-full w-16 h-16"
    >
      <AnimatedAccentType style={textSpringStyles} color="transparent" tw="text-4xl">
        {text}
      </AnimatedAccentType>
    </animated.button>
  );
};
