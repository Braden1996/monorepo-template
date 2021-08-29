import { fontFamilyArrayToString } from '../../../../utils/styles';
import {
  TypographyTypes,
  TypographyMediaGroups,
  TypographyRhythm,
} from '../common';

const bbcPxToRem = (pxValue: number) => `${pxValue / 16}rem`;

const bodyFontFamily = fontFamilyArrayToString(
  'Roboto Mono',
  'Helvetica Neue',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif',
);

const headerFontFamily = fontFamilyArrayToString('Changa One', 'cursive');

export const googleFontHref =
  'https://fonts.googleapis.com/css2?family=Changa+One&family=Roboto+Mono&display=swap';

// A lot of this is inspired by:
// https://www.bbc.co.uk/gel/guidelines/typography
export const bbcRhythm: TypographyRhythm = {
  [TypographyTypes.Royal]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(40),
      lineHeight: bbcPxToRem(44),
      fontFamily: headerFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(52),
      lineHeight: bbcPxToRem(60),
      fontFamily: headerFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(94),
      lineHeight: bbcPxToRem(104),
      fontFamily: headerFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(76),
      lineHeight: bbcPxToRem(84),
      fontFamily: headerFontFamily,
    },
  },
  [TypographyTypes.Canon]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(28),
      lineHeight: bbcPxToRem(32),
      fontFamily: headerFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(32),
      lineHeight: bbcPxToRem(36),
      fontFamily: headerFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(52),
      lineHeight: bbcPxToRem(56),
      fontFamily: headerFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(44),
      lineHeight: bbcPxToRem(48),
      fontFamily: headerFontFamily,
    },
  },
  [TypographyTypes.Trafalgar]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(20),
      lineHeight: bbcPxToRem(24),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(24),
      lineHeight: bbcPxToRem(28),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(36),
      lineHeight: bbcPxToRem(40),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(32),
      lineHeight: bbcPxToRem(36),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.Paragon]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(20),
      lineHeight: bbcPxToRem(24),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(22),
      lineHeight: bbcPxToRem(26),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(28),
      lineHeight: bbcPxToRem(32),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(28),
      lineHeight: bbcPxToRem(32),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.DoublePica]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(20),
      lineHeight: bbcPxToRem(24),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(20),
      lineHeight: bbcPxToRem(24),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(26),
      lineHeight: bbcPxToRem(30),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(24),
      lineHeight: bbcPxToRem(28),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.GreatPrimer]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(18),
      lineHeight: bbcPxToRem(22),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(18),
      lineHeight: bbcPxToRem(22),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(21),
      lineHeight: bbcPxToRem(24),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(20),
      lineHeight: bbcPxToRem(24),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.BodyCopy]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(15),
      lineHeight: bbcPxToRem(20),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(16),
      lineHeight: bbcPxToRem(22),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(18),
      lineHeight: bbcPxToRem(24),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(16),
      lineHeight: bbcPxToRem(22),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.Pica]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(15),
      lineHeight: bbcPxToRem(20),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(16),
      lineHeight: bbcPxToRem(20),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(18),
      lineHeight: bbcPxToRem(22),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(16),
      lineHeight: bbcPxToRem(20),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.LongPrimer]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(15),
      lineHeight: bbcPxToRem(18),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(15),
      lineHeight: bbcPxToRem(18),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(15),
      lineHeight: bbcPxToRem(20),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(14),
      lineHeight: bbcPxToRem(18),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.Brevier]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(14),
      lineHeight: bbcPxToRem(16),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(14),
      lineHeight: bbcPxToRem(18),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(14),
      lineHeight: bbcPxToRem(18),
      fontFamily: bodyFontFamily,
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(13),
      lineHeight: bbcPxToRem(16),
      fontFamily: bodyFontFamily,
    },
  },
  [TypographyTypes.Minion]: {
    [TypographyMediaGroups.Small]: {
      fontSize: bbcPxToRem(12),
      lineHeight: bbcPxToRem(16),
      fontFamily: bodyFontFamily,
      textTransform: 'uppercase',
    },
    [TypographyMediaGroups.Mobile]: {
      fontSize: bbcPxToRem(12),
      lineHeight: bbcPxToRem(16),
      fontFamily: bodyFontFamily,
      textTransform: 'uppercase',
    },
    [TypographyMediaGroups.Tablet]: {
      fontSize: bbcPxToRem(13),
      lineHeight: bbcPxToRem(16),
      fontFamily: bodyFontFamily,
      textTransform: 'uppercase',
    },
    [TypographyMediaGroups.Desktop]: {
      fontSize: bbcPxToRem(12),
      lineHeight: bbcPxToRem(16),
      fontFamily: bodyFontFamily,
      textTransform: 'uppercase',
    },
  },
};
