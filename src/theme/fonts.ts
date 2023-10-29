const Fonts = {
  clash: "'Clash Display', sans-serif",
  fira: "'Fira Code', monospace",
  hachi: "'Hachi Maru Pop', cursive",

  // for Chinese
  kuaile: " 'ZCOOL KuaiLe', cursive",
} as const;

export type ThemeFonts = typeof Fonts;

export default Fonts;
