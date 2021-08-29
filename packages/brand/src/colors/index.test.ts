import Color from 'color';

import { palette } from './index';

describe('colors', () => {
  describe('palette', () => {
    describe('base', () => {
      it('white is the opposite of black', () => {
        const light = Color(palette.ios.lightGray6);
        const dark = Color(palette.ios.darkGray6);
        expect(light.luminosity()).toBeGreaterThan(dark.luminosity());
      });
    });
  });
});
