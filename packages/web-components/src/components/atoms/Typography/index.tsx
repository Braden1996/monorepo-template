import React from 'react';
import styled from 'styled-components';

import { TypographyTypes } from './common';
import {
  getResponsiveTypographyStyled,
  IResponsiveTypographyStyledProps,
} from './style';

export * from './style';
export { googleFontHref } from './rhythms/bbc';
export * from './common';

const TypographyText = styled.span<IResponsiveTypographyStyledProps>`
  ${getResponsiveTypographyStyled};
`;

export interface IProps
  extends Pick<React.ComponentProps<typeof TypographyText>, 'as'> {
  type?: TypographyTypes;
  flattenLineHeight?: boolean;
  children?: React.ReactNode;
}

export const Typography: React.FC<IProps> = ({
  type = TypographyTypes.BodyCopy,
  flattenLineHeight = false,
  ...rest
}) => (
  <TypographyText
    $type={type}
    $flattenLineHeight={flattenLineHeight}
    {...rest}
  />
);
