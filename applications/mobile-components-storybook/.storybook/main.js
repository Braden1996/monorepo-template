const webpackConfig = require('./webpack.config')
import packageJson from '../package.json'

const rnstl = packageJson.config["react-native-storybook-loader"]
const mobileComponentsDir = rnstl.searchDir[0]

module.exports = {
  stories: [`${mobileComponentsDir}/${rnstl.pattern}`],
  webpackFinal: (config) => {
    return webpackConfig({config})
  },
}
