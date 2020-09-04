export interface ILinkFields {
  /** Title */
  title: string;

  /** Type */
  type: 'internal' | 'external';

  /** Destination */
  destination: string;

  /** Display Text */
  displayText: string;
}

/** Link entity used in portfolio website (https://www.adelerium.dev/). */

export interface ILink extends ILinkFields {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'link';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}
