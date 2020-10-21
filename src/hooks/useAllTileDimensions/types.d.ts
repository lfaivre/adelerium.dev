export type TileSize = 1 | 2 | 3;

export type Dimensions = { width: number; height: number };

export type TileDimensions = Dimensions & { squareHeight: number; maxHeight: number };

export type AllTileDimensions = { [key in TileSize]: TileDimensions };

export type UseAllTileDimensionsConfiguration = { sizeOfGuttersInPx: number };

export type UseAllTileDimensionsProps = { breakpoint: number };

export type UseAllTileDimensionsState = AllTileDimensions;
