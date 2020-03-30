import request from './request'

const getBillings = (type, limit, page) => request({
  url: '/invoice/list',
  params: {
    type,
    limit,
    page
  }
})

export {
  getBillings
}
