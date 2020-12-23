import Vue from 'vue'
import Vuex from 'vuex'
import uiStore from './modules/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui: uiStore
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }

})
