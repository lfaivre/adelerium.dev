import { ReactElement } from 'react';
import { SET_DIMENSIONS, SET_VIEW } from './constants';

/** @note Reducer Actions */

export type Action =
  | { type: typeof SET_VIEW; payload: Partial<ElementViewState> }
  | { type: typeof SET_DIMENSIONS; payload: Partial<ElementDimensionsState> };

/** @note Dispatch */

export type Dispatch = (action: Action) => void;

/** @note State */

export type ElementVisibility = { isVisible: boolean };

export type ElementViewStates = ElementVisibility;

export type ElementViewState = {
  loadingScreen: ElementViewStates;
  sideBar: ElementViewStates;
  header: ElementViewStates;
  footer: ElementViewStates;
  returnButton: ElementViewStates;
};

export type ElementDimensions = { width: number; height: number };

export type ElementDimensionsState = {
  appWindow: ElementDimensions;
  layout: ElementDimensions;
  header: ElementDimensions;
  footer: ElementDimensions;
  returnButton: ElementDimensions;
};

export type State = { view: ElementViewState; dimensions: ElementDimensionsState };

/** @note App Provider Props */

export type AppProviderProps = { children: ReactElement };
