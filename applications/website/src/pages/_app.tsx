import { AppProps } from 'next/app';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { ThemeProvider } from '@monorepo-template/web-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme="dark">
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
