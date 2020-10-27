import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type BrandingSectionProps = { dimensions: TileDimensions };

export type PropsAreEqualFunction = (prevProps: BrandingSectionProps, nextProps: BrandingSectionProps) => boolean;
