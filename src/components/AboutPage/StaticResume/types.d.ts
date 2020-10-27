import { TileDimensions } from '@adelerium/hooks/useAllTileDimensions/types';

export type StaticResumeProps = { dimensions: TileDimensions };

export type PropsAreEqualFunction = (prevProps: StaticResumeProps, nextProps: StaticResumeProps) => boolean;
