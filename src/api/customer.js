import request from './request'

const createCustomer = customer => request({
  url: '/customer/add',
  method: 'POST',
  data: customer
})

const getCustomers = (type, accountId, linker, status, phone, relUserId, level, creditCode, createStartTime, createEndTime) => request({
  url: '/customer/list',
  params: {
    type,
    customerId: accountId,
    linker,
    status,
    phone,
    relUserId,
    level,
    creditCode,
    createStartTime,
    createEndTime
  }
})
const getCustomerDetail = customerId => request({
  url: `/customer/detail/${customerId}`
})
export {
  createCustomer,
  getCustomers,
  getCustomerDetail
}
