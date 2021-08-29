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
  breakpoints: {
    larger: 1600,
    large: 1280,
    default: 980,
    tablet: 768,
    mobile: 480,
    small: 319,
  },
};

const dimensions = { base, use };

export default dimensions;
