import { getRandomInt } from '../math';
import { getStrippedInternalLinkPath } from '../strings';

const PROTOCOL = `https`;
const DOMAIN = `www.adelerium.dev`;

describe('strings util: get a stripped internal link path', () => {
  it('returns an internal path from a full internal URL', () => {
    const FULL_URLS = [
      `${PROTOCOL}://${DOMAIN}/`,
      `${PROTOCOL}://${DOMAIN}/about`,
      `${PROTOCOL}://${DOMAIN}/projects`,
      `${PROTOCOL}://${DOMAIN}/blog`,
    ];

    const getCorrectStrippedLinkPath = (fullURL: string): string => {
      switch (fullURL) {
        case `${PROTOCOL}://${DOMAIN}/`: {
          return `/`;
        }
        case `${PROTOCOL}://${DOMAIN}/about`: {
          return `/about`;
        }
        case `${PROTOCOL}://${DOMAIN}/projects`: {
          return `/projects`;
        }
        case `${PROTOCOL}://${DOMAIN}/blog`: {
          return `/blog`;
        }
        default: {
          throw new Error(`Invalid full internal URL provided: ${fullURL}`);
        }
      }
    };

    const randomFullURL = FULL_URLS[getRandomInt(0, FULL_URLS.length - 1)];
    const correctStrippedLinkPath = getCorrectStrippedLinkPath(randomFullURL);
    const strippedLinkPathResult = getStrippedInternalLinkPath(randomFullURL);

    expect(strippedLinkPathResult).toEqual(correctStrippedLinkPath);
  });

  it('throws an error if an invalid full internal URL is provided', () => {
    const INVALID_FULL_URL_1 = `${PROTOCOL}://${DOMAIN}`;
    const INVALID_FULL_URL_2 = `http://${DOMAIN}`;
    const INVALID_FULL_URL_3 = `${PROTOCOL}://www.test.com`;
    const INVALID_FULL_URL_4 = `${PROTOCOL}//${DOMAIN}`;

    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_1)).toThrowError();
    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_2)).toThrowError();
    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_3)).toThrowError();
    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_4)).toThrowError();
  });
});
