import * as React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import {
  darkSemanticTheme,
  lightSemanticTheme,
  palette,
} from '@monorepo-template/brand';

import dimensions from './dimensions';

export interface Theme {
  name: NonNullable<Props['theme']>;
  colors: {
    palette: typeof palette;
    semantic: typeof lightSemanticTheme | typeof darkSemanticTheme;
  };
  dimensions: typeof dimensions;
}

export const getTheme = (theme: 'light' | 'dark') => ({
  name: theme,
  colors: {
    palette: palette,
    semantic: theme === 'dark' ? darkSemanticTheme : lightSemanticTheme,
  },
  dimensions,
});

interface Props {
  theme?: 'light' | 'dark';
  children?: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({
  theme = 'light',
  children,
}) => (
  <StyledThemeProvider theme={React.useMemo(() => getTheme(theme), [theme])}>
    {children}
  </StyledThemeProvider>
);
