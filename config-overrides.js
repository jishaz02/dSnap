const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  webpack: (config, env) => {
    config.plugins.push(
      new NodePolyfillPlugin({
        excludeAliases: ["console"],
      })
    );
    return config;
  },
};
