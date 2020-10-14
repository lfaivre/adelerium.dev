import { MediaLink } from '../../../components/AboutPage/MediaLinkSquare/types';

import { data as PINNED_PODCAST_DATA } from './pinned-podcast';
import { data as PINNED_SONG_DATA } from './pinned-song';
import { data as MOST_PLAYED_SONG_DATA } from './most-played-song';
import { data as PINNED_PLAYLIST_DATA } from './pinned-playlist';

export const PINNED_PODCAST = `PINNED_PODCAST`;
export const PINNED_SONG = `PINNED_SONG`;
export const MOST_PLAYED_SONG = `MOST_PLAYED_SONG`;
export const PINNED_PLAYLIST = `PINNED_PLAYLIST`;

type MediaLinkKeys = typeof PINNED_PODCAST | typeof PINNED_SONG | typeof MOST_PLAYED_SONG | typeof PINNED_PLAYLIST;
type MediaLinks = { [key in MediaLinkKeys]: MediaLink };

export const mediaLinks: MediaLinks = {
  [PINNED_PODCAST]: PINNED_PODCAST_DATA,
  [PINNED_SONG]: PINNED_SONG_DATA,
  [MOST_PLAYED_SONG]: MOST_PLAYED_SONG_DATA,
  [PINNED_PLAYLIST]: PINNED_PLAYLIST_DATA,
};
