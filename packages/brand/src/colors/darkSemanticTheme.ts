import lightSemanticTheme from './lightSemanticTheme';
import ios from './palettes/ios';

const darkSemanticTheme = {
  ...lightSemanticTheme,
  background: {
    ...lightSemanticTheme.background,
    primary: ios.darkGray5,
    secondary: ios.darkGray6,
    tertiary: ios.darkGray4,
    highlight: ios.darkTeal,
    contrast: ios.lightGray6,
  },
  accent: {
    ...lightSemanticTheme.accent,
    danger: ios.darkRed,
    info: ios.darkTeal,
    primary: ios.darkBlue,
    secondary: ios.darkGray5,
    success: ios.darkGreen,
    warning: ios.darkYellow,
  },
  text: {
    ...lightSemanticTheme.text,
    primary: ios.lightGray6,
    secondary: ios.lightGray5,
    tertiary: ios.lightGray4,
    contrast: ios.darkGray6,
    highlight: ios.darkBlue,
  },
};

export default darkSemanticTheme;
