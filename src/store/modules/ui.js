
const uiStore = {
  namespaced: true,
  state: {
    menu: {
      open: false
    }
  },
  mutations: {
    toggleMenuOpen (state, payload) {
      if (typeof payload === 'boolean') state.menu.open = payload
      else state.menu.open = !state.menu.open
    }
  },
  actions: {
  }
}

export default uiStore
