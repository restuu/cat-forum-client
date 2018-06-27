<template>
  <div>

    <v-navigation-drawer 
      app
      width="150"
      v-model="drawer"
      style="z-index: 9999 !important"
      >
      <v-divider></v-divider>
      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-toolbar 
      app
      dark
      color="light-blue darken-2"
      style="z-index: 9998 !important"
      >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        Application
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat small :to="`/${personUrl}`" v-if="person">
          <v-icon>person</v-icon>
          {{ person }}
        </v-btn>
        <v-btn flat small :to="{name: 'login'}" v-if="!isLogin">Login</v-btn>
        <v-btn flat small @click="$emit('logout')" v-else>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  props: [ 'isLogin', 'person' ],
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard', to: '/' },
        { title: 'Gallery', icon: 'collections', to: '/images' },
        { title: 'Articles', icon: 'forum', to: '/articles' }
      ],
      drawer: false,
    }
  },

  computed: {
    personUrl () {
      let url = this.person.split(' ').join('-').toLowerCase()
      console.log(url)
      return url
    }
  }
}
</script>

<style>

</style>
