/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const nodeLikeFsExistsSync = (path, extensions = ['.ts', '.tsx', '.js']) =>
  fs.existsSync(path) || extensions.some(ex => fs.existsSync(`${path}${ex}`));

// Some of our workspace packages aren't always hoisted by yarn, so their
// internal context is duplicated. We aggressively alias these to
// circumvent duplicate packages. Gross AF - but gets the job done.
module.exports = function getWorkspaceAliasFixes(
  workspacePath = './node_modules',
  packages = [],
) {
  const aliases = {};

  // Some packages (e.g. react-native-web) aren't being hoisted correctly.
  for (const package of packages) {
    // If package is a string, then we do a 1-to-1 mapping.
    // Otherwise, we map aliasPackage -> resolutionPackage.
    const aliasPackage =
      typeof package === 'string' ? package : Object.keys(package)[0];
    const resolutionPackage =
      typeof package === 'string' ? package : Object.values(package)[0];

    const workspaceAliasPath = path.resolve(
      path.join(workspacePath, 'node_modules', resolutionPackage),
    );
    const rootPath = path.resolve(
      path.join('../../node_modules', resolutionPackage),
    );

    if (nodeLikeFsExistsSync(rootPath)) {
      aliases[aliasPackage] = path.resolve(rootPath);
    } else if (nodeLikeFsExistsSync(workspaceAliasPath)) {
      aliases[aliasPackage] = path.resolve(workspaceAliasPath);
    } else {
      console.warn(`Cannot find package '${resolutionPackage}'`);
    }
  }

  return aliases;
};
