import { getChannelList } from '../../api/channel'

const state = {
  channels: {}
}

const mutations = {
  'SET_CHANNELS' (state, channels) {
    state.channels = channels
  }
}

const actions = {
  async getChannelList ({ commit }) {
    const { data: channels } = await getChannelList()
    commit('SET_CHANNELS', channels)
  }
}

export default {
  state,
  actions,
  mutations
}
