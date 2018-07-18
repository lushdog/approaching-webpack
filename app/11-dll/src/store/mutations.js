import * as types from './mutation-types'

const mutations = {
  [types.PLUS_ONE] (state, amount) {
    state.count += amount
  }
}

export default mutations