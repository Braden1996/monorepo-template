import { addDecorator } from "@storybook/react";
import { withThemesProvider, DEFAULT_SETTINGS } from "themeprovider-storybook";
import { ThemeProvider } from "../src/theme"

const themes = [{name: 'light'}, {name: 'dark'}];
const WrappedThemeProvider = ({theme, ...rest}) => <ThemeProvider theme={theme.name} {...rest} />

addDecorator(withThemesProvider(themes, { ...DEFAULT_SETTINGS, disableThemePreview: true }, WrappedThemeProvider));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const decorators = [];

