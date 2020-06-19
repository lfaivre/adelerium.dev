import React, { createContext, useContext, useReducer, useEffect } from "react"
import { useWindowWidth } from "../hooks/screen-size"

import { SCREEN_SIZE } from "../data/presentation"

type Action = { type: "SET_WINDOW_WIDTH"; windowWidth: number }
type Dispatch = (action: Action) => void
type State = { windowWidth: number }
type AppProviderProps = { children: React.ReactNode }

const initialState = { windowWidth: SCREEN_SIZE.MOBILE }
const AppStateContext = createContext<State | undefined>(undefined)
const AppDispatchContext = createContext<Dispatch | undefined>(undefined)

const appStateReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_WINDOW_WIDTH": {
      return { windowWidth: action.windowWidth }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
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
