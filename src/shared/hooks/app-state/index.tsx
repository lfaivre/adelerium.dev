import { SET_DIMENSIONS, SET_VIEW } from '@adelerium/shared/hooks/app-state/constants';
import {
  Action,
  AppProviderProps,
  Dispatch,
  ElementDimensions,
  ElementDimensionsState,
  ElementViewState,
  ElementViewStates,
  State,
} from '@adelerium/shared/hooks/app-state/types';
import React, { createContext, ReactElement, useContext } from 'react';
import { useImmerReducer } from 'use-immer';

const initialState: State = {
  view: {
    loadingScreen: { isVisible: true },
    sideBar: { isVisible: false },
    header: { isVisible: true },
    footer: { isVisible: true },
    returnButton: { isVisible: true },
  },
  dimensions: {
    appWindow: { width: 0, height: 0 },
    layout: { width: 0, height: 0 },
    header: { width: 0, height: 0 },
    footer: { width: 0, height: 0 },
    returnButton: { width: 0, height: 0 },
  },
};

// eslint-disable-next-line unicorn/no-useless-undefined
const AppStateContext = createContext<State | undefined>(undefined);

// eslint-disable-next-line unicorn/no-useless-undefined
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

/**
 * @todo Fix Type Issues in Reducer
 *
 * @note Currently unable to fulfill type checking requirements using bracket notation
 * @issue https://github.com/microsoft/TypeScript/issues/10530
 */

const appStateReducer = (draft: State, action: Action): void => {
  switch (action.type) {
    case SET_VIEW: {
      (Object.keys(action.payload) as [keyof Partial<ElementViewState>]).forEach((element) => {
        (Object.keys(action.payload[element] as Partial<ElementViewStates>) as [
          keyof Partial<ElementViewStates>
        ]).forEach((attribute) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          draft.view[element][attribute] = action.payload[element]![attribute];
        });
      });
      break;
    }
    case SET_DIMENSIONS: {
      (Object.keys(action.payload) as [keyof Partial<ElementDimensionsState>]).forEach((element) => {
        (Object.keys(action.payload[element] as Partial<ElementDimensions>) as [
          keyof Partial<ElementDimensions>
        ]).forEach((attribute) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          if (action.payload[element]![attribute] === -1) return;

          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          draft.dimensions[element][attribute] = action.payload[element]![attribute];
        });
      });
      break;
    }
    default: {
      break;
    }
  }
};

const AppProvider = ({ children }: AppProviderProps): ReactElement => {
  const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = (): State => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error(`useAppState must be used within an AppProvider`);
  }
  return context;
};

const useAppDispatch = (): Dispatch => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error(`useAppDispatch must be used within an AppProvider`);
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
