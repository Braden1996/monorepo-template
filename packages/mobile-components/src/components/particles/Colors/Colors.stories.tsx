import { storiesOf } from '@storybook/react-native';
import * as React from 'react';

import { Palette, SemanticPalette } from './index';

storiesOf('Particles -> Colors', module)
  .add('Palette', () => <Palette />)
  .add('Semantic', () => <SemanticPalette />);
