<template>
  <v-container>

    <v-flex xs12>
      <v-card-media 
        src="http://www.wculife.org/wp-content/uploads/2013/12/WCU-WebsiteBanner2-2-Background2.png" 
        height="200px">

      </v-card-media>
    </v-flex>

    <v-container grid-list-xl>

      <v-layout>

        <v-flex xs3 wrap>
          <v-card>
            <v-card-media contain>
              <div>
                <img v-if="user.photoUrl" :src="user.photoUrl" :alt="user.fullname">
                <img v-else src="https://i2.wp.com/www.thisblogrules.com/wp-content/uploads/2010/02/batman-for-facebook.jpg?resize=250%2C280" alt="">
              </div>
            </v-card-media>
            <v-card-title>
              <div>
                <span class="subheading">{{ user.fullname }}</span>
              </div>
            </v-card-title>
          </v-card>
        </v-flex>

        <v-flex xs9>
          <v-card>
            <h1>ini untuk post</h1>
          </v-card>
        </v-flex>

      </v-layout>

    </v-container>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'user'
    ])
  },

  created () {
    if (!this.user.fullname) {
      this.$router.push('/')
    }
  }
}
</script>
