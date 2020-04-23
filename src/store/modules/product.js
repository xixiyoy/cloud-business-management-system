import { getProducts, createProduct, updateProduct, deleteProduct, getProductDetail } from '../../api/product'

const state = {
  products: {
    page: {
      list: []
    }
  },
  product: {}
}

const mutations = {
  'SET_PRODUCTS' (state, products) {
    state.products = products
  },
  'SET_PRODUCT' (state, product) {
    state.product = product
  }
}

const actions = {
  async getProducts ({ commit }, getProductsForm) {
    const { data: products } = await getProducts(getProductsForm)
    commit('SET_PRODUCTS', products)
  },
  async createProduct ({ commit }, createProductForm) {
    const { data: { code, msg } } = await createProduct(createProductForm)
    if (code !== 0) {
      return Promise.reject(msg)
    }
  },
  async getProductById ({ commit }, productId) {
    const response = await getProductDetail(productId)
    const product = response.data.product
    commit('SET_PRODUCT', product)
  },
  async updateProduct ({ commit }, updateProductForm) {
    await updateProduct(updateProductForm)
  },
  async deleteProduct ({ commit }, productIds) {
    const { data: { code, msg } } = await deleteProduct(productIds)
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
