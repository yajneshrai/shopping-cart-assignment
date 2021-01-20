const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin');

module.exports = {

    entry: [
        './src/js/main.js',
        './src/style/main.scss'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false
        }
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        {
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    ]
                }
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.hbs$/,
                use: 'handlebars-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg)$/,
                use: 'file-loader',
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static/images', to: 'static/images/' }
            ]
        }),
        new HtmlWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/view/index.hbs',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/product-listing.hbs',
            filename: 'product-listing.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/signin.hbs',
            filename: 'signin.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/register.hbs',
            filename: 'register.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/cart.hbs',
            filename: 'cart.html',
        })
    ]
}