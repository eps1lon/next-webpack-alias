const path = require("path");

const baseConfig = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    alias: {
      classnames: "clsx"
    }
  }
};

const clientConfig = {
  ...baseConfig,
  entry: path.resolve(__dirname, "src", "client.js"),
  output: {
    path: path.resolve(__dirname, "out", "client")
  },
  target: "web"
};

const serverConfig = {
  ...baseConfig,
  entry: path.resolve(__dirname, "src", "server.js"),
  output: {
    path: path.resolve(__dirname, "out", "server")
  },
  target: "node"
};

module.exports = [serverConfig, clientConfig];
