import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { useAppState } from './app-state';

type TileSize = 1 | 2 | 3;

/*
 * 1: [1][1][1]
 * 2: [2---][1]
 * 3: [3------]
 */

type Dimensions = { width: number; height: number };
export type TileDimensions = Dimensions & { squareHeight: number };
type AllTileDimensions = { [key in TileSize]: TileDimensions };

type UseAllTileDimensionsConfiguration = { sizeOfGuttersInPx: number };
type UseAllTileDimensionsProps = { breakpoint: number };
type UseAllTileDimensionsState = AllTileDimensions;

const DEFAULT_NUM_OF_GUTTERS = 4;
const INITIAL_GUTTER_SIZE_IN_PX = 8;
const BREAKPOINT_GUTTER_SIZE_IN_PX = 16;

const initialUseAllTileDimensionsConfiguration: UseAllTileDimensionsConfiguration = {
  sizeOfGuttersInPx: INITIAL_GUTTER_SIZE_IN_PX,
};

const DEFAULT_TILE_SIZE = 1;

const initialAllTileDimensions: AllTileDimensions = {
  1: { width: -1, height: -1, squareHeight: -1 },
  2: { width: -1, height: -1, squareHeight: -1 },
  3: { width: -1, height: -1, squareHeight: -1 },
};

const normalizeDimension = (dimension: number): number => (dimension >= -1 ? dimension : -1);

export const useAllTileDimensions = ({ breakpoint }: UseAllTileDimensionsProps): UseAllTileDimensionsState => {
  const {
    dimensions: {
      layout: { width: layoutWidth },
    },
  } = useAppState();
  const [configuration, setConfiguration] = useImmer(initialUseAllTileDimensionsConfiguration);
  const [metBreakpoint, setMetBreakpoint] = useState(layoutWidth >= breakpoint);
  const [allTileDimensions, setAllTileDimensions] = useImmer(initialAllTileDimensions);

  useEffect(() => {
    setMetBreakpoint(layoutWidth >= breakpoint);
  }, [breakpoint, layoutWidth]);

  useEffect(() => {
    setConfiguration((draft) => {
      draft.sizeOfGuttersInPx = metBreakpoint ? BREAKPOINT_GUTTER_SIZE_IN_PX : INITIAL_GUTTER_SIZE_IN_PX;
    });
  }, [metBreakpoint, setConfiguration]);

  useEffect(() => {
    setAllTileDimensions((draft) => {
      const { sizeOfGuttersInPx } = configuration;
      const defaultDimension = metBreakpoint
        ? normalizeDimension((layoutWidth - sizeOfGuttersInPx * DEFAULT_NUM_OF_GUTTERS) / (3 / DEFAULT_TILE_SIZE))
        : normalizeDimension(
            layoutWidth - sizeOfGuttersInPx * DEFAULT_NUM_OF_GUTTERS + sizeOfGuttersInPx * (3 - DEFAULT_TILE_SIZE)
          );

      Object.keys(draft).forEach((key) => {
        const tileSize = (Number.parseInt(key, 10) as TileSize) || DEFAULT_TILE_SIZE;

        const dimension = normalizeDimension(
          (layoutWidth - sizeOfGuttersInPx * DEFAULT_NUM_OF_GUTTERS) / (3 / tileSize) +
            sizeOfGuttersInPx * (tileSize - DEFAULT_TILE_SIZE)
        );

        draft[tileSize].width = metBreakpoint ? dimension : defaultDimension;
        draft[tileSize].height = metBreakpoint ? defaultDimension : defaultDimension;
        draft[tileSize].squareHeight = metBreakpoint ? dimension : defaultDimension;
      });
    });
  }, [metBreakpoint, layoutWidth, configuration, setAllTileDimensions]);

  return allTileDimensions;
};
