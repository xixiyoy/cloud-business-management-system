import { getChannelList, createChannel, updateChannel, getChannelInformation } from '../../api/channel'

const state = {
  channels: {},
  channel: {}
}

const mutations = {
  'SET_CHANNELS' (state, channels) {
    state.channels = channels
  },
  'SET_CHANNEL' (state, channel) {
    state.channel = channel
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
  },
  async updateChannel ({ commit }, updateChannelForm) {
    await updateChannel(updateChannelForm)
  },
  async getChannelInformation ({ commit }, channelId) {
    const { data: channel } = getChannelInformation(channelId)
    commit('SET_CHANNEL', channel)
  }
}

export default {
  state,
  actions,
  mutations
}
