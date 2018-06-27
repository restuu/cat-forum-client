<template>
  <v-app>
    <nav-toolbar 
      :isLogin="isLogin"
      :person="user.fullname"
      @logout="logout"
      />

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import NavToolbar from './components/NavToolbar.vue'
import firebase from './helpers/firebase'
import { mapState, mapMutations } from 'vuex'

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
    },

    ...mapState([
      'user'
    ])
  },

  methods: {
    ...mapMutations([
      'setUser'
    ]),

    checkLoginState () {
      let self = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log('user logged in')
          let userObj = {
            fullname: user.displayName,
            photoUrl: user.photoURL
          }
          self.setUser(userObj)
        } else {
          console.log('no one logged in')
        }
        self.isLogin = !!user
      })
    },

    logout () {
      firebase.auth().signOut()
      this.setUser({})
      this.checkLoginState()
    }
  },

  async mounted () {
    await this.checkLoginState()
  }
}
</script>