const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname + '/web/src',
  entry: {
    index: './index.jsx'
  },
  output: {
    path: path.join(__dirname, '/web/bundle'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader'
    }]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('/web/src')
    ],
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: 'web/bundle',
    inline: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requestd-With, content-type, Authorizations'
    }
  },
  devtool: 'source-map'
}
