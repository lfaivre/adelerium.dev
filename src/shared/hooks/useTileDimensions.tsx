import { useState, useReducer, useEffect } from 'react';

import { SCREEN_SIZE } from '../constants/presentation';

type Dimensions = { width: number; height: number };
type TileDimensions = { oneThird: Dimensions; twoThirds: Dimensions; full: Dimensions };
type useTileDimensionsProps = { layoutWidth: number };
type useTileDimensionsState = TileDimensions;

const initialTileDimensions: TileDimensions = {
  oneThird: { width: 0, height: 0 },
  twoThirds: { width: 0, height: 0 },
  full: { width: 0, height: 0 },
};

export const useTileDimensions = ({
  layoutWidth,
}: useTileDimensionsProps): useTileDimensionsState => {
  const [dimensions, setDimensions] = useState(initialTileDimensions);

  return dimensions;
};
