import { render } from '@testing-library/react-native';
import * as React from 'react';

import { ThemeProvider } from '../../../theme';

import GhostButton from './index';

describe('<GhostButton />', () => {
  it('has 1 child', () => {
    const { container } = render(
      <ThemeProvider>
        <GhostButton>Hello</GhostButton>
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
