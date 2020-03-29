import { getDiaryReportList } from '../../api/fiance'

const state = {
  fiances: []
}

const mutations = {
  'SET_FIANCES' (state, fiances) {
    state.fiances = fiances
  }
}

const actions = {
  async getDiaryReportList ({ commit }) {
    const { data: fiances } = await getDiaryReportList()
    console.log(fiances)
    commit('SET_FIANCES', fiances)
  }
}

export default {
  state,
  actions,
  mutations
}
