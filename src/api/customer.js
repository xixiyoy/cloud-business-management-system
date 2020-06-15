import request from './request'

const updateCustomer = customer => request({
  url: '/customer/update',
  method: 'POST',
  params: customer
})

const getAllCustomers = allCustomer => request({
  url: '/customer/all',
  data: allCustomer
})

const createCustomer = customer => request({
  url: '/customer/add',
  method: 'POST',
  data: customer
})
const getCustomers = ({ params, data }) => request({
  url: '/customer/list',
  method: 'POST',
  params,
  data
})

const getCustomerDetail = customerId => request({
  url: `/customer/detail/${customerId}`
})
export {
  createCustomer,
  getCustomers,
  getCustomerDetail,
  updateCustomer,
  getAllCustomers
}
