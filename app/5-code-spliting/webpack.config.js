const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    'app': './src/app'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: './dist/'
  },
}