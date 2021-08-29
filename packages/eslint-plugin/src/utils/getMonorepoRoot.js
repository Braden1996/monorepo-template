const fs = require('fs');
const path = require('path');

const findRoot = require('find-root');

// Inspired by https://github.com/viewstools/yarn-workspaces-cra-crna/blob/master/get-yarn-workspaces/index.js

// as per https://yarnpkg.com/blog/2018/02/15/nohoist/ -
// "workspaces" can be an array or an object that contains "packages"
function getPackages(packageJson) {
  if (!('workspaces' in packageJson)) {
    return null;
  }
  const { workspaces } = packageJson;
  if (Array.isArray(workspaces)) {
    return workspaces;
  }
  return workspaces.packages || null;
}

const getMonorepoRoot = from =>
  findRoot(from, dir => {
    const pkg = path.join(dir, 'package.json');
    return fs.existsSync(pkg) && getPackages(require(pkg)) !== null;
  });

module.exports = getMonorepoRoot;
