import request from './request'

const updateCustomer = customer => request({
  url: '/customer/update',
  method: 'POST',
  params: customer
})

const createCustomer = customer => request({
  url: '/customer/add',
  method: 'POST',
  data: customer
})
const getCustomers = data => request({
  url: `/customer/list?limit=${data.limit}&page=${data.page}`,
  method: 'POST',
  data: { type: data.type }
})

const getCustomerDetail = customerId => request({
  url: `/customer/detail/${customerId}`
})
export {
  createCustomer,
  getCustomers,
  getCustomerDetail,
  updateCustomer
}
