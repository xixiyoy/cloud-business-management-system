import request from './request'

const getAccounts = (type, limit, page) => request({
  url: '/account/list',
  params: {
    type,
    limit,
    page
  }
})

export {
  getAccounts
}
