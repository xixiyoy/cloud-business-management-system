import request from './request'

const getCustomers = (type, accountId) => request({
  url: '/customer/list',
  params: {
    type,
    customerId: accountId
    // linker,
    // status,
    // phone,
    // relUserId,
    // level,
    // creditCode,
    // createStartTime,
    // createEndTime
  }
})
const getCustomerDetail = customerId => request({
  url: `/customer/detail/${customerId}`
})
export {
  getCustomers,
  getCustomerDetail
}
