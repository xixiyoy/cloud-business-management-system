import request from './request'

const getTenantAccountList = () => request({
  url: '/tenantCollectAccount/list'
})

const createTenantAccount = createTenantAccountFrom => request({
  url: '/tenantCollectAccount/save',
  method: 'POST',
  data: createTenantAccountFrom
})

const getTenantAccountDetail = tenantCollectAccountId => request({
  url: `/tenantCollectAccount/info/${tenantCollectAccountId}`
})

const updateTenantAccount = tenantAccount => request({
  url: '/tenantCollectAccount/update',
  method: 'POST',
  data: tenantAccount
})

const deleteTenantAccount = tenantCollectAccountIds => request({
  url: '/tenantCollectAccount/delete',
  method: 'POST',
  data: tenantCollectAccountIds
})

export {
  createTenantAccount,
  getTenantAccountDetail,
  updateTenantAccount,
  deleteTenantAccount,
  getTenantAccountList
}
