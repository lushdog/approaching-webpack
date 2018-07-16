// es module
import sum from './sum'

// commonJS
const minus = require('./minus')

// amd
require(['./muti'], function (muti) {
  console.log('muti(2, 3) = ', muti(2, 3));
})

console.log('sum(23, 24) = ', sum(23, 24));
console.log('minus(27, 24) = ', minus(27, 24));