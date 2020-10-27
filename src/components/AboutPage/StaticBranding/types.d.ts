import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type StaticBrandingProps = { dimensions: TileDimensions };

export type PropsAreEqualFunction = (prevProps: StaticBrandingProps, nextProps: StaticBrandingProps) => boolean;
