const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool:'inline-source-map',
    devServer: {
        static: './dist',
        port: 8080,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            title:'standard-webpack-frame'
        })
    ]
}