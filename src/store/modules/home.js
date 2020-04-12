import { getHomeBase } from '../../api/home'

const state = {
  home: {
    receiveTaskList: []
  }
}
const mutations = {
  'SET_HOME' (state, home) {
    state.home = home
  }
}
const actions = {
  async getHomeBase ({ commit }, getHomeBaseForm) {
    const { type } = getHomeBaseForm
    const { data: home } = await getHomeBase(type)
    commit('SET_HOME', home)
  }
}
export default {
  state,
  actions,
  mutations
}
