import React, { createContext, useContext, useReducer, useEffect } from 'react';

import { useWindowWidth } from '../hooks/screen-size';
import { SCREEN_SIZE } from '../data/presentation';
import { Action, Dispatch, State, AppProviderProps } from '../types/state';

const initialState: State = {
  isLoading: true,
  windowWidth: 0,
  layoutWidth: 0,
  headerHeight: 0,
  footerHeight: 0,
  returnHeight: 0,
};

/* eslint-disable unicorn/no-useless-undefined */
const AppStateContext = createContext<State | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);
/* eslint-enable unicorn/no-useless-undefined */

const appStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_LOADING': {
      return { ...state, isLoading: action.isLoading };
    }
    case 'SET_WINDOW_WIDTH': {
      return { ...state, windowWidth: action.windowWidth };
    }
    case 'SET_LAYOUT_WIDTH': {
      return { ...state, layoutWidth: action.layoutWidth };
    }
    case 'SET_HEADER_HEIGHT': {
      return { ...state, headerHeight: action.headerHeight };
    }
    case 'SET_FOOTER_HEIGHT': {
      return { ...state, footerHeight: action.footerHeight };
    }
    case 'SET_RETURN_HEIGHT': {
      return { ...state, returnHeight: action.returnHeight };
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`UNHANDLED ACTION: ${action}`);
    }
  }
};

const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const newWindowWidth =
      windowWidth !== undefined ? windowWidth : SCREEN_SIZE.MOBILE;
    dispatch({ type: 'SET_WINDOW_WIDTH', windowWidth: newWindowWidth });
  }, [windowWidth]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
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
    throw new Error('useAppState must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useAppState, useAppDispatch };
