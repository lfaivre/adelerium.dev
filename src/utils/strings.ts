import { websiteDomain, websiteProtocol } from '@adelerium/constants/site-metadata';

export const getStrippedInternalLinkPath = (fullURL: string): string => {
  const linkParts = fullURL.split(`/`);

  if (linkParts[0] !== `${websiteProtocol}:`) {
    throw new Error(`Invalid protocol provided:\nExpected: ${websiteProtocol}:\nReceived: ${linkParts[0]}`);
  }
  if (linkParts[2] !== websiteDomain) {
    throw new Error(`Invalid domain provided:\nExpected: ${websiteDomain}:\nReceived: ${linkParts[2]}`);
  }
  if (linkParts[1] !== `` || linkParts[3] === undefined) {
    throw new Error(
      `Invalid full internal URL provided. It should be in the form of: ${websiteProtocol}://${websiteDomain}/{PATH}`
    );
  }

  const pathname = `/${linkParts[3]}`;

  return pathname;
};
