<template>
  <v-container>
    <v-layout column fill-height wrap>
      <v-flex v-for="article in articles" :key="article.id">

        <v-card>
          <article>aaa</article>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import data from '../data.json';

export default {
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
