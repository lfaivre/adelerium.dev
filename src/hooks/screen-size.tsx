import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const getWindowWidth = () => {
    return typeof window !== 'undefined' ? window.innerWidth : undefined;
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    const handleResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowWidth;
};
