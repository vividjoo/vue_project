import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import pathify from '@/plugins/vuex-pathify'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

Vue.prototype.$http = axios;

export default new Vuex.Store({
  state: {
    id: ''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    loginStore: 'fdasfzxcv'
  },
  plugins: [
    // pathify.plugins,
    createPersistedState({
      paths: ['loginStore'],
      storage: window.localStorage,
      reducer:  state => ({
        id: ''
      })
    })
  ],  
})
