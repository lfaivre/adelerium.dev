import { websiteDomain, websiteProtocol } from '@adelerium/constants/site-metadata';
import { getRandomInt } from '@adelerium/utils/math';
import { getStrippedInternalLinkPath } from '@adelerium/utils/strings';

describe(`strings util: get a stripped internal link path`, () => {
  it(`returns an internal path from a full internal URL`, () => {
    const FULL_URLS = [
      `${websiteProtocol}://${websiteDomain}/`,
      `${websiteProtocol}://${websiteDomain}/about`,
      `${websiteProtocol}://${websiteDomain}/projects`,
    ];

    const getCorrectStrippedLinkPath = (fullURL: string): string => {
      switch (fullURL) {
        case `${websiteProtocol}://${websiteDomain}/`: {
          return `/`;
        }
        case `${websiteProtocol}://${websiteDomain}/about`: {
          return `/about`;
        }
        case `${websiteProtocol}://${websiteDomain}/projects`: {
          return `/projects`;
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

  it(`throws an error if an invalid full internal URL is provided`, () => {
    const INVALID_FULL_URL_1 = `${websiteProtocol}://${websiteDomain}`;
    const INVALID_FULL_URL_2 = `http://${websiteDomain}`;
    const INVALID_FULL_URL_3 = `${websiteProtocol}://www.test.com`;
    const INVALID_FULL_URL_4 = `${websiteProtocol}//${websiteDomain}`;

    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_1)).toThrowError();
    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_2)).toThrowError();
    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_3)).toThrowError();
    expect(() => getStrippedInternalLinkPath(INVALID_FULL_URL_4)).toThrowError();
  });
});
