/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MediaLinkQuery
// ====================================================

export interface MediaLinkQuery_pinnedSong_displayImage_fluid {
  readonly base64: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp: string | null;
  readonly srcSetWebp: string | null;
  readonly sizes: string;
}

export interface MediaLinkQuery_pinnedSong_displayImage {
  readonly fluid: MediaLinkQuery_pinnedSong_displayImage_fluid | null;
}

export interface MediaLinkQuery_pinnedSong {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly date: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly displayImage: MediaLinkQuery_pinnedSong_displayImage | null;
  readonly accentColorHex: string | null;
}

export interface MediaLinkQuery_pinnedPodcast_displayImage_fluid {
  readonly base64: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp: string | null;
  readonly srcSetWebp: string | null;
  readonly sizes: string;
}

export interface MediaLinkQuery_pinnedPodcast_displayImage {
  readonly fluid: MediaLinkQuery_pinnedPodcast_displayImage_fluid | null;
}

export interface MediaLinkQuery_pinnedPodcast {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly date: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly displayImage: MediaLinkQuery_pinnedPodcast_displayImage | null;
  readonly accentColorHex: string | null;
}

export interface MediaLinkQuery_pinnedPlaylist_displayImage_fluid {
  readonly base64: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp: string | null;
  readonly srcSetWebp: string | null;
  readonly sizes: string;
}

export interface MediaLinkQuery_pinnedPlaylist_displayImage {
  readonly fluid: MediaLinkQuery_pinnedPlaylist_displayImage_fluid | null;
}

export interface MediaLinkQuery_pinnedPlaylist {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly date: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly displayImage: MediaLinkQuery_pinnedPlaylist_displayImage | null;
  readonly accentColorHex: string | null;
}

export interface MediaLinkQuery_mostPlayedSongThisWeek_displayImage_fluid {
  readonly base64: string | null;
  readonly aspectRatio: number;
  readonly src: string;
  readonly srcSet: string;
  readonly srcWebp: string | null;
  readonly srcSetWebp: string | null;
  readonly sizes: string;
}

export interface MediaLinkQuery_mostPlayedSongThisWeek_displayImage {
  readonly fluid: MediaLinkQuery_mostPlayedSongThisWeek_displayImage_fluid | null;
}

export interface MediaLinkQuery_mostPlayedSongThisWeek {
  readonly title: string | null;
  readonly subtitle: string | null;
  readonly description: string | null;
  readonly date: string | null;
  readonly type: string | null;
  readonly externalLink: string | null;
  readonly displayImage: MediaLinkQuery_mostPlayedSongThisWeek_displayImage | null;
  readonly accentColorHex: string | null;
}

export interface MediaLinkQuery {
  readonly pinnedSong: MediaLinkQuery_pinnedSong | null;
  readonly pinnedPodcast: MediaLinkQuery_pinnedPodcast | null;
  readonly pinnedPlaylist: MediaLinkQuery_pinnedPlaylist | null;
  readonly mostPlayedSongThisWeek: MediaLinkQuery_mostPlayedSongThisWeek | null;
}
