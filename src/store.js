import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      fullname: '',
      email: '',
      password: '',
      photoUrl: ''
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

    setUser(state, userObj) {
      state.user.fullname = userObj.fullname
      state.user.email = userObj.email
      state.user.password = userObj.password
      state.user.photoUrl = userObj.photoUrl
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
