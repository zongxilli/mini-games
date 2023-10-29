/* eslint-disable import/no-unused-modules */
import { configureStore } from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';
import { Middleware } from 'redux';

import { runSagas, sagaMiddleware } from '../sagas/sagas';

import initialState from './initialStates';
import theme from './theme';
// import * as storage from './localStorage';

setAutoFreeze(false);

// TODO: support local storage
// const persistedState = storage.loadState();

const store = configureStore({
  reducer: {
    theme,
  },
  preloadedState: {
    ...initialState,
    // ...persistedState,
  },
  middleware: () => {
    const ms: Middleware[] = [sagaMiddleware];

    return ms;
  },
});

// storage.observeStore(store);

// initialize redux-saga
runSagas();

export default store;

export type RootStore = typeof store;

export type RootState = typeof initialState;

export type AppDispatch = typeof store.dispatch;
