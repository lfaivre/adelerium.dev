import { SocialLinkQuery_socialLinks_nodes as ContentfulSocialLink } from '@adelerium/@types/__generated__/SocialLinkQuery';
import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type SocialLinkSquareProps = { data: ContentfulSocialLink; dimensions: TileDimensions };
