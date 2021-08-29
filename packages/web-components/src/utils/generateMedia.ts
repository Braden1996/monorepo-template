import { memoize } from 'lodash';
import hash from 'object-hash';
import { generateMedia as styledGenerateMedia } from 'styled-media-query';

export const generateMedia = memoize(
  <T extends Record<string, number>>(breakpoints: T) =>
    styledGenerateMedia(
      Object.entries(breakpoints).reduce(
        (acc, [k, v]) => ({
          ...acc,
          [k]: `${v}px`,
        }),
        {} as Record<keyof typeof breakpoints, string>,
      ),
    ),
  hash,
);
