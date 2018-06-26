<template>
  <v-layout align-center justify-center>
    <v-flex class="text-xs-center" xs12 md5>

      <!-- <login-form :toRegister="toRegister"/>

      <div>
        <v-btn 
          color="primary"
          @click="login"
          >
        Login</v-btn>
        <v-btn 
          color="warning"
          @click="register"
          >
        Register</v-btn>
      </div> -->
      <div id="firebaseui-auth-container"></div>
    </v-flex>
  </v-layout>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import axios from 'axios'
import { mapState } from 'vuex'
import { uiConfig, ui } from '@/helpers/firebaseUI'
import firebase from '@/helpers/firebase';

export default {
  components: {
    LoginForm
  },

  data () {
    return {
      toRegister: false
    }
  },

  computed: {
    ...mapState([
      'user',
      'valid'
    ])
  },

  methods: {
    login () {
      if (!this.toRegister && this.valid) {
        console.log(this.user.email)
      } else {
        this.toRegister = false
      }
    },

    register () {
      if (this.toRegister && this.valid) {
        console.log(this.user.fullname)
      } else {
        this.toRegister = true
      }
    },

    loginSuccess () {
      console.log('login success')
      this.$router.push('/')
    }
  },

  mounted () {
    let self = this
    uiConfig.callbacks.signInSuccessWithAuthResult = function (authResult) {
      if (authResult.user) {
        self.loginSuccess()
      }
    }

    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<style>

</style>
