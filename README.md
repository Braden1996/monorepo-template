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

## Notes

- Node package resolution combined with Yarn's hoisting really wrecks havoc on the React Native eco-system. In particular, there are lots of duplicate packages floating round and hoisting isn't feasibly determinable.
  - To circumvent this, `packages/monorepo-helpers/getWorkspaceAliasFixes.js` takes a workspace path and a list of packages and returns a deterministic set of alias resolutions.
  - These alias resolutions can be utilized by both Babel's `babel-plugin-module-resolver` and WebPack's `config.resolve.alias` - forcing a runtime to use a single physical copy of a package.
  - Within a workspace, we can pass extra packages to apply this process to via `babel.config.js` and `webpack.config.js`.

## Current Issues

- `applications/mobile` and `applications/mobile-components-storybook` can bundle for devices via Metro, but not the web via WebPack.
  - We have applied the relevant alias resolution adjustments to the WebPack config.
  - This works when `babel.config.js` is deleted/renamed.
    - If the file is present, but without meaningful content, the issue is still present.
    - TODO: maybe we can log WebPack's babel config when the file is deleted, and compare the differences with our present file.
      - Then we can conditionally apply the necessary changes (`packages/babel-preset-expo/isWebPlatformBabel.js` might help, but not sure it works).
