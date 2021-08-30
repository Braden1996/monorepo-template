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

- `EXPO_TOKEN`: token to authenticate with your [Expo organization and projects](https://expo.dev/settings/access-tokens).
- `EXPO_ORGANIZATION`: the Expo organization which your `mobile-components` and `mobile-components-storybook` exist on.
- `CHROMATIC_PROJECT_TOKEN`: your Chromatic project token we deploy your web-components Storybook to.

## Notes

- Node package resolution combined with Yarn's hoisting really wrecks havoc on the React Native eco-system. In particular, there are lots of duplicate packages floating round which confuses the runtime.
  - To circumvent this, we modify our Babel and WebPack configs to resolve certain packages in a deterministic manner (see `packages/monorepo-helpers/getWorkspaceAliasFixes.js`).
    - This means our runtime only uses a single physical copy of these packages.
    - For Babel, we utilise `babel-plugin-module-resolver`.
    - For WebPack, we utilise `config.resolve.alias`.
    - The workspace-specific config files for Babel and Webpack can pass extra packages if need be.
  - For unknown reasons Expo is unable to bundle without `react-native` in the root `node_modules`. We force this by defining it as a `dependency` in the root `package.json`.
  - The Expo WebPack build doesn't seem to like the existence of a `babel.config.js` - seemingly regardless of content. To bypass this, `@monorepo-template/webpack-config-expo` intercepts the Babel loader and disables use of the config file. We then reapply `babel-preset-expo` - as in `@expo/webpack-config/webpack/loaders/createBabelLoader.js`.
