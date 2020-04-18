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
  url: `/account/collectDetail/${collectId}`
})
// 修改收款提交的信息
const updateCollect = collect => request({
  url: '/account/updateCollect',
  method: 'POST',
  data: collect
})
// 驳回收款
const rejectCollection = (collectId, rejectRemark) => request({
  url: '/account/rejectCollect',
  params: {
    collectId,
    rejectRemark
  }
})
// 提交提成信息
const submitRoyalty = submitRoyaltyForm => request({
  url: '/account/commitRoyalty',
  method: 'POST',
  params: submitRoyaltyForm
})
// 获取提成信息
const getRoyaltyDetail = royaltyId => request({
  url: `/account/royaltyDetail/${royaltyId}`
})
// 修改提成信息
const updateRoyalty = royalty => request({
  url: '/account/updateRoyalty',
  method: 'POST',
  data: royalty
})
// 驳回审批
export {
  getAccounts,
  submitCollection,
  getCollectDetail,
  updateCollect,
  rejectCollection,
  submitRoyalty,
  getRoyaltyDetail,
  updateRoyalty
}
