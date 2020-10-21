import { useAppState } from '@adelerium/hooks/app-state';
import { useElementInViewProps } from '@adelerium/hooks/useElementInView/types';
import { useEffect, useState } from 'react';

export const useElementInView = ({ ref }: useElementInViewProps): boolean => {
  const [elementInView, setElementInView] = useState(false);

  const {
    dimensions: {
      appWindow: { height: windowHeight },
    },
  } = useAppState();

  useEffect(() => {
    const handleBoundsOnScroll = (): void => {
      if (!(ref && ref.current)) return;
      const { top: componentTop, bottom: componentBottom } = ref.current.getBoundingClientRect();
      const windowHeightMidpoint = windowHeight / 2;
      setElementInView(componentTop <= windowHeightMidpoint && componentBottom >= windowHeightMidpoint);
    };

    if (typeof window !== `undefined`) window.addEventListener(`scroll`, handleBoundsOnScroll, { passive: true });
    return () => window.removeEventListener(`scroll`, handleBoundsOnScroll);
  }, [ref, windowHeight]);

  return elementInView;
};
