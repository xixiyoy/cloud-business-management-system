import { getFlowConfigs, updateFlowConfig } from '../../api/flowConfig'

const state = {
  flowConfigs: [
    {}
  ]
}
const mutations = {
  'SET_FLOW_CONFIGS' (state, flowConfigs) {
    state.flowConfigs = flowConfigs
  }
}
const actions = {
  async getFlowConfigs ({ commit }) {
    const { data: flowConfigs } = await getFlowConfigs()
    commit('SET_FLOW_CONFIGS', flowConfigs)
  },
  async updateFlowConfig ({ commit }, updateFlowConfigForm) {
    const { data: { code, msg } } = await updateFlowConfig(updateFlowConfigForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  }
}
export default {
  state,
  actions,
  mutations
}
