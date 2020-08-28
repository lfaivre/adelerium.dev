import { useState, useEffect } from 'react';

type WindowWidth = number | undefined;

const getWindowWidth = (): WindowWidth => {
  const newWindowWidth =
    window && window.innerWidth ? window.innerWidth : undefined;
  console.log(`NEW WINDOW WIDTH: ${newWindowWidth || 'UNDEFINED'}`);
  return newWindowWidth;
};

export const useWindowWidth = (): WindowWidth => {
  const [windowWidth, setWindowWidth] = useState<WindowWidth>(getWindowWidth());

  useEffect(() => {
    const handleResize = (): void => {
      // const newWindowWidth = getWindowWidth();
      setWindowWidth(getWindowWidth());
    };

    if (window) window.addEventListener('resize', handleResize);

    return () => {
      if (window) window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(`WINDOW WIDTH MODIFIED: ${windowWidth || 'UNDEFINED'}`);
  }, [windowWidth]);

  return windowWidth;
};
