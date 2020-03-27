import request from './request'

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
const getLabel = (labelName) => request({
  url: '/label/list',
  params: {
    label: labelName
  }
})
export {
  getCustomers,
  getCustomerDetail,
  getLabel
}
