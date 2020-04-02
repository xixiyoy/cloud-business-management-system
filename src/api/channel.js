import request from './request'

const updateChannel = channel => request({
  url: '/channel/update',
  method: 'POST',
  data: channel
})

const createChannel = createChannelFrom => request({
  url: '/channel/save',
  method: 'POST',
  params: createChannelFrom
})
const getChannelInformation = channelId => request({
  url: `/channel/info/${channelId}`
})
const getChannelList = (limit, page) => request({
  url: '/channel/list',
  params: {
    limit,
    page
  }
})

export {
  getChannelInformation,
  getChannelList,
  createChannel,
  updateChannel
}
