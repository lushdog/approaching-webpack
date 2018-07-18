import './css/base.less'
import axios from 'axios'
import { a } from './common/util'
a()
axios.get('/msg/index', { format: 'cards' }).then(res => {
  console.log(res)
})
