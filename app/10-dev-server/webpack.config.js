const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/app.js'
  },

  mode: 'development',

  devtool: 'eval', // source-map

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].bundle-[hash:5].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['env'] }
          },
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
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
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer')()
              ],
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(gif|jpg|png)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].min.[ext]',
              limit: 20000,
              outputPath: 'assets/imgs'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:data-src']
            }
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: true
  },

  devServer: {
    port: 9001,
    hot: true,
    historyApiFallback: true, // 防止单页应用404
    proxy: {
      '/': {
        target: 'https://m.weibo.com',
        changeOrigin: true,
        pathRewrite: {
          '^/comments': '/api/comments'
        },
        logLevel: 'debug',
        headers: {
          Cookie: ''
        }
      }
    }
  },

  plugins: [
    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['app'],
      minify: {
        collapseWhitespace: true
      }
    }),

    new webpack.HotModuleReplacementPlugin()

  ]
}