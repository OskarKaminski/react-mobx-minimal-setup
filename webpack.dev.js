var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js'
    },
    devtool: 'eval',
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Oskar\'s starter'
        })
    ],
    devServer: {
        historyApiFallback: true
    }
}
