<template>
  <v-form ref="form" v-model="valid">

    <v-text-field
      v-show="toRegister"
      label="Fullname"
      v-model="fullname"
      :rules="nameRules"
      required
      >
    </v-text-field>

    <v-text-field
      label="Email"
      v-model="email"
      :rules="emailRules"
      required
      >
    </v-text-field>

    <v-text-field
      label="Password"
      :type="'password'"
      v-model="password"
      :rules="passRules"
      required
      >
    </v-text-field>

    <v-text-field
      v-show="toRegister"
      label="Confirm Password"
      :type="'password'"
      v-model="confirmPassword"
      :rules="confirmRules"
      required
      >
    </v-text-field>
    
  </v-form>
</template>

<script>
export default {
  props: ['toRegister'],

  data () {
    return {
      confirmPassword: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => /(?=.*[a-z])/.test(v) || 'At least 1 lowercase alphabetical character',
        v => /(?=.*[A-Z])/.test(v) || 'At least 1 uppercase alphabetical character',
        v => /(?=.*[0-9])/.test(v) || 'At least 1 numeric character',
        v => /(?=.{6,})/.test(v) || 'Must be six characters or longer'
      ],
      confirmRules: [
        v => !!v || '',
        v => v === this.password || 'Password do not match'
      ]
    }
  },

  computed: {
    email: {
      get () {
        return this.$store.state.user.email
      },

      set (v) {
        this.$store.commit('setEmail', v)
      }
    },

    password: {
      get () {
        return this.$store.state.user.password
      },

      set (v) {
        this.$store.commit('setPassword', v)
      }
    },

    fullname: {
      get () {
        return this.$store.state.user.fullname
      },

      set (v) {
        this.$store.commit('setFullname', v)
      }
    },

    valid: {
      get () {
        return this.$store.valid
      },

      set (v) {
        this.$store.commit('setValid', v)
      }
    }
  },

  watch: {
    email (v) {
      this.email = v.toLowerCase()
    }
  }
}
</script>

<style>

</style>
