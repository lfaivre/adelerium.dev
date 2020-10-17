import { homePagePathData } from '@adelerium/constants/paths';
import { SET_PATHDATA } from '@adelerium/hooks/usePathData/actions';

/** @note Reducer Actions */

export type Action = { type: typeof SET_PATHDATA; payload: { pathname: string | undefined } };

/** @note State */

export type PathDataState = {
  pathname: string | undefined;
  isValidPath: boolean;
  pathData: typeof homePagePathData | undefined;
  isIndex: boolean;
};
