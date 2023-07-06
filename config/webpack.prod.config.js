const { join } = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:'production',
    entry: './src/main.js',
    devtool:false,
    output: {
        path: join(__dirname, '../dist'),
        filename: "[name].[contenthash:8].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({template:'/public/index.html'})
    ]
}