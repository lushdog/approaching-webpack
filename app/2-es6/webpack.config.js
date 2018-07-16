module.exports = {
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: '/node_modules/'
      }
    ]
  }
}