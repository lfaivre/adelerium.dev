import { SET_DIMENSIONS, SET_THEME, SET_VIEW } from '@adelerium/hooks/app-state/actions';
import {
  Action,
  Dispatch,
  ElementDimensions,
  ElementDimensionsState,
  ElementViewState,
  ElementViewStates,
  State,
} from '@adelerium/hooks/app-state/types';
import { colors } from '@adelerium/styles/colors';
import { name as DEFAULT_PALETTE } from '@adelerium/styles/colors/default';
import { createContainer } from 'react-tracked';
import { useImmerReducer } from 'use-immer';

const initialState: State = {
  view: {
    loadingScreen: { isVisible: false },
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
    navigationCollection: { width: 0, height: 0 },
  },
  theme: {
    colors: colors[DEFAULT_PALETTE],
  },
  interactivity: {
    globalScroll: { enabled: true },
  },
};

const navigationCollectionElements: Set<keyof Partial<ElementDimensionsState>> = new Set([
  `header`,
  `footer`,
  `returnButton`,
]);

const scrollDisablingElements: Set<keyof Partial<ElementViewState>> = new Set([`loadingScreen`, `sideBar`]);

/**
 * @todo Fix Type Issues in Reducer
 *
 * @note Currently unable to fulfill type checking requirements using bracket notation
 * @issue https://github.com/microsoft/TypeScript/issues/10530
 */

const appStateReducer = (draft: State, action: Action): void => {
  switch (action.type) {
    case SET_VIEW: {
      const modifiedElements: (keyof Partial<ElementViewState>)[] = [];

      (Object.keys(action.payload) as (keyof Partial<ElementViewState>)[]).forEach((element) => {
        modifiedElements.push(element);
        (Object.keys(action.payload[element] as Partial<ElementViewStates>) as (keyof Partial<
          ElementViewStates
        >)[]).forEach((attribute) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          draft.view[element][attribute] = action.payload[element]![attribute];
        });
      });

      /** @note Handle Global Scroll Locking */

      let modifyGlobalScroll = false;

      for (let i = 0, n = modifiedElements.length; i < n; i += 1) {
        if (scrollDisablingElements.has(modifiedElements[i])) {
          modifyGlobalScroll = true;
          break;
        }
      }

      if (modifyGlobalScroll) {
        let disableScroll = false;

        /** @todo Break out of loop early (convert from Set to Array) */
        scrollDisablingElements.forEach((element) => {
          if (draft.view[element].isVisible) disableScroll = true;
        });

        draft.interactivity.globalScroll.enabled = !disableScroll;
      }

      break;
    }
    case SET_DIMENSIONS: {
      const modifiedElements: (keyof Partial<ElementDimensionsState>)[] = [];
      let setNavigationCollectionDimensions = false;

      (Object.keys(action.payload) as (keyof Partial<ElementDimensionsState>)[]).forEach((element) => {
        modifiedElements.push(element);
        (Object.keys(action.payload[element] as Partial<ElementDimensions>) as (keyof Partial<
          ElementDimensions
        >)[]).forEach((attribute) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          draft.dimensions[element][attribute] = action.payload[element]![attribute];
        });
      });

      for (let i = 0, n = modifiedElements.length; i < n; i += 1) {
        if (navigationCollectionElements.has(modifiedElements[i])) {
          setNavigationCollectionDimensions = true;
          break;
        }
      }

      if (setNavigationCollectionDimensions) {
        draft.dimensions.navigationCollection.height =
          draft.dimensions.header.height + draft.dimensions.footer.height + draft.dimensions.returnButton.height;
      }

      break;
    }
    case SET_THEME: {
      draft.theme.colors = action.payload.colors;
      break;
    }
    default: {
      break;
    }
  }
};

const useValue = (): [State, Dispatch] => useImmerReducer(appStateReducer, initialState);

const { Provider: AppProvider, useTrackedState: useAppState, useUpdate: useAppDispatch } = createContainer(useValue);

export { AppProvider, useAppDispatch, useAppState };
