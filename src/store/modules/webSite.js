const webSite = {
  state: {
    viewType: {
      isShow: false,
      type: '1'
    },
    tags: [],
    contextMenu: {}
  },
  mutations: {
    SET_VIEW_TYPE: (state, type) => {
      state.viewType = Object.assign(state.viewType, type)
    },
    SET_TREE_TAGS: (state, tags) => {
      state.tags = tags
    },
    SET_CONTEXT_MENU: (state, menu) => {
      state.contextMenu = menu
    }
  },
  actions: {
    setViewType({ commit }, type) {
      commit('SET_VIEW_TYPE', type)
    },
    setTreeTags({ commit }, tags) {
      commit('SET_TREE_TAGS', tags)
    },
    setContextMenu: ({ commit }, menu) => {
      commit('SET_CONTEXT_MENU', menu)
    }
  }
}

export default webSite
