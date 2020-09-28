import { ReactElement } from 'react';

export const SET_LOADING = 'SET_LOADING';
export const SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';
export const SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH';
export const SET_LAYOUT_WIDTH = 'SET_LAYOUT_WIDTH';
export const SET_HEADER_HEIGHT = 'SET_HEADER_HEIGHT';
export const SET_FOOTER_HEIGHT = 'SET_FOOTER_HEIGHT';
export const SET_RETURN_HEIGHT = 'SET_RETURN_HEIGHT';

export type Action =
  | { type: typeof SET_LOADING; isLoading: boolean }
  | { type: typeof SET_SIDEBAR_VISIBILITY; sideBarIsVisible: boolean }
  | { type: typeof SET_WINDOW_WIDTH; windowWidth: number }
  | { type: typeof SET_LAYOUT_WIDTH; layoutWidth: number }
  | { type: typeof SET_HEADER_HEIGHT; headerHeight: number }
  | { type: typeof SET_FOOTER_HEIGHT; footerHeight: number }
  | { type: typeof SET_RETURN_HEIGHT; returnHeight: number };

export type Dispatch = (action: Action) => void;

export type State = {
  isLoading: boolean;
  sideBarIsVisible: boolean;
  windowWidth: number;
  layoutWidth: number;
  headerHeight: number;
  footerHeight: number;
  returnHeight: number;
};

export type AppProviderProps = { children: ReactElement };
