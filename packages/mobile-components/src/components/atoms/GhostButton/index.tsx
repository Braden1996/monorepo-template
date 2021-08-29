import * as React from 'react';
import * as ReactIs from 'react-is';
import { GestureResponderEvent, PressableProps } from 'react-native';
import styled from 'styled-components/native';

import { Pressable } from '../../particles';

const Container = styled(Pressable)`
  flex-direction: row;
  align-items: center;
  padding: ${p => p.theme.dimensions.base.small}px;
  border-radius: ${p => p.theme.dimensions.use.borderRadius.normal}px;
`;

interface ChildrenProps {
  selected: boolean;
  small: boolean;
}

const Text = styled.Text<ChildrenProps>`
  color: ${p =>
    p.selected
      ? p.theme.colors.semantic.accent.primary
      : p.theme.colors.semantic.text.primary};
`;

interface Props extends PressableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: React.ReactNode | React.ComponentType<ChildrenProps | any>;
  small?: boolean;
  forcePressingState?: boolean;
}

const GhostButton: React.FC<Props> = ({
  children: Children,
  onPressIn,
  onPressOut,
  small = false,
  forcePressingState = false,
  ...rest
}) => {
  const [pressing, setPressing] = React.useState(false);
  const isSelected = pressing || forcePressingState;

  const innerOnPressIn = React.useCallback(
    (evt: GestureResponderEvent) => {
      setPressing(true);
      onPressIn && onPressIn(evt);
    },
    [onPressIn],
  );

  const innerOnPressOut = React.useCallback(
    (evt: GestureResponderEvent) => {
      setPressing(false);
      onPressOut && onPressOut(evt);
    },
    [onPressOut],
  );

  return (
    <Container
      onPressIn={innerOnPressIn}
      onPressOut={innerOnPressOut}
      {...rest}
    >
      {typeof Children === 'string' || typeof Children === 'number' ? (
        <Text selected={isSelected} small={small}>
          {Children}
        </Text>
      ) : ReactIs.isValidElementType(Children) ? (
        <Children selected={isSelected} small={small} />
      ) : (
        Children
      )}
    </Container>
  );
};

export default GhostButton;
