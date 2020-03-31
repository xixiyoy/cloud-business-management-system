import {
  getDiaryReportList,

  // 2.1 导入之前 api 中导出的方法
  createFiance
} from '../../api/fiance'

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
  },

  // 2.2 在 actions 中写方法
  async createFiance ({ commit }, createFianceForm) {
    // 调用上面导入的方法
    const response = await createFiance(createFianceForm)
    console.log(response)
  }
}

export default {
  state,
  actions,
  mutations
}
