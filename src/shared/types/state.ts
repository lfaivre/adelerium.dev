import React from 'react';

export type Action =
  | { type: 'SET_LOADING'; isLoading: boolean }
  | { type: 'SET_WINDOW_WIDTH'; windowWidth: number }
  | { type: 'SET_LAYOUT_WIDTH'; layoutWidth: number }
  | { type: 'SET_HEADER_HEIGHT'; headerHeight: number }
  | { type: 'SET_FOOTER_HEIGHT'; footerHeight: number }
  | { type: 'SET_RETURN_HEIGHT'; returnHeight: number };

export type Dispatch = (action: Action) => void;

export type State = {
  isLoading: boolean;
  windowWidth: number;
  layoutWidth: number;
  headerHeight: number;
  footerHeight: number;
  returnHeight: number;
};

export type AppProviderProps = { children: React.ReactNode };
