import { getAccounts, submitCollection, getCollectDetail, updateCollect, rejectCollection, submitRoyalty, getRoyaltyDetail, updateRoyalty, confirmReceipt, rejectRoyalty, businessApproval, financialApproval, cashierApproval } from '../../api/account'

const state = {
  accounts: {},
  collectDetail: {},
  royaltyDetail: {},
  rejectCollection: {},
  rejectRoyalty: {}
}
const mutations = {
  'SET_ACCOUNTS' (state, accounts) {
    accounts.list = accounts.list.map(account => {
      if (account.customerId === 15) {
        account.collectStatusName = '未申请'
        account.collectStatusValue = '0'
        account.royaltyStatusValue = '0'
        account.royaltyStatusName = '未申请'
      }
      if (account.customerId === 20) {
        account.collectStatusName = '已确认'
        account.collectStatusValue = '3'
        account.royaltyStatusValue = '1'
        account.royaltyStatusName = '待确认'
      }
      return account
    })
    state.accounts = accounts
  },
  'SET_COLLECT_DETAIL' (state, collectDetail) {
    state.collectDetail = collectDetail
  },
  'SET_ROYALTY_DETAIL' (state, royaltyDetail) {
    state.royaltyDetail = royaltyDetail
  },
  'SET_REJECT_COLLECTION' (state, rejectCollection) {
    state.rejectCollection = rejectCollection
  },
  'SET_REJECT_ROYALTY' (state, rejectRoyalty) {
    state.rejectRoyalty = rejectRoyalty
  }
}
const actions = {
  async getAccounts ({ commit }, getAccountsForm) {
    const { type, limit, page, year } = getAccountsForm
    const { data: accounts } = await getAccounts(type, limit, page, year)
    commit('SET_ACCOUNTS', accounts)
  },
  async submitCollection ({ commit }, submitCollectionForm) {
    const { data: { code, msg } } = await submitCollection(submitCollectionForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async getCollectDetail ({ commit }, collectId) {
    const { data: { code, msg, collect } } = await getCollectDetail(collectId)
    if (code !== 0) {
      return Promise.reject(msg)
    }
    commit('SET_COLLECT_DETAIL', collect)
  },
  async updateCollect ({ commit }, updateCollectForm) {
    await updateCollect(updateCollectForm)
  },
  async rejectCollection ({ commit }, rejectCollectionForm) {
    const { data: { code, msg } } = await rejectCollection(rejectCollectionForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async confirmReceipt ({ commit }, confirmReceiptForm) {
    const { data: { code, msg } } = await confirmReceipt(confirmReceiptForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async submitRoyalty ({ commit }, submitRoyaltyForm) {
    const response = await submitRoyalty(submitRoyaltyForm)
    console.log(response)
  },
  async getRoyaltyDetail ({ commit }, royaltyId) {
    const { data: { code, msg, royalty } } = await getRoyaltyDetail(royaltyId)
    if (code !== 0) {
      return Promise.reject(msg)
    }
    commit('SET_ROYALTY_DETAIL', royalty)
  },
  async updateRoyalty ({ commit }, updateRoyaltyForm) {
    await updateRoyalty(updateRoyaltyForm)
  },
  async rejectRoyalty ({ commit }, rejectRoyaltyForm) {
    const { data: { code, msg } } = await rejectRoyalty(rejectRoyaltyForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async businessApproval ({ commit }, businessApprovalForm) {
    const { data: { code, msg } } = await businessApproval(businessApprovalForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async financialApproval ({ commit }, financialApprovalForm) {
    const { data: { code, msg } } = await financialApproval(financialApprovalForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async cashierApproval ({ commit }, cashierApprovalForm) {
    const { data: { code, msg } } = await cashierApproval(cashierApprovalForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  }
}
export default {
  state,
  actions,
  mutations
}
