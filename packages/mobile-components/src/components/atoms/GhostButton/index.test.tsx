import { render } from '@testing-library/react-native';
import * as React from 'react';

import { ThemeProvider } from '../../../theme';

import GhostButton from './index';

describe('<GhostButton />', () => {
  it('has 1 child', () => {
    const rendered = render(
      <ThemeProvider>
        <GhostButton>Hello</GhostButton>
      </ThemeProvider>,
    );

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
