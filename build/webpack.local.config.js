const merge = require('webpack-merge');
const NODE_ENV = process.env.NODE_ENV = 'local';
const webpackBaseConfig = require('./webpack.base.config')(NODE_ENV);
const webpackConfig = merge(webpackBaseConfig, {

});

module.exports = webpackConfig;
