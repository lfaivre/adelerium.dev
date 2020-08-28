export const handleScroll = (): void => {
  if (window) window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};
