// require.include(moduleA)可以把moduleA 提到app.js
require.include('./moduleA')
var page = 'subPageA'

// 动态引入
if (page === 'subPageA') {
  import(/* webpackChunkName: 'subPageA' */ './subPageA').then(function (subPageA) {
    console.log(subPageA);
  })
} else if (page === 'subPageB') {
  import(/* webpackChunkName: 'subPageB' */ './subPageB').then(function (subPageB) {
    console.log(subPageB);
  })
}

require.ensure(['lodash'], function() {
  var _ = require('lodash')
  _.join(['1', '2'], '3')
}, 'vendor')


export default 'pageA'