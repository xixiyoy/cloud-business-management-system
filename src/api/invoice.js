import request from './request'

const updateInvoice = invoice => request({
  url: '/invoice/update',
  method: 'POST',
  params: invoice
})

const getBillingDetail = invoiceId => request({
  url: `/invoice/detail/${invoiceId}`
})

const getBillings = (type, limit, page) => request({
  url: '/invoice/list',
  params: {
    type,
    limit,
    page
  }
})

const createInvoice = createInvoiceForm => request({
  url: '/invoice/add',
  method: 'POST',
  params: createInvoiceForm
})

export {
  getBillings,
  createInvoice,
  getBillingDetail,
  updateInvoice
}
