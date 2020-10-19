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
  } = useAppState();
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.style.overflowY = `hidden`;

    const timer = setTimeout(() => {
      dispatch({ type: SET_VIEW, payload: { loadingScreen: { isVisible: false } } });
    }, 2000);

    return () => clearTimeout(timer);
  }, [loadingScreenIsVisible, dispatch]);

  const transitions = useTransition(loadingScreenIsVisible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onDestroyed: () => {
      document.body.style.overflowY = `scroll`;
    },
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} tw="absolute top-0 left-0 z-40 w-full h-full">
              <FlexRowWrapper
                alignItems="items-center"
                justifyContent="justify-center"
                backgroundColor="bg-charcoal"
                tw="w-full h-full"
              >
                <BoldParagraphType color="text-offwhite" textAlign="text-left" tw="text-3xl md:text-4xl">
                  {staticLoadingText}
                </BoldParagraphType>
              </FlexRowWrapper>
            </animated.div>
          )
      )}
    </>
  );
};
