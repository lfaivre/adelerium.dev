import { getRandomInt } from '../math';

describe(`math util: get random integer`, () => {
  it(`returns a random integer within a specified range`, () => {
    const MIN_NUM = 0;
    const MAX_NUM = 120;

    const randomInt = getRandomInt(MIN_NUM, MAX_NUM);

    expect(randomInt).toBeGreaterThanOrEqual(MIN_NUM);
    expect(randomInt).toBeLessThanOrEqual(MAX_NUM);
  });
});
