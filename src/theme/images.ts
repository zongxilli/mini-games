import me1 from './images/me1.jpg';
import me2 from './images/me2.jpg';
import me3 from './images/me3.jpg';

const Images = {
  general: {},

  personal: {
    me1,
    me2,
    me3,
  },
} as const;

export type ThemeImages = typeof Images;

export default Images;
