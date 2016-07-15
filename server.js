require('babel/register');
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    headers: {"Access-Control-Allow-Origin": "*"}
}).listen(3030, '0.0.0.0', function (err) {
        if (err) {
            console.log(err);
        }
        console.log('✅  Server is listening at http://localhost:3030');
    });