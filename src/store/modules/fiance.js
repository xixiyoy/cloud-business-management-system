import { getDiaryReportList } from '../../api/fiance'

const state = {
  fiances: {}
}

const mutations = {
  'SET_FIANCES' (state, fiances) {
    state.fiances = fiances
  }
}

const actions = {
  async getDiaryReportList ({ commit }, getDiaryReportForm) {
    const { page, limit } = getDiaryReportForm
    const { data: fiances } = await getDiaryReportList(page, limit)
    commit('SET_FIANCES', fiances)
  }
}

export default {
  state,
  actions,
  mutations
}
