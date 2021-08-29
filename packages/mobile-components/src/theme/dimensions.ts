import { mapValues } from 'lodash';

const base = {
  xxSmall: 2,
  xSmall: 4,
  small: 8,
  normal: 16,
  large: 32,
  xLarge: 64,
};

const use = {
  borderRadius: {
    normal: base.xxSmall,
    large: base.xSmall,
  },
  insets: mapValues(base, value => ({
    top: value,
    right: value,
    bottom: value,
    left: value,
  })),
};

const dimensions = { base, use };

export default dimensions;
