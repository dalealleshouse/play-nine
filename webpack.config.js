var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin');

module.exports = {
  entry: "./src/js/app.jsx",
  output: {
    path: __dirname + "/dist/",
    filename: "app.js"
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }, {
      test: /\.(woff|woff2)$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.ttf$/,
      loader: "file-loader"
    }, {
      test: /\.eot$/,
      loader: "file-loader"
    }, {
      test: /\.svg$/,
      loader: "file-loader"
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8080/webpack-dev-server/'
    })
  ]
};
