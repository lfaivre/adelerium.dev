import { WindowDimensionsState } from '@adelerium/hooks/useWindowDimensions/types';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

const getWindowDimensions = (): WindowDimensionsState => {
  if (typeof window === `undefined`) return { width: 0, height: 0 };
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const useWindowDimensions = (): WindowDimensionsState => {
  const [windowDimensions, setWindowDimensions] = useImmer<WindowDimensionsState>(() => getWindowDimensions());

  useEffect(() => {
    const updateWindowDimensions = (): void => {
      const { width, height } = getWindowDimensions();

      setWindowDimensions((draft) => {
        draft.width = width;
        draft.height = height;
      });
    };

    if (typeof window !== `undefined`) window.addEventListener(`resize`, updateWindowDimensions);

    return () => {
      if (typeof window !== `undefined`) window.removeEventListener(`resize`, updateWindowDimensions);
    };
  }, [setWindowDimensions]);

  return windowDimensions;
};
