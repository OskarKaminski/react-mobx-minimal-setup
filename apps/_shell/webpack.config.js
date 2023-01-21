var path = require('path')
var webpack = require('webpack')
const { ModuleFederationPlugin } = require('webpack').container
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { dependencies: deps } = require('./package.json')

process.env.NODE_ENV = 'development'

function MyPlugin(){
    return {
        apply(comp){
            comp.hooks.run.tap('MyPlugin', (compilation) => {
                console.log(Object.getOwnPropertyNames(compilation))
            })
        }
    }
}

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
            name: 'shell',
            remotes: {
                reactMobxApp: "reactMobxApp@//localhost:3001/whatever.js",
                reactHooksApp: "reactHooksApp@//localhost:3002/whatever.js",
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
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Oskar\'s starter',
            filename: "index.html"
        }),
        // new MyPlugin()
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
        static: path.join(__dirname, 'dist'),
    }
}
