var path = require('path')
// var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'development'

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[contenthash].js'
    },
    devtool: 'eval',
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Oskar\'s starter'
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        historyApiFallback: true
    }
}
