module.exports = {
  entry: {
    app: './src/app.ts'
  },
  output: {
    filename: '[name].[hash:5].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: '/node_modules/'
      }
    ]
  }
}