import React, { createContext, useContext, useReducer, useEffect } from "react"
import { useWindowWidth } from "../hooks/screen-size"

import { SCREEN_SIZE } from "../data/presentation"

type Action =
  | { type: "SET_WINDOW_WIDTH"; windowWidth: number }
  | { type: "SET_HEADER_HEIGHT"; headerHeight: number }
  | { type: "SET_FOOTER_HEIGHT"; footerHeight: number }
  | { type: "SET_RETURN_HEIGHT"; returnHeight: number }
type Dispatch = (action: Action) => void
type State = {
  windowWidth: number
  headerHeight: number
  footerHeight: number
  returnHeight: number
}
type AppProviderProps = { children: React.ReactNode }

const initialState: State = {
  windowWidth: SCREEN_SIZE.MOBILE,
  headerHeight: 0,
  footerHeight: 0,
  returnHeight: 0,
}
const AppStateContext = createContext<State | undefined>(undefined)
const AppDispatchContext = createContext<Dispatch | undefined>(undefined)

const appStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_WINDOW_WIDTH": {
      return {
        ...state,
        windowWidth: action.windowWidth,
      }
    }
    case "SET_HEADER_HEIGHT": {
      return {
        ...state,
        headerHeight: action.headerHeight,
      }
    }
    case "SET_FOOTER_HEIGHT": {
      return {
        ...state,
        footerHeight: action.footerHeight,
      }
    }
    case "SET_RETURN_HEIGHT": {
      return {
        ...state,
        returnHeight: action.returnHeight,
      }
    }
    default: {
      throw new Error(`UNHANDLED ACTION: ${action}`)
    }
  }
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState)
  const windowWidth = useWindowWidth()

  useEffect(() => {
    const newWindowWidth =
      windowWidth !== undefined ? windowWidth : SCREEN_SIZE.MOBILE
    dispatch({ type: "SET_WINDOW_WIDTH", windowWidth: newWindowWidth })
  }, [windowWidth])

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  )
}

const useAppState = () => {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppProvider")
  }
  return context
}

const useAppDispatch = () => {
  const context = useContext(AppDispatchContext)
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppProvider")
  }
  return context
}

export { AppProvider, useAppState, useAppDispatch }
