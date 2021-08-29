const path = require('path');

const getWorkspaces = require('get-yarn-workspaces');

function getMonorepoPackagePrefix(dirname) {
  const packageNames = getWorkspaces(dirname)
    .map(workspacePath => require(path.join(workspacePath, 'package.json')))
    .map(packageJson => packageJson.name)
    .filter(packageName => packageName.startsWith('@'))
    .map(packageName => packageName.split('/')[0])
    .filter(Boolean);

  const uniques = new Set(packageNames);

  if (uniques.size === 0) {
    throw new Error(
      "Unable to find monorepo package prefix - must start with '@'",
    );
  } else if (uniques.size > 1) {
    throw new Error(
      `Found multiple potential monorepo package prefixes: ${JSON.stringify([
        ...uniques.values(),
      ])}`,
    );
  } else {
    return packageNames[0];
  }
}

module.exports = getMonorepoPackagePrefix;
