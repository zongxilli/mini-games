import {
  ThemeLanguage,
  ThemeMode,
  THEMES_LANGUAGE,
  THEMES_MODE,
} from '../../theme';

// eslint-disable-next-line import/no-unused-modules
export interface ThemeState {
  mode: ThemeMode;
  language: ThemeLanguage;
  status: {
    changeThemeModePending: boolean;
    changeThemeModeSuccess: boolean;
    changeThemeLanguagePending: boolean;
    changeThemeLanguageSuccess: boolean;
  };
}

const initialState = {
  mode: THEMES_MODE.light,
  language: THEMES_LANGUAGE.english,
  status: {
    changeThemeModePending: false,
    changeThemeModeSuccess: false,
    changeThemeLanguagePending: false,
    changeThemeLanguageSuccess: false,
  },
} as const as ThemeState;

export default initialState;
