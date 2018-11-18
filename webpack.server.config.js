const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const baseConfig = require('./webpack.base.config');

const config = {
  ...baseConfig,
  entry: path.join(__dirname, 'src/entry-server.js'),
  target: 'node',
  output: {
    ...baseConfig.output,
    libraryTarget: 'commonjs2'
  },
  plugins: [
    ...baseConfig.plugins,
    new VueSSRServerPlugin()
  ]
};

module.exports = config;
