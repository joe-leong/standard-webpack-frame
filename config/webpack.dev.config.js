const HtmlWebpackPlugin = require("html-webpack-plugin");
const { module:loderModules,plugins:commonPlugins } = require("./webpack.common.config");

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 8080,
    hot: true,
  },
  module:loderModules,
  plugins: [
    ...commonPlugins,
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "standard-webpack-frame",
    }),
  ],
};
