export const getRandomInt = (min: number, max: number): number => {
  const adjustedMin = Math.ceil(min);
  const adjustedMax = Math.floor(max);
  return Math.floor(Math.random() * (adjustedMax - adjustedMin + 1)) + adjustedMin;
};
