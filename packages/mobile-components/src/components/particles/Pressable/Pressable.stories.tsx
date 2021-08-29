import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';

import { CenterView } from '../../../utils/story-layout/CenterVew';

import Pressable from './index';

storiesOf('Pressable', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with text', () => (
    <Pressable onPress={action('clicked-text')}>
      <Text>{text('Pressable text', 'Hello Pressable')}</Text>
    </Pressable>
  ));
