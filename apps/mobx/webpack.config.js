var path = require('path')
var webpack = require('webpack')
const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')
const deps = require('./package.json').dependencies

module.exports = {
    entry: './src/index',
    output: {
        publicPath: 'auto'
    },
    devtool: 'eval',
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ModuleFederationPlugin({
            name: 'reactMobxApp',
            filename: 'whatever.js',
            exposes: {
                './HomePage': './src/pages/HomePage/HomePage'
            },
            shared: {
                react: {
                    requiredVersion: deps.react,
                    singleton: true
                },
                'react-dom': {
                    requiredVersion: deps['react-dom'],
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Mobx example',
            filename: "index.html"
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
        historyApiFallback: true,
        port: 3001
    }
}
