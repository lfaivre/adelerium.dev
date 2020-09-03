import { TPathname } from '../types/paths';

export const getStrippedInternalLink = (fullLink: string): TPathname => {
  const linkParts = fullLink.split('/');
  const pathname = `/${linkParts[3]}` as TPathname;
  return pathname;
};
