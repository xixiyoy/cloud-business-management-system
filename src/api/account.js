import request from './request'

const getAccounts = (type, limit, page, year) => request({
  url: '/account/list',
  params: {
    type,
    limit,
    page,
    year
  }
})

export {
  getAccounts
}
