import { getServiceProductList } from '../../api/product'

const state = {
  products: []
}

const mutations = {
  'SET_PRODUCTS' (state, products) {
    state.products = products
  }
}

const actions = {
  async getServiceProductList ({ commit }) {
    const { data: products } = await getServiceProductList()
    commit('SET_PRODUCTS', products)
  }
}

export default {
  state,
  actions,
  mutations
}
