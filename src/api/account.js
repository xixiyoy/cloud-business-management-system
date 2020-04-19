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
// 提交收款
const submitCollection = submitCollectionForm => request({
  url: '/account/commitCollect',
  method: 'POST',
  params: submitCollectionForm
})
// 获取收款详情
const getCollectDetail = collectId => request({
  url: `/account/collectDetail?collectId=${collectId}`
})
// 修改收款提交的信息
const updateCollect = collect => request({
  url: '/account/updateCollect',
  method: 'POST',
  data: collect
})
// 驳回收款
const rejectCollection = rejectCollectionForm => request({
  url: '/account/rejectCollect',
  params: rejectCollectionForm
})
// 确认收款
const confirmReceipt = confirmReceipt => request({
  url: '/account/confirmCollect',
  params: confirmReceipt
})
// 提交提成信息
const submitRoyalty = submitRoyaltyForm => request({
  url: '/account/commitRoyalty',
  method: 'POST',
  params: submitRoyaltyForm
})
// 获取提成信息
const getRoyaltyDetail = royaltyId => request({
  url: `/account/royaltyDetail?royaltyId=${royaltyId}`
})
// 修改提成信息
const updateRoyalty = royalty => request({
  url: '/account/updateRoyalty',
  method: 'POST',
  data: royalty
})
// 驳回审批
const rejectRoyalty = rejectRoyaltyForm => request({
  url: '/account/rejectRoyalty',
  params: rejectRoyaltyForm
})
// 业务审批
const businessApproval = businessApprovalForm => request({
  url: '/account/royaltyBusiness',
  params: businessApprovalForm
})
// 财务审批
const financialApproval = financialApprovalForm => request({
  url: '/account/royaltyFiance',
  params: financialApprovalForm
})
// 出纳审批
const cashierApproval = cashierApprovalForm => request({
  url: '/account/royaltyCash',
  params: cashierApprovalForm
})
export {
  getAccounts,
  submitCollection,
  getCollectDetail,
  updateCollect,
  rejectCollection,
  submitRoyalty,
  getRoyaltyDetail,
  updateRoyalty,
  rejectRoyalty,
  businessApproval,
  financialApproval,
  cashierApproval,
  confirmReceipt
}
