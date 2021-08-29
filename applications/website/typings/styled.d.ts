/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';
import { Theme } from '@monorepo-template/web-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
