import { getChannelList, createChannel } from '../../api/channel'

const state = {
  channels: {}
}

const mutations = {
  'SET_CHANNELS' (state, channels) {
    state.channels = channels
  }
}

const actions = {
  async getChannelList ({ commit }, getChannelFrom) {
    const { limit, page } = getChannelFrom
    const { data: channels } = await getChannelList(limit, page)
    commit('SET_CHANNELS', channels)
  },
  async createChannel ({ commit }, createChannelFrom) {
    const response = await createChannel(createChannelFrom)
    console.log(response)
  }
}

export default {
  state,
  actions,
  mutations
}
