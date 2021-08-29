import * as React from 'react';
import * as ReactIs from 'react-is';
import styled from 'styled-components';

import { Typography } from '../Typography';

const Container = styled.div`
  padding: ${p => p.theme.dimensions.base.normal}px;
  background-color: ${p => p.theme.colors.semantic.background.tertiary};
  border-radius: ${p => p.theme.dimensions.use.borderRadius.normal}px;

  cursor: pointer;
`;

export const ButtonText = styled(Typography)`
  color: ${p => p.theme.colors.semantic.text.primary};
`;

export interface ButtonProps {
  children?: React.ReactNode | React.ComponentType<unknown>;
  className?: string;
  onClick?: React.MouseEventHandler<unknown>;
}

const Button: React.FC<ButtonProps> = ({
  children: Children,
  onClick,
  className,
}) => (
  <Container className={className} onClick={onClick}>
    {typeof Children === 'string' ? (
      <ButtonText>{Children}</ButtonText>
    ) : ReactIs.isValidElementType(Children) ? (
      <Children />
    ) : (
      Children
    )}
  </Container>
);

export default Button;
