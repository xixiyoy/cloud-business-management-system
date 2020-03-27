import request from './request'

const getChannelInformation = channelId => request ({
  url: `/channel/info/${channelId}`
})
const getChannelList = () => request ({
  url: '/channel/list'
})

export {
  getChannelInformation,
  getChannelList
}