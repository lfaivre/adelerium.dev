import { homePagePathData, homePagePathname, sitePaths } from '@adelerium/shared/constants/paths';
import { useLocation } from '@reach/router';
import { useEffect } from 'react';
import { useImmerReducer } from 'use-immer';

export type PathDataState = {
  pathname: string | undefined;
  isValidPath: boolean;
  pathData: typeof homePagePathData | undefined;
  isIndex: boolean;
};

export const SET_PATHDATA = `SET_PATHDATA`;

type Action = { type: typeof SET_PATHDATA; payload: { pathname: string | undefined } };

const initialState: PathDataState = {
  pathname: homePagePathname,
  isValidPath: true,
  pathData: sitePaths[homePagePathname],
  isIndex: true,
};

const pathDataReducer = (draft: PathDataState, action: Action): void => {
  switch (action.type) {
    case SET_PATHDATA: {
      const { pathname } = action.payload;
      const isValidPath = pathname !== undefined && pathname in sitePaths;
      const pathData = pathname && isValidPath ? sitePaths[pathname] : undefined;
      const isIndex = isValidPath && pathname === homePagePathname;

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

export const usePathData = (): PathDataState => {
  const [state, dispatch] = useImmerReducer(pathDataReducer, initialState);
  const { pathname } = useLocation();

  useEffect(() => {
    const updatedPathname = pathname in sitePaths ? pathname : undefined;
    if (updatedPathname === state.pathname) return;
    dispatch({ type: SET_PATHDATA, payload: { pathname: updatedPathname } });
  }, [pathname, state.pathname, dispatch]);

  return state;
};
