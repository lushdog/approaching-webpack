const path = require('path')


module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        {
          // loader: 'style-loader/useable',
          loader: 'style-loader',
          options: {
            // insertInto: '#app', // 指定插入到哪个标签下
            singleton: true, // 只插入一个style
            transform: './css.transform.js'
          }
        },
        {
          loader: 'css-loader',
          options: {
            minimize: true,
            modules: true, // 开启 css 模块化
            localIdentName: '[path][name]_[local]_[hash:base64:5]' // 自定义模块化类名
          }
        }
      ]
    },{
      test: /\.less$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'less-loader'
        }
      ]
    }]
  }
}