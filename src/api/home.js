import request from './request'

const getHomeBase = (type) => request({
  url: '/home/base',
  params: { type }
})

export {
  getHomeBase
}
