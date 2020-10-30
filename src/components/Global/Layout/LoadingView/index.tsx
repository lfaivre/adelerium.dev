import { useAppDispatch, useAppState } from '@adelerium/hooks/app-state';
import { SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { BoldParagraphType } from '@adelerium/styles/text';
import { FlexRowWrapper } from '@adelerium/styles/wrappers';
import React, { ReactElement, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';
import 'twin.macro';

const staticLoadingText = `adelerium`;

export const LoadingView = (): ReactElement => {
  const {
    view: {
      loadingScreen: { isVisible: loadingScreenIsVisible },
    },
    theme: { colors },
  } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = loadingScreenIsVisible
      ? setTimeout(() => {
          dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: false } } });
        }, 2000)
      : undefined;

    return () => {
      if (timer !== undefined) {
        clearTimeout(timer);
      }
    };
  }, [loadingScreenIsVisible, dispatch]);

  const loadingViewTransitions = useTransition(loadingScreenIsVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return (
    <>
      {loadingViewTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div style={props} tw="absolute top-0 left-0 z-40 w-full h-full" key={key}>
              <FlexRowWrapper
                alignItems="items-center"
                justifyContent="justify-center"
                backgroundColor={colors.primary.default}
                tw="w-full h-full"
              >
                <BoldParagraphType color={colors.secondary.default} textAlign="text-left" tw="text-3xl md:text-4xl">
                  {staticLoadingText}
                </BoldParagraphType>
              </FlexRowWrapper>
            </animated.div>
          )
      )}
    </>
  );
};
