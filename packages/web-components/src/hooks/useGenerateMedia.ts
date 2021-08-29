import { useTheme } from 'styled-components';

import { generateMedia } from '../utils';

const useGenerateMedia = () => {
  const theme = useTheme();
  const breakpoints = theme.dimensions.use.breakpoints;

  return generateMedia(breakpoints);
};

export default useGenerateMedia;
