import request from './request'

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
  getChannelList
}
