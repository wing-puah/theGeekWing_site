import { useMemo } from 'react';
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

type state = {
  loadText: boolean;
};

type action = { type: string; payload: any };

const initialState: state = { loadText: false };

const reducer = (state = initialState, action: action): state => {
  switch (action.type) {
    case 'END_CAMERA_PAN':
      return {
        ...state,
        loadText: true,
      };
    default:
      return state;
  }
};

function initStore(preloadedState: state = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  );
}

function initializeStore(preloadedState: state): Store {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

function useStore(initialState: state) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export { initializeStore, useStore };
