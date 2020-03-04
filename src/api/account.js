import request from './request'

const getAccounts = () => request({
  url: '/accounts'
})

export {
  getAccounts
}
