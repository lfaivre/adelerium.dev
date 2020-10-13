import React, { createContext, useContext, useEffect, ReactElement } from 'react';
import { useImmerReducer } from 'use-immer';

import { useWindowWidth, useWindowHeight } from './screen-size';
import { SCREEN_SIZE } from '../constants/presentation';
import {
  SET_VIEW,
  SET_DIMENSIONS,
  Action,
  Dispatch,
  ElementViewStates,
  ElementViewState,
  ElementDimensions,
  ElementDimensionsState,
  State,
  AppProviderProps,
} from '../types/state';

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

/* eslint-disable unicorn/no-useless-undefined */
const AppStateContext = createContext<State | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);
/* eslint-enable unicorn/no-useless-undefined */

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
      (Object.keys(action.payload) as [keyof Partial<ElementDimensionsState>]).forEach(
        (element) => {
          (Object.keys(action.payload[element] as Partial<ElementDimensions>) as [
            keyof Partial<ElementDimensions>
          ]).forEach((attribute) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            if (action.payload[element]![attribute] === -1) return;

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            draft.dimensions[element][attribute] = action.payload[element]![attribute];
          });
        }
      );
      break;
    }
    default: {
      break;
    }
  }
};

const AppProvider = ({ children }: AppProviderProps): ReactElement => {
  const [state, dispatch] = useImmerReducer(appStateReducer, initialState);

  const windowWidth = useWindowWidth();
  const windowHeight = useWindowHeight();

  useEffect(() => {
    const updatedWindowWidth = windowWidth !== undefined ? windowWidth : SCREEN_SIZE.MOBILE;
    dispatch({
      type: SET_DIMENSIONS,
      payload: { appWindow: { width: updatedWindowWidth, height: -1 } },
    });
  }, [windowWidth, dispatch]);

  useEffect(() => {
    const updatedWindowHeight = windowHeight !== undefined ? windowHeight : 0;
    dispatch({
      type: SET_DIMENSIONS,
      payload: { appWindow: { width: -1, height: updatedWindowHeight } },
    });
  }, [windowHeight, dispatch]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppState = (): State => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};

const useAppDispatch = (): Dispatch => {
  const context = useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error('useAppDispatch must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
