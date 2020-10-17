import { useAppState } from '@adelerium/hooks/app-state';
import {
  AllTileDimensions,
  TileSize,
  UseAllTileDimensionsConfiguration,
  UseAllTileDimensionsProps,
  UseAllTileDimensionsState,
} from '@adelerium/hooks/useAllTileDimensions/types';
import { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';

/**
 * @note Tile Size Diagram
 *
 * 1: [1][1][1]
 * 2: [2---][1]
 * 3: [3------]
 */

const defaultNumberOfGutters = 4;
const initialGutterSizeInPx = 8;
const breakpointGutterSizeInPx = 16;

const initialUseAllTileDimensionsConfiguration: UseAllTileDimensionsConfiguration = {
  sizeOfGuttersInPx: initialGutterSizeInPx,
};

const defaultTileSize = 1;

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
      draft.sizeOfGuttersInPx = metBreakpoint ? breakpointGutterSizeInPx : initialGutterSizeInPx;
    });
  }, [metBreakpoint, setConfiguration]);

  useEffect(() => {
    setAllTileDimensions((draft) => {
      const { sizeOfGuttersInPx } = configuration;
      const defaultDimension = metBreakpoint
        ? normalizeDimension((layoutWidth - sizeOfGuttersInPx * defaultNumberOfGutters) / (3 / defaultTileSize))
        : normalizeDimension(
            layoutWidth - sizeOfGuttersInPx * defaultNumberOfGutters + sizeOfGuttersInPx * (3 - defaultTileSize)
          );

      Object.keys(draft).forEach((key) => {
        const tileSize = (Number.parseInt(key, 10) as TileSize) || defaultTileSize;

        const dimension = normalizeDimension(
          (layoutWidth - sizeOfGuttersInPx * defaultNumberOfGutters) / (3 / tileSize) +
            sizeOfGuttersInPx * (tileSize - defaultTileSize)
        );

        draft[tileSize].width = metBreakpoint ? dimension : defaultDimension;
        draft[tileSize].height = metBreakpoint ? defaultDimension : defaultDimension;
        draft[tileSize].squareHeight = metBreakpoint ? dimension : defaultDimension;
      });
    });
  }, [metBreakpoint, layoutWidth, configuration, setAllTileDimensions]);

  return allTileDimensions;
};
