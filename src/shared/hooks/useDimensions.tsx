import { useRef, useState, useEffect, MutableRefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

type useDimensionsState = { width: number; height: number };

const initialState: useDimensionsState = { width: 0, height: 0 };

type useDimensionsProps = { ref: MutableRefObject<HTMLElement | null> };

export const useDimensions = ({ ref }: useDimensionsProps): useDimensionsState => {
  const [dimensions, setDimensions] = useState(initialState);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

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
