### 学习准备

#### 模块化

###### 命名空间

###### commonjs

`module.exports` 暴露模块, `require` 引入模块, 同步执行

###### amd/cmd/umd

amd

```javascript
define(
	// 模块名
	'alpha',
  	['require', 'exports', 'beta'],
  	function (require, exports, beta) {
      	exports.verb = function() {
          	return beta.verb()
      }
  }
)
```

cmd 尽可能懒执行

```javascript
define(function(require, exports, module) {
  	// 通过 require 引入依赖
    var $ = require('jquery')
    var Spinning = require('./spinning')
    // 通过 exports 对外提供接口
    exports.doSomething = ...
    // 或者
    module.exports = ...
})
```

umd 通用解决方案 ，判断是否支持amd, 判断是否支持commonJS, 都不支持使用全局变量

```javascript
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      	// amd Register as an anonymous module
      	define([], factory)
    } else if (typeof exports === 'object') {
        // Node.
      	module.exports = factory()
    } else {
        // Browser globals (root is window)
      	root.returnExports = factory()
    }
})(this, function() {
    ...
    return {}
})
```

###### ES Module

一个文件一个模块 `export/import` 

``` javascript
// 引入
import theDefault, { named1, named2 } from 'src/lib'
import theDefault from 'src/lib'
import { named1, named2 } from 'src/lib'
import { named1 as myNamed1, named2 } from 'src/lib'
import * as mylib from 'src/lib'
import 'src/lib'
// 导出
export let myValue = ''
export function myFun() {}
export class MyClass {}
export default 123
export default function () {}

const MY_CONST = ''
export { MY_CONST as THE_CONST }
// 引入再导出
export * from 'src/other_module'
export { foo, bar } from 'src/other_module'
export { foo as myFoo, bar } from 'src/other_module'
```

#### CSS模块化

##### CSS设计模式

###### OOCSS 

​    	结构和设计分离，容器和内容分离。

###### SMACSS

​	可扩展和模块化结构。base - layout - module - state - theme

###### Atomic CSS

​	原子化css `<div class="mt-10 w-100 h-15"></div>`

###### MCSS

​	多层级的css。foundation > base > project > cosmetic

###### AMCSS

​	属性编码 `<div am-size="large" am-disabled></div>`

###### BEM

​	Block - Element - Modifier

#### webpack 简介

##### 概述

javascript打包，代码分割并按需加载，根据loader加载各种资源。

##### 版本更迭 

v1.0.0  --- 2014.2.20

v2.2.0  --- 2017.1.18

v3.0.0  --- 2017.6.19

v4.0.0  ---  ???

##### 功能进化 

v1 编译打包，HMR模块热更新，代码分割，文件处理

v2 Tree Shaking ，ES module, 动态Import

v3 Scope Hoisting作用域提升，Magic Comments 配合动态import使用

#### webpack 核心概念 

##### Entry

代码的入口，打包的入口，单个或多个

```javascript
module.exports = {
  entry: ['index.js', 'vendor.js']
  // entry: {
  //  index: 'index.js',
  //  vendor: 'vendor.js'
  // }
}
```

##### Output

打包成的文件，一个或多个，自定义规则

```javascript
module.exports = {
  entry: {
    index: 'index.js',
  	vendor: 'vendor.js'
  },
  output: {
    filename: '[name].min.[hash:5].js'
  }
}
```

##### Loader

处理文件，转化为模块

常用loader 

编译相关：babel-loader, ts-loader

样式相关：style-loader, css-loader, less-loader, postcss-loader

文件相关：file-loader, url-loader

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'css-loader'
      }
    ]
  }
}
```

##### Plugins

参与打包的整个过程

打包优化和压缩，

配置编译时的变量

```javascript
const webpack = require('webpack')

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
}
```

常用

优化相关：CommonsChunkPlugin, UglifyWebpackPlugin

功能相关：ExtractTextWebpackPlugin, HtmlWebpackPlugin,HotModuleReplacementPlugin, CopyWebpackPlugin

##### 名词

Chunk: 代码块

Bundle

Module

### 由浅入深webpack



#### 使用webpack

##### webpack命令

##### webpack配置

##### 第三方cli



#### 打包JS



#### 编译es6/7

##### babel

`npm install -save-dev babel-loader babel-core`

##### babel presets

es2015

es2016

es2017

env

babel-preset-stage 0 - 3

`npm install babel-preset-env -save-dev`

targets 浏览器版本设置

babel polyfill 

`npm install babel-polyfill -save`

1.全局垫片，2.为应用准备。函数和方法转换。Generator, Set, Map, Array.from

babel runtime transform

`npm install babel-plugin-transform-runtime -save-dev`

1.局部垫片，2.为开发框架准备。



####编译TypeScript

`npm i typescript ts-loader --save-dev`

配置 tsconfig.json



#### 打包公共代码

##### 配置

options.name

options.filename

options.minChunks

options.chunks

options.children

options.deepChildren

options.async



#### 代码分割和懒加载

##### require.ensure

##### require.include

import()

#### 处理CSS

##### 引入

style-loader style-loader/url 变成文件插入style-loader/useable 可以使用use()和unuse()方法手动插入删除style

options: insertInto //插入到dom的位置，singleton // 是否一个style标签 tranform // 插入浏览器之前运行的js

css-loader

options: alias // 解析的别名 importLoader  // @import  Minimize // 是否压缩 modules // 启用css-modules

##### CSS modules

options.modules = true; localIdentName: '[path][name]_[local]_[hash:base64:5]'

##### 配置less/sass/stylus

安装对应的处理器和loader

##### 提取CSS代码

```javascript
new ExtractTextWebpackPlugin({
  filename: '[name].min.css',
  allChunks: false
})
```



#### PostCSS

##### A tool for transforming CSS with JavaScript

##### 安装

Postcss,

postcss-loader,

Autoprefixer:  浏览器厂商前缀

postcss-cssnano: CSS压缩

postcss-cssnext: 使用未来的css语法，css变量，自定义选择器，计算。

```scss
// cssnext 变量
:root {
  --mainColor: red;
}
a {
  color: var(--mainColor)
}
```

Broswerslist  写在package.json

#### Tree Shaking

##### JS Tree Shaking

Webpack.optimize.uglifyJS

##### CSS Tree Shaking

Purifycss-webpack

options paths: glob.sync([])

移除没用到类的css

##### 使用场景

###### 常规优化

###### 引入第三方库的某一个功能

#### 文件处理

##### 图片处理

CSS中引入的图片

自动合成雪碧图

压缩图片

Base64编码

file-loader, url-loader, img-loader, postcss-sprites

##### 字体文件

##### 第三方JS库

webpack.providePlugin

import-loader
```javascript
require('imports?$=jquery!./jqGreen')
```

window

#### HTML处理

##### 自动生成HTML

##### 场景优化

##### HtmlWebpackPlugin

###### options

template

filename

minify

chunks

injects