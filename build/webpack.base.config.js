const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const {resolve} = require('./utils');

module.exports = function webpackBaseConfig (NODE_ENV = 'development') {
    const config = require('../config/config')[NODE_ENV];

    let plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: `${config.filePath}css/${NODE_ENV=== 'development' ? '[name]' :'[name].[contenthash:8]' }.css`,
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common']
        }),
        new webpack.DefinePlugin({

        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: false,
            inject: 'body',
            xhtml: false,
            minify: {
                removeComments: true,
            }
        })
    ];

    const webpackConfig = {
        entry: ['react-hot-loader/patch' ,resolve('src', 'app.js')],
        output: {
            path: resolve('../dist'),
            publicPath: config.staticPath,
            filename: `${config.filePath}js/${NODE_ENV=== 'development' ? '[name]' :'[name].[hash:8]'}.js`,
            chunkFilename: `${config.filePath}js/${NODE_ENV=== 'development' ? '[name]' :'[name].[hash:8]'}.js`
        },
        devtool: config.devtool,
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: ['react-hot-loader/babel'],
                    },
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                {
                    test: /\.jsx$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: `url-loader?limit=1&name=${config.imgPath}images/${NODE_ENV=== 'watch' ? '[name]' :'[name].[hash:8]'}.[ext]`
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: `file-loader?name=${config.filePath}fonts/${NODE_ENV=== 'watch' ? '[name]' :'[name].[hash:8]'}.[ext]`
                },
                {
                    test: /\.(scss|css)$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    minimize: true,
                                }
                            },
                            'postcss-loader',
                            'sass-loader?sourceMap',
                        ],
                        fallback: 'style-loader'
                    })
                },
            ]
        },
        plugins,
        resolve: {
            alias: {
                '@components': resolve('src/components/'),
                '@pages': resolve('src/pages/'),
                '@containers': resolve('src/containers/'),
                '@css': resolve('src/assets/css/')
            },
            extensions: ['.js', '.jsx']
        },
    };

    // 开发环境服务器配置
    if (NODE_ENV === 'development') {
        webpackConfig.devServer = {
            contentBase: resolve('dist'),
            compress: false,
            host: '127.0.0.1',
            port: config.port,
            hot: true,                                  // 热启动
            disableHostCheck: true,
            historyApiFallback: true
        };
    } else {
        webpackConfig.plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    dead_code: true
                },
                sourceMap: false,
                output: {
                    comments: false
                }
            })
        );
    }

    return webpackConfig;
};
