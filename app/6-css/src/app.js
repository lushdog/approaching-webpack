// style-loader/useable 使用
// import base from './css/base.css'
// import common from './css/common.css'

// let flag = false

// setInterval(function() {
//   if (flag) {
//     base.unuse() // 样式不使用
//   } else {
//     base.use() // 样式使用
//   }
//   flag = !flag
// }, 500)

import base from './css/base.css'
import './css/base.less'
import common from './css/common.css'

const app = document.querySelector('#app')
app.innerHTML = '<div class="'+ base.box + '"></div>'