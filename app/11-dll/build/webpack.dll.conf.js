const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    vue: ['vue', 'vuex', 'vue-router']
  },

  output: {
    path: path.join(__dirname, '../src/dll/'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../src/dll', '[name]-manifest.json'),
      name: '[name]'
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}