import cheapThrills from './musics/Cheap Thrills.mp3';
import flames from './musics/Flames.mp3';
import theGreatest from './musics/The Greatest.mp3';
import titanium from './musics/Titanium.mp3';
import unstoppable from './musics/Unstoppable.mp3';

const Musics = {
  titanium,
  cheapThrills,
  theGreatest,
  flames,
  unstoppable,
} as const;

const MusicsSrcs = [
  { src: titanium, name: 'Titanium' },
  { src: cheapThrills, name: 'Cheap Thrills' },
  { src: theGreatest, name: 'The Greatest' },
  { src: flames, name: 'Flames' },
  { src: unstoppable, name: 'Unstoppable' },
] as const;

export type ThemeMusics = typeof Musics;

export { Musics, MusicsSrcs };
