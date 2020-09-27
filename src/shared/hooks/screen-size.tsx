import { useState, useEffect } from 'react';

const getWindowWidth = (): number => {
  if (typeof window !== `undefined`) {
    return window.innerWidth ? window.innerWidth : 0;
  }
  return 0;
};

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(getWindowWidth);
    };

    if (window) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (window) window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};
