import * as types from './mutation-types'

export function setToken({ commit, dispatch, state }, token) {
  commit(types.SET_TOKEN, token)
}
export function setGameList({ commit, dispatch, state }, gameList) {
  commit(types.SET_GAME_LIST, gameList)
}
export function setUserInfo({ commit, dispatch, state }, userInfo) {
  commit(types.SET_USER_INFO, userInfo)
}
export function removeToken({ commit, dispatch }) {
  window.localStorage.clear()
  commit(types.REMOVE_TOKEN)
}
