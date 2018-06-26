<template>
  <v-app>
    <nav-toolbar :isLogin="isLogin" @logout="logout"/>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import NavToolbar from './components/NavToolbar.vue'
import firebase from './helpers/firebase'

export default {
  name: 'App',
  components: {
    NavToolbar
  },

  computed: {
    isLogin: {
      get () {
        return this.$store.state.isLogin
      },
      set (v) {
        this.$store.commit('setLoginState', v)
      }
    }
  },

  methods: {
    checkLoginState () {
      let self = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log('user logged in')
        } else {
          console.log('no one logged in')
        }
        self.isLogin = !!user
      })
    },

    logout () {
      firebase.auth().signOut()
      this.checkLoginState()
    }
  },

  async mounted () {
    await this.checkLoginState()
  }
}
</script>