// Types of typography.
// https://www.bbc.co.uk/gel/guidelines/typography
export enum TypographyTypes {
  // Project name
  Royal = 'Royal',

  // Hero or blog post title
  Canon = 'Canon',

  // Article title or section header
  Trafalgar = 'Trafalgar',

  // Primary headline on indexes
  Paragon = 'Paragon',

  // Sub header
  DoublePica = 'DoublePica',

  // Headline title or subtitle
  GreatPrimer = 'GreatPrimer',

  // Article body copy only
  BodyCopy = 'BodyCopy',

  // Index links, titles & headlines
  Pica = 'Pica',

  // Index body copy & image captions
  LongPrimer = 'LongPrimer',

  // Time stamps and bylines
  Brevier = 'Brevier',

  // Small header capitals
  Minion = 'Minion',
}

export enum TypographyMediaGroups {
  Small = 'Small',
  Mobile = 'Mobile',
  Tablet = 'Tablet',
  Desktop = 'Desktop',
}

export type TypographyRhythm = Record<
  TypographyTypes,
  Record<
    TypographyMediaGroups,
    {
      fontSize: string | number;
      lineHeight: string | number;
      fontFamily: string;
      fontWeight?: string;
      textTransform?: string;
    }
  >
>;
