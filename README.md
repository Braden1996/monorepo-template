# Monorepo Template

A moderately opinionated monorepo template for launching an Expo mobile app and Next website w/ shared code and storybook powered design systems.

## Features

- 📦 Yarn 2 w/ workspaces.
- ⏩ TypeScript Project References.
- 👮‍♂️ Linted with ESLint and Prettier.
- 📸 Tested with Jest and Testing Library.
- 🤖 Continuous integration via GitHub Actions.
- 🎨 `packages/brand` demonstrating client-agnostic shared code (in this case, for theming).
- 🧱 `packages/mobile-components` and `packages/web-components` for mobile and web design systems (respectively).
  - 👨‍🎨 Storybook for web deployed via Chromatic.
    - To run locally: `yarn storybook` in `packages/web-components`.
  - 👨‍🎨 Storybook for mobile deployed via Expo.
    - To run locally: `yarn start` in `applications/mobile-components-storybook`.
- 🏎 `styled-components` along with some opinionated foundations:
  - ⚙️ React context provided theme containing colors (from `packages/brand`) and dimensions.
  - 💬 Typography helpers.

## Current Issues

- `applications/mobile` and `applications/mobile-components-storybook` are unable to bundle for devices.
  - Issue is related to workspaces and hoisted packages.
  - Unable to get things working with just `expo-yarn-workspaces`.
    - `packages/expo-monorepo-config` contains various configs extending `expo-yarn-workspaces`.
    - With these, Expo is able to bundle for web (`react-native-web` + WebPack) and seems to work!
  - Bundling via Metro for iOS presents the following issue:
    - `applications/mobile`:

      ```
      Unable to resolve module ./views/assets/back-icon.png from /Users/braden/Development/monorepo-template/applications/mobile/node_modules/@react-navigation/stack/src/index.tsx:

      None of these files exist:
        * back-icon.png
        * node_modules/@react-navigation/stack/src/views/assets/back-icon.png/index(.native|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json)
        11 | export const Assets = [
        12 |   // eslint-disable-next-line import/no-commonjs
      > 13 |   require('./views/assets/back-icon.png'),
          |            ^
        14 |   // eslint-disable-next-line import/no-commonjs
        15 |   require('./views/assets/back-icon-mask.png'),
        16 | ];
      ```

    - `applications/mobile-components-storybook`:

      ```
      Unable to resolve module ./.storybook/rn-addons from /Users/braden/Development/monorepo-template/applications/mobile-components-storybook/App.tsx: 

      None of these files exist:
        * .storybook/rn-addons(.native|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json)
        * .storybook/rn-addons/index(.native|.ios.ts|.native.ts|.ts|.ios.tsx|.native.tsx|.tsx|.ios.js|.native.js|.js|.ios.jsx|.native.jsx|.jsx|.ios.json|.native.json|.json)
        11 | import { ThemeProvider } from '@monorepo-template/mobile-components';
        12 |
      > 13 | import './.storybook/rn-addons';
          |         ^
        14 | import { loadStories } from './.storybook/generated-story-loader.js';
        15 |
        16 | addParameters({ options: { theme: themes.dark } });
      ```
