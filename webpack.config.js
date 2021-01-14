const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        /* publicPath: '/assets/' */
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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png | jpg | svg)$/,
                use: 'url-loader'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/view/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}