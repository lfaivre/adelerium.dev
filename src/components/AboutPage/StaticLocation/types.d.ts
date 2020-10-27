import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type StaticLocationProps = { dimensions: TileDimensions };

export type PropsAreEqualFunction = (prevProps: StaticLocationProps, nextProps: StaticLocationProps) => boolean;
