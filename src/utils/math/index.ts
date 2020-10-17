export const getRandomInt = (min: number, max: number): number => {
  const { ceil, floor, random } = Math;
  return floor(random() * (floor(max) - ceil(min) + 1)) + ceil(min);
};
