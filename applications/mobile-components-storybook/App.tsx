import { withKnobs } from '@storybook/addon-knobs';
import {
  addDecorator,
  addParameters,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import { themes } from '@storybook/theming';
import * as React from 'react';

import { ThemeProvider } from '@monorepo-template/mobile-components';

import './storybook/rn-addons';
import { loadStories } from './storybook/generated-story-loader.js';

addParameters({ options: { theme: themes.dark } });

addDecorator(s => <ThemeProvider>{s() as React.ReactNode}</ThemeProvider>);

addDecorator(withKnobs);

configure(loadStories, module);

const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

export default StorybookUIRoot;
