import { MediaLinkQuery_mediaLinks_nodes as ContentfulMediaLink } from '@adelerium/@types/__generated__/MediaLinkQuery';
import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type MediaLinkSquareProps = { data: ContentfulMediaLink; dimensions: TileDimensions };
