# Monorepo Template

A moderately opinionated monorepo template for launching an Expo mobile app and Next website w/ shared code and storybook powered design systems.

## High-Level Features

- 📱  Expo deployed mobile app
- 🖥  NextJS website
- 🖼  Client-specific design systems w/ corresponding Storybooks
- 🤖  Continuous integration and deployment via GitHub Actions
- 📦  Yarn 2 w/ workspaces
- ⏩  TypeScript Project References
- 🧹  Linted with ESLint and Prettier
- 🃏  Tested with Jest and Testing Library

## Repo Structure Breakdown

### Applications

Applications are clients intended for deployment - not to be imported by other packages/applications.

- 📱  `applications/mobile`: Expo deployed mobile application.
- 🖼  `applications/mobile-components-story`: Expo deployed application of `packages/mobile-components`'s Storybook.
- 🖥  `applications/website`: Next.js website.

### Packages

Packages are libraries of code which we can compose to help build our applications.

- 🎨  `packages/brand`: demonstrating client-agnostic shared code.
  - Currently containing a basic colour palette and semantic mapping for a theme.
- 🧹  `packages/eslint-plugin`: our various ESLint configs, kept here to enforce consistency between workspaces.
- 🕸  `packages/expo-monorepo-config`: various utility scripts to make things easier when working with monorepos.
- 🃏  `packages/jest-config`: our various Jest configs, kept here to enforce consistency between workspaces.
- 📱  `packages/mobile-components`: design system targeting React Native (via Expo).
  - React context provided theme, from `packages/brand`, via Styled Components.
- 🖥  `packages/web-components`: design system targeting the web/DOM.
  - Includes Storybook for quicker iteration - deployed via Chromatic.
  - React context provided theme, from `packages/brand`, via Styled Components.
  - Opinionated typography setup.


## Getting Started

Below are some fairly loose instructions on where to get started with this template.

### Setting Up

1. Clone/Fork the repo.
2. Find and Replace `@monorepo-template` to your chosen name (remember `@` prefix).
3. Install the Node dependencies: `yarn install`

### GitHub Actions

Set the following secrets in your GitHub repository:

- `EXPO_ORGANIZATION`: the Expo organization which your `mobile-components` and `mobile-components-storybook` exist on.
- `CHROMATIC_PROJECT_TOKEN`: your Chromatic project token we deploy your web-components Storybook to.

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
