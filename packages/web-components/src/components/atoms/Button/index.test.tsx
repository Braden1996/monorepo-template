import { render } from '@testing-library/react';

import { ThemeProvider } from '../../../theme';

import Button from './index';

test('it works', () => {
  const { container } = render(
    <ThemeProvider theme="light">
      <Button />
    </ThemeProvider>,
  );
  expect(container.firstChild).toMatchSnapshot();
});
