const fs = require('fs');
const path = require('path');

const getWorkspaces = require('get-yarn-workspaces');

function getMonorepoTsConfigs(dirname) {
  return getWorkspaces(dirname)
    .map(workspacePath => path.join(workspacePath, 'tsconfig.json'))
    .filter(tsconfigPath => fs.existsSync(tsconfigPath));
}

module.exports = getMonorepoTsConfigs;
