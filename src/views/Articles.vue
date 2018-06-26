<template>
  <v-container>
    <item-list :items="articles"/>
  </v-container>
</template>

<script>
import data from '../data.json'
import ItemList from '@/components/ItemList';

export default {
  components: {
    ItemList
  },

  data () {
    return {
      articles: []
    }
  },

  methods: {
    fetchArticles () {
      this.articles = data
    } 
  },

  async created () {
    await this.fetchArticles()
  }
}
</script>

<style>

</style>
