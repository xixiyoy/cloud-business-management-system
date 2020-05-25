import request from './request'
// 修改开票
const updateInvoice = invoice => request({
  url: '/invoice/update',
  method: 'POST',
  params: invoice
})
// 获取详情
const getBillingDetail = invoiceId => request({
  url: `/invoice/detail/${invoiceId}`
})
// 获取开票列表
const getBillings = data => request({
  url: `/invoice/list?limit=${data.limit}&page=${data.page}`,
  method: 'POST',
  data: { type: data.type, invoiceStateValue: data.invoiceStateValue }
})
// 申请开票
const createInvoice = createInvoiceForm => request({
  url: '/invoice/add',
  method: 'POST',
  params: createInvoiceForm
})
// 作废开票
const cancelInvoice = cancelInvoiceForm => request({
  url: '/invoice/cancel',
  method: 'POST',
  params: cancelInvoiceForm
})
// 确认开票
const confrimInvoice = confrimInvoiceForm => request({
  url: '/invoice/confirm',
  method: 'POST',
  params: confrimInvoiceForm
})
// 撤回申请
const deleteInvoice = deleteInvoiceForm => request({
  url: '/invoice/delete',
  method: 'delete',
  params: deleteInvoiceForm
})
// 驳回申请
const rejectInvoice = rejectInvoiceForm => request({
  url: '/invoice/returnRequest',
  params: rejectInvoiceForm
})
export {
  getBillings,
  createInvoice,
  getBillingDetail,
  updateInvoice,
  cancelInvoice,
  confrimInvoice,
  deleteInvoice,
  rejectInvoice
}
