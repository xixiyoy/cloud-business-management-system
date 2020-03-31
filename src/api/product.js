import request from './request'

const getServiceProductList = (limit, page) => request({
  url: '/product/list',
  params: {
    limit,
    page
  }
})

export {
  getServiceProductList
}
