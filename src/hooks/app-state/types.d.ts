import { SET_DIMENSIONS, SET_THEME, SET_VIEW } from '@adelerium/hooks/app-state/actions';
import { ColorPalette } from '@adelerium/styles/colors/types';
import { Dispatch as ReactDispatch } from 'react';

/** @note Reducer Actions */

export type Action =
  | { type: typeof SET_VIEW; payload: Partial<ElementViewState> }
  | { type: typeof SET_DIMENSIONS; payload: Partial<ElementDimensionsState> }
  | { type: typeof SET_THEME; payload: ThemeState };

/** @note Dispatch */

export type Dispatch = ReactDispatch<Action>;

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
  navigationCollection: ElementDimensions;
};

export type ThemeState = { colors: ColorPalette };

export type State = { view: ElementViewState; dimensions: ElementDimensionsState; theme: ThemeState };
