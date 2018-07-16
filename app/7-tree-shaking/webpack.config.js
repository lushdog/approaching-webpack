const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const Purifycss = require('purifycss-webpack')
const glob = require('glob-all')

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true, // 只插入一个style
            }
          },
          {
            loader: 'css-loader',
            options: {
              minimize: true,
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
          },
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('autoprefixer')(),
                  require('postcss-cssnext')()
                ]
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      allChunks: false
    }),
    new Purifycss({
      paths: glob.sync([
        path.resolve(__dirname, './*.html'),
        path.join(__dirname, './src/*.js')
      ])
    })
  ]
}