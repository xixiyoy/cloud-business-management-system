import request from './request'

const getTenantAccountList = (limit, page) => request({
  url: '/tenantCollectAccount/list',
  params: {
    limit,
    page
  }
})

const createTenantAccount = createTenantAccountFrom => request({
  url: '/tenantCollectAccount/save',
  method: 'POST',
  params: createTenantAccountFrom
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
  data: {
    tenantCollectAccountIds
  }
})

export {
  createTenantAccount,
  getTenantAccountDetail,
  updateTenantAccount,
  deleteTenantAccount,
  getTenantAccountList
}
