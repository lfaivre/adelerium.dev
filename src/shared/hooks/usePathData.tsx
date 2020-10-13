import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';
import { useLocation } from '@reach/router';
import { SitePaths } from '../constants/paths';
import { TPathname, TPathData, INDEX, PathDataHook } from '../types/paths';

type State = {
  pathname: TPathname | undefined;
  isValidPath: boolean;
  pathData: TPathData | undefined;
  isIndex: boolean;
};

export const SET_PATHDATA = `SET_PATHDATA`;

type Action = { type: typeof SET_PATHDATA; payload: { pathname: TPathname | undefined } };

const initialState: State = {
  pathname: INDEX,
  isValidPath: true,
  pathData: SitePaths[INDEX],
  isIndex: true,
};

const pathDataReducer = (draft: State, action: Action): void => {
  switch (action.type) {
    case SET_PATHDATA: {
      const { pathname } = action.payload;
      const isValidPath = pathname !== undefined && pathname in SitePaths;
      const pathData = pathname && isValidPath ? SitePaths[pathname] : undefined;
      const isIndex = isValidPath && pathname === INDEX;

      draft.pathname = pathname;
      draft.isValidPath = isValidPath;
      draft.pathData = pathData;
      draft.isIndex = isIndex;
      break;
    }
    default: {
      break;
    }
  }
};

export const usePathData = (): PathDataHook => {
  const [state, dispatch] = useImmerReducer(pathDataReducer, initialState);
  const { pathname } = useLocation();

  useEffect(() => {
    const updatedPathname = pathname in SitePaths ? (pathname as TPathname) : undefined;
    if (updatedPathname === state.pathname) return;
    dispatch({ type: SET_PATHDATA, payload: { pathname: updatedPathname } });
  }, [pathname, state.pathname, dispatch]);

  return state;
};
