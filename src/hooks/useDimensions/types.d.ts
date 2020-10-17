import { MutableRefObject } from 'react';

export type useDimensionsState = { width: number; height: number };

export type useDimensionsProps = { ref: MutableRefObject<HTMLElement | null> };
