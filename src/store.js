import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '다이붐'
  },
  mutations: {
    setTitle (state, p) {
      state.title = p
    }
  },
  actions: {

  }
})
