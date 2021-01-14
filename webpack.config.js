const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin');

module.exports = {

    entry: [
        './src/js/index.js',
        './src/style/main.scss'
    ],

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    /* 'style-loader', */
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
        new CopyWebpackPlugin({
            patterns: [
                { from: 'static/images', to: 'images/' }
            ]
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/home.html',
            filename: 'home.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/product-listing.html',
            filename: 'product-listing.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/signin.html',
            filename: 'signin.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/register.html',
            filename: 'register.html',
        }),
        new HtmlWebpackPlugin({
            template: 'src/view/cart.html',
            filename: 'cart.html',
        })
    ]
}