import { getServiceProductList } from '../../api/product'

const state = {
  products: {}
}

const mutations = {
  'SET_PRODUCTS' (state, products) {
    state.products = products
  }
}

const actions = {
  async getServiceProductList ({ commit }, getServiceProductFrom) {
    const { limit, page } = getServiceProductFrom
    const { data: products } = await getServiceProductList(limit, page)
    console.log(getServiceProductList)
    commit('SET_PRODUCTS', products)
  }
}

export default {
  state,
  actions,
  mutations
}
