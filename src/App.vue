<template>
  <v-app>
    <nav-toolbar/>

    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
import NavToolbar from './components/NavToolbar.vue'

export default {
  name: 'App',
  components: {
    NavToolbar
  }
}
</script>