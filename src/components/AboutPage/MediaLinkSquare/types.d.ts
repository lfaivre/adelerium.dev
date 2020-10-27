import { MediaLinkData as ContentfulMediaLink } from '@adelerium/@types/__generated__/MediaLinkData';
import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type MediaLinkSquareProps = { data: ContentfulMediaLink; dimensions: TileDimensions };

export type PropsAreEqualFunction = (prevProps: MediaLinkSquareProps, nextProps: MediaLinkSquareProps) => boolean;
