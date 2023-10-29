import 'regenerator-runtime/runtime';
import { call, put, select } from 'redux-saga/effects';

import { actions } from '../../reducers/theme';
import { getThemeState, handleGenericError } from '../common';

export default function* changeThemeMode(action) {
  try {
    const newThemeMode = action.payload.themeMode;
    const { mode } = yield select(getThemeState);
    if (newThemeMode === mode) return;

    yield put(actions.changeThemeModeSuccess(newThemeMode));
  } catch (e) {
    yield call(handleGenericError, action, e);
  }
}
