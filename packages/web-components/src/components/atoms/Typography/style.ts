import { css } from 'styled-components';
import { MediaGenerator } from 'styled-media-query';

import type { Theme } from '../../../theme';
import { generateMedia } from '../../../utils';

import { TypographyMediaGroups, TypographyTypes } from './common';
import { bbcRhythm } from './rhythms/bbc';

export const getTypographyStyle = (
  type: TypographyTypes,
  media: TypographyMediaGroups = TypographyMediaGroups.Desktop,
  flattenLineHeight = false,
) => css`
  font-size: ${bbcRhythm[type][media].fontSize};
  line-height: ${bbcRhythm[type][media][
    flattenLineHeight ? 'fontSize' : 'lineHeight'
  ]};
  font-family: ${bbcRhythm[type][media].fontFamily};
  ${bbcRhythm[type][media].fontWeight &&
  css`
    font-weight: ${bbcRhythm[type][media].fontWeight};
  `};
  text-transform: ${bbcRhythm[type][media].textTransform};
`;

export const getResponsiveTypographyStyle = (
  type: TypographyTypes = TypographyTypes.BodyCopy,
  mediaGenerator: MediaGenerator<
    Record<keyof Theme['dimensions']['use']['breakpoints'], string>,
    Theme
  >,
  flattenLineHeight = false,
) => css`
  ${mediaGenerator.lessThan<keyof Theme['dimensions']['use']['breakpoints']>(
    'small',
  )`
    ${getTypographyStyle(type, TypographyMediaGroups.Small, flattenLineHeight)}
  `}

  ${mediaGenerator.between<keyof Theme['dimensions']['use']['breakpoints']>(
    'small',
    'mobile',
  )`
    ${getTypographyStyle(type, TypographyMediaGroups.Mobile, flattenLineHeight)}
  `}

  ${mediaGenerator.between<keyof Theme['dimensions']['use']['breakpoints']>(
    'mobile',
    'tablet',
  )`
    ${getTypographyStyle(type, TypographyMediaGroups.Tablet, flattenLineHeight)}
  `}

  ${mediaGenerator.greaterThan<keyof Theme['dimensions']['use']['breakpoints']>(
    'tablet',
  )`
    ${getTypographyStyle(
      type,
      TypographyMediaGroups.Desktop,
      flattenLineHeight,
    )}
  `}
`;

export interface IResponsiveTypographyStyledProps {
  $type?: TypographyTypes;
  $flattenLineHeight?: boolean;
}

export const getResponsiveTypographyStyled = css<IResponsiveTypographyStyledProps>`
  ${p =>
    getResponsiveTypographyStyle(
      p.$type,
      generateMedia(p.theme.dimensions.use.breakpoints),
      p.$flattenLineHeight,
    )}
`;
