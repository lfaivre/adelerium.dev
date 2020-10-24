import { useDimensionsProps, useDimensionsState } from '@adelerium/hooks/useDimensions/types';
import { useEffect, useRef, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const initialState: useDimensionsState = { width: 0, height: 0 };

export const useDimensions = ({ ref }: useDimensionsProps): useDimensionsState => {
  const [dimensions, setDimensions] = useState(initialState);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  /** @todo Consider using useLayoutEffect (?) */

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { clientWidth, clientHeight } = entry.target;
        setDimensions({ width: clientWidth, height: clientHeight });
      });
    });

    if (ref.current) resizeObserverRef.current.observe(ref.current);

    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [ref]);

  return dimensions;
};
