/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const nodeLikeFsExistsSync = (path, extensions = ['.ts', '.tsx', '.js']) =>
  fs.existsSync(path) || extensions.some(ex => fs.existsSync(`${path}${ex}`));

// Some of our workspace packages aren't always hoisted by yarn, so their
// internal context is duplicated. We aggressively alias these to
// circumvent duplicate packages. Gross AF - but gets the job done.
module.exports = function getWorkspaceAliasFixes(workspacePath = './node_modules', packages = []) {
  const aliases = {};

  // Some packages (e.g. react-native-web) aren't being hoisted correctly.
  for (const package of packages) {
    const workspaceAliasPath = path.resolve(path.join(workspacePath, 'node_modules', package));
    const rootPath = path.resolve(path.join('../../node_modules', package));

    if (nodeLikeFsExistsSync(rootPath)) {
      aliases[package] = path.resolve(rootPath);
    } else if (nodeLikeFsExistsSync(workspaceAliasPath)) {
      aliases[package] = path.resolve(workspaceAliasPath);
    } else {
      console.warn(`Cannot find package '${package}'`);
    }
  }

  return aliases;
};
