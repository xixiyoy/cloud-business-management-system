import request from './request'

const getServiceProductList = () => request({
  url: '/product/list'
})

export {
  getServiceProductList
}
