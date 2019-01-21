
const webSite = {
  state: {
    viewType: {
      isShow: false,
      type: '1'
    },
    tags: []
  },
  mutations: {
    SET_VIEW_TYPE: (state, type) => {
      state.viewType = Object.assign(state.viewType, type)
    }
  },
  actions: {
    setViewType({ commit }, type) {
      commit('SET_VIEW_TYPE', type)
    }
  }
}

export default webSite
