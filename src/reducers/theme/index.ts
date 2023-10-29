import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ThemeMode } from '../../theme';

import initialState from './initialState';

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeModeRequest: {
      prepare: (themeMode: ThemeMode) => ({
        payload: { themeMode },
      }),
      reducer: (state) => {
        state.status.changeThemeModePending = true;
        state.status.changeThemeModeSuccess = false;
      },
    },
    changeThemeModeSuccess: {
      prepare: (themeMode: ThemeMode) => ({
        payload: { themeMode },
      }),
      reducer: (state, action: PayloadAction<{ themeMode: ThemeMode }>) => {
        state.mode = action.payload.themeMode;
        state.status.changeThemeModePending = false;
        state.status.changeThemeModeSuccess = true;
      },
    },
    changeThemeModeFailure: {
      prepare: (error: Error) => ({
        payload: { error },
      }),
      reducer: (state) => {
        state.status.changeThemeModePending = false;
        state.status.changeThemeModeSuccess = false;
      },
    },
  },
});

export default themeSlice.reducer;

export { initialState };

export const actions = themeSlice.actions;
