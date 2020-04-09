import { flowLists, updateFlow } from '../../api/flowConfig'

const state = {
  flows: {}
}
const mutations = {
  'SET_FLOWS' (state, flows) {
    state.flows = flows
  }
}
const actions = {
  async flowLists ({ commit }, getFlowsForm) {
    const { data: flows } = await flowLists(getFlowsForm)
    commit('SET_FLOWS', flows)
  },
  async updateFlow ({ commit }, updateFlowFrom) {
    await updateFlow(updateFlowFrom)
  }
}
export default {
  state,
  actions,
  mutations
}
