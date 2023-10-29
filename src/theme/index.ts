import { DarkColors, LightColors, ThemeColors } from './colors';
import Files, { ThemeFiles } from './files';
import Fonts, { ThemeFonts } from './fonts';
import GlobalStyles from './globalStyles';
import Icons, { ThemeIcons } from './icons';
import Images, { ThemeImages } from './images';
import Links, { ThemeLinks } from './links';
import { Musics, MusicsSrcs, ThemeMusics } from './musics';
import Shadows, { ThemeShadows } from './shadows';
import Videos, { ThemeVideos } from './videos';

export const THEMES_MODE = {
  light: 'light',
  dark: 'dark',
} as const;

export type ThemeMode = (typeof THEMES_MODE)[keyof typeof THEMES_MODE];

export const THEMES_LANGUAGE = {
  chinese: 'cn',
  english: 'en',
} as const;

export type ThemeLanguage =
  (typeof THEMES_LANGUAGE)[keyof typeof THEMES_LANGUAGE];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Theme = {
  name: ThemeMode;
  colors: ThemeColors;
  shadows: ThemeShadows;
  fonts: ThemeFonts;
  images: ThemeImages;
  videos: ThemeVideos;
  icons: ThemeIcons;
  files: ThemeFiles;
  musics: ThemeMusics;
  links: ThemeLinks;
};

const getTheme = (themeMode: ThemeMode) => {
  switch (themeMode) {
    case THEMES_MODE.light:
      return {
        mode: THEMES_MODE.light,
        colors: LightColors,
        shadows: Shadows,
        fonts: Fonts,
        images: Images,
        videos: Videos,
        icons: Icons,
        files: Files,
        musics: Musics,
        links: Links,
      };

    case THEMES_MODE.dark:
      return {
        mode: THEMES_MODE.dark,
        colors: DarkColors,
        shadows: Shadows,
        fonts: Fonts,
        images: Images,
        videos: Videos,
        icons: Icons,
        files: Files,
        musics: Musics,
        links: Links,
      };

    default:
      return {
        mode: THEMES_MODE.light,
        colors: LightColors,
        shadows: Shadows,
        fonts: Fonts,
        images: Images,
        videos: Videos,
        icons: Icons,
        files: Files,
        musics: Musics,
        links: Links,
      };
  }
};

// eslint-disable-next-line import/no-unused-modules
export { GlobalStyles, getTheme, LightColors, DarkColors, MusicsSrcs };
