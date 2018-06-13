'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
    entry: './src/app/app.js',
    mode: 'development',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            use: ['file-loader']
        }, {
            test: /\.(html)$/,
            use: ['html-loader']
        }
        ]
    },
    devServer: {
        contentBase: './src/public',
        stats: 'minimal',
        host: '0.0.0.0'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/public/index.html'})
    ]
}
;