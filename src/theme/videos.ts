import mosaicArray from './videos/mosaicArray.mp4';
import mosaicArrayPalette3 from './videos/mosaicArrayPalette3.mp4';
import mosaicOverview from './videos/mosaicOverview.mp4';
import mosaicPalette3Pro from './videos/mosaicPalette3Pro.mp4';
import uoftOverview from './videos/uoftOverview.mp4';

const Videos = {
  mosaic: {
    overview: mosaicOverview,
    array: mosaicArray,
    palette: mosaicPalette3Pro,
    arrayPalette: mosaicArrayPalette3,
  },
  uoft: {
    overview: uoftOverview,
  },
} as const;

export type ThemeVideos = typeof Videos;

export default Videos;
