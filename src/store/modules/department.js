import { getDeptList } from '../../api/department'

const state = {
  depts: []
}

const mutations = {
  'SET_DEPTS' (state, depts) {
    state.depts = depts
  }
}

const actions = {
  async getDeptList ({ commit }) {
    const { data: depts } = await getDeptList()
    commit('SET_DEPTS', depts)
  }
}

export default {
  state,
  actions,
  mutations
}
