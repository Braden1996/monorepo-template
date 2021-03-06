module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'themeprovider-storybook/register',
    '@storybook/preset-create-react-app'
  ]
};
