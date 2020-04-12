import { getDeptList, getDeptMembers } from '../../api/department'

const state = {
  depts: [],
  members: {}
}

const mutations = {
  'SET_DEPTS' (state, depts) {
    state.depts = depts
  },
  'SET_MEMBERS' (state, members) {
    state.members = members
  }
}

const actions = {
  async getDeptList ({ commit }) {
    const { data: depts } = await getDeptList()
    commit('SET_DEPTS', depts)
  },
  async getDeptMembers ({ commit }) {
    const { data: members } = await getDeptMembers()
    commit('SET_MEMBERS', members)
  }
}

export default {
  state,
  actions,
  mutations
}
