import { getServiceProductList, createProduct } from '../../api/product'

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
  },
  async createProduct ({ commit }, createProductForm) {
    const response = await createProduct(createProductForm)
    console.log(response)
  }
}

export default {
  state,
  actions,
  mutations
}
