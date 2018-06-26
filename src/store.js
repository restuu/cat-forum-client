import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      fullname: '',
      email: '',
      password: '',
    },
    valid: false,
    isLogin: false
  },

  mutations: {
    setEmail(state, email) {
      state.user.email = email
    },

    setFullname(state, fullname) {
      state.user.fullname = fullname
    },

    setPassword(state, password) {
      state.user.password = password
    },

    setValid(state, valid) {
      state.valid = valid
    },

    setLoginState(state, status) {
      state.isLogin = status
    }
  },
  
  actions: {

  }
})
