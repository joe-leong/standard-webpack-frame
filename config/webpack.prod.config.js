const { join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  module: loderModules,
  plugins: commonPlugins,
} = require("./webpack.common.config");
module.exports = {
  mode: "production",
  entry: "./src/main.js",
  devtool: false,
  output: {
    path: join(__dirname, "../dist"),
    filename: "[name].[contenthash:8].js",
    clean: true,
  },
  module: loderModules,
  plugins: [
    ...commonPlugins,
    new HtmlWebpackPlugin({ template: "/public/index.html" })
  ],
};
