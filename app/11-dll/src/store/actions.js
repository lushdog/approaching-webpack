import * as types from '@/store/mutation-types'

const actions = {
  increment (context, amount) {
    context.commit(types.PLUS_ONE, amount)
  }
}

export default actions