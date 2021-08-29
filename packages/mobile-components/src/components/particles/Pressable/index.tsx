import * as React from 'react';
import {
  Pressable as RNPressable,
  PressableProps as RNPressableProps,
  PressableStateCallbackType,
  StyleSheet,
} from 'react-native';
import { useTheme } from 'styled-components/native';

export interface PressableProps extends RNPressableProps {
  showBackground?: boolean;
}

/*
    A Pressable component which uses our style by default.
*/
const Pressable: React.FC<PressableProps> = ({
  style,
  showBackground,
  ...rest
}) => {
  const theme = useTheme();
  const innerStyle = React.useCallback(
    (state: PressableStateCallbackType) => {
      const styleObject = typeof style === 'function' ? style(state) : style;

      const backgroundColor = state.pressed
        ? theme.colors.semantic.background.highlight
        : showBackground
        ? theme.colors.semantic.background.secondary
        : null;

      return backgroundColor
        ? StyleSheet.flatten([{ backgroundColor }, styleObject])
        : styleObject;
    },
    [
      showBackground,
      style,
      theme.colors.semantic.background.highlight,
      theme.colors.semantic.background.secondary,
    ],
  );

  return <RNPressable {...rest} style={innerStyle} />;
};

export default Pressable;
