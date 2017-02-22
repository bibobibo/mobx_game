var path = require('path');
var webpack = require("webpack");
var host = "localhost";
var port = "8080";

var config = {
  entry: [
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://" + host + ":" + port + "/",
    path.resolve(__dirname, './src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'js'),
    publicPath: "http://" + host + ":" + port + "/",
    filename: 'main.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "cheap-module-source-map"
};

module.exports = config;
