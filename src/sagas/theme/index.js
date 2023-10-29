import 'regenerator-runtime/runtime';
import { all, takeLatest } from 'redux-saga/effects';

import { actions } from '../../reducers/theme';

import changeThemeMode from './changeThemeMode';

export default function* themeSaga() {
  yield all([takeLatest(actions.changeThemeModeRequest, changeThemeMode)]);
}
