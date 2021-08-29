export const fontFamilyArrayToString = (...fonts: string[]) =>
  fonts.reduce((acc, s) => `${acc},${s.includes(' ') ? `'${s}'` : s}`);
