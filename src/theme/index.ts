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

const THEMES = {
  light: 'light',
  dark: 'dark',
} as const;

type ThemeMode = (typeof THEMES)[keyof typeof THEMES];

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
    case THEMES.light:
      return {
        mode: THEMES.light,
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

    case THEMES.dark:
      return {
        mode: THEMES.dark,
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
        mode: THEMES.light,
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
