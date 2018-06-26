<template>
  <v-container grid-list-sm>
    <item-group-vertical :items="items"/>
  </v-container>
</template>

<script>
import ItemGroupVertical from '@/components/ItemGroupVertical';
import firebase from '@/helpers/firebase';
import data from '../dummy.json'; // NOTE: remove after not dummy

export default {
  props: [],

  components: {
    ItemGroupVertical
  },

  data () {
    return {
      items: []
    }
  },

  methods: {
    fetchData () {
      this.items = data
    }
  },

  async created () {
    this.fetchData()
    let user = firebase.auth().currentUser
    console.log(user);
  }
}
</script>

<style>

</style>
