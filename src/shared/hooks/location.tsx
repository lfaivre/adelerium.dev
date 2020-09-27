import { useReducer, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { SitePaths } from '../../data/paths';
import { TPathname, TPathData, INDEX, PathDataHook } from '../../types/paths';

type State = {
  pathname: TPathname | undefined;
  pathData: TPathData | undefined;
  isValidPath: boolean;
  isIndex: boolean;
};

type Action = { type: 'SET_PATHDATA'; payload: TPathname | undefined };

const initialState: State = {
  pathname: INDEX,
  pathData: SitePaths[INDEX],
  isValidPath: true,
  isIndex: true,
};

const locationReducer = (_state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_PATHDATA': {
      const pathname = action.payload;
      const isValidPath = pathname !== undefined && pathname in SitePaths;
      const pathData = isValidPath ? SitePaths[pathname as TPathname] : undefined;
      const isIndex = isValidPath && pathname === INDEX;
      return { pathname, pathData, isValidPath, isIndex };
    }
    default: {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      throw new Error(`UNHANDLED ACTION: ${action}`);
    }
  }
};

export const usePathData = (): PathDataHook => {
  const location = useLocation();
  const [state, dispatch] = useReducer(locationReducer, initialState);

  useEffect(() => {
    const newPathname =
      location.pathname in SitePaths ? (location.pathname as TPathname) : undefined;
    if (newPathname !== state.pathname) {
      dispatch({ type: 'SET_PATHDATA', payload: newPathname });
    }
  }, [location.pathname, state.pathname]);

  return state;
};
