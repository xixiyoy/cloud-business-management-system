import { getChannelList, createChannel, updateChannel, getChannelInformation, deleteChannel } from '../../api/channel'

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
    const { data: channel } = await getChannelInformation(channelId)
    commit('SET_CHANNEL', channel.channel)
  },
  async deleteChannel ({ commit }, channelIds) {
    await deleteChannel(channelIds)
  }
}

export default {
  state,
  actions,
  mutations
}
