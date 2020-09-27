import { TPathname } from '../types/paths';

const PROTOCOL = `https`;
const DOMAIN = `www.adelerium.dev`;

export const getStrippedInternalLinkPath = (fullURL: string): TPathname => {
  const linkParts = fullURL.split(`/`);

  if (linkParts[0] !== `${PROTOCOL}:`) {
    throw new Error(
      `Invalid protocol provided:\nExpected: ${PROTOCOL}:\nReceived: ${linkParts[0]}`
    );
  }
  if (linkParts[2] !== DOMAIN) {
    throw new Error(`Invalid domain provided:\nExpected: ${DOMAIN}:\nReceived: ${linkParts[2]}`);
  }
  if (linkParts[1] !== `` || linkParts[3] === undefined) {
    throw new Error(
      `Invalid full internal URL provided. It should be in the form of: ${PROTOCOL}://${DOMAIN}/{PATH}`
    );
  }

  // @todo Assert result is actually a TPathname type
  const pathname = `/${linkParts[3]}` as TPathname;

  return pathname;
};
