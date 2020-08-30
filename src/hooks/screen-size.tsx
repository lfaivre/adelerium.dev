import { useState, useEffect } from 'react';

const getWindowWidth = (): number => {
  return window && window.innerWidth ? window.innerWidth : 0;
};

export const useWindowWidth = (): number => {
  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth);

  const handleResize = (): void => {
    setWindowWidth(getWindowWidth);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (window) window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};
