import request from './request'

const getTenantDetail = () => request({
  url: 'business/tenant/detail'
})
const updateTenant = tenant => request({
  url: '/business/tenant/update',
  method: 'POST',
  data: tenant
})

export {
  getTenantDetail,
  updateTenant
}
