/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const nodeLikeFsExistsSync = (path, extensions = ['.ts', '.tsx', '.js']) =>
  fs.existsSync(path) || extensions.some(ex => fs.existsSync(`${path}${ex}`));

const skipKeys = [
  // https://github.com/necolas/react-native-web/issues/1537
  'react-native/Libraries/Components/View/ViewStylePropTypes',

  // Seem to only have `/node_modules/react-native-web/dist/vendor/react-native/emitter/_EventSubscriptionVendor.js`
  'react-native/Libraries/vendor/emitter/EventSubscriptionVendor',

  // Alias target doesn't exist
  'react-native/Libraries/Image/assetPathUtils',
];

module.exports = function (alias, isReactNativeWeb = false) {
  const newAliases = { ...alias };

  // Some of our workspace packages aren't hoisted by yarn, so their
  // internal context is duplicated. We aggressively alias these to
  // circumvent duplicate packages. Gross AF.
  newAliases['react'] = 'react';
  newAliases[`react-native${isReactNativeWeb ? '$' : ''}`] = isReactNativeWeb
    ? 'react-native-web'
    : 'react-native';
  newAliases['react-native-web'] = 'react-native-web';
  newAliases['@storybook/react-native'] = '@storybook/react-native';

  // Some packages (e.g. react-native-web) aren't being hoisted correctly.
  for (const key of Object.keys(newAliases)) {
    if (skipKeys.some(k => key === `${k}${isReactNativeWeb ? '$' : ''}`))
      continue;

    const workspacePath = path.resolve(`./node_modules/${newAliases[key]}`);
    const rootPath = path.resolve(`../../node_modules/${newAliases[key]}`);

    if (nodeLikeFsExistsSync(workspacePath)) {
      newAliases[key] = path.resolve(workspacePath);
    } else if (nodeLikeFsExistsSync(rootPath)) {
      newAliases[key] = path.resolve(rootPath);
    } else {
      console.warn(`Cannot find module '${newAliases[key]}'`);
    }
  }

  return newAliases;
};
