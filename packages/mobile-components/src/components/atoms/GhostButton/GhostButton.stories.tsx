import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';

import { CenterView } from '../../../utils/story-layout/CenterVew';

import GhostButton from './index';

console.log('Hello world!');

storiesOf('GhostButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <GhostButton onPress={action('clicked-text')}>
      {text('GhostButton text', 'Hello GhostButton')}
    </GhostButton>
  ))
  .add('with some emoji', () => (
    <GhostButton onPress={action('clicked-emoji')}>😀 😎 👍 💯</GhostButton>
  ));
