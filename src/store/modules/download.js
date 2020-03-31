import { getDownloadList } from '../../api/download'

const state = {
  downloads: {}
}

const mutations = {
  'SET_DOWNLOADS' (state, downloads) {
    state.downloads = downloads
  }
}

const actions = {
  async getDownloadList ({ commit }, getDownloadFrom) {
    const { limit, page } = getDownloadFrom
    const { data: downloads } = await getDownloadList(limit, page)
    commit('SET_DOWNLOADS', downloads)
  }
}

export default {
  state,
  actions,
  mutations
}
