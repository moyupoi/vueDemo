import * as types from './mutation-types'

const mutations = {
  [types.SET_TOKEN](state, res) {
    state.token = res
  },
  [types.SET_GAME_LIST](state, res) {
    state.gameList = res
  },
  [types.SET_USER_INFO](state, res) {
    state.userInfo = res
  },
  [types.REMOVE_TOKEN](state, res) {
    state.token = ''
  }
}

export default mutations
