
const uiStore = {
  namespaced: true,
  state: {
    menu: {
      open: false
    }
  },
  mutations: {
    toggleMenuOpen (state) {
      state.menu.open = !state.menu.open
    }
  },
  actions: {
  }
}

export default uiStore
