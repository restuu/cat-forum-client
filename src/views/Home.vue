<template>
  <v-container>

    <search-form
      :categories="['image', 'article']"
    ></search-form>


    <div id="section-image">

      <div class="overlay-item"></div>
      <div class="items">
        <v-container grid-list-sm class="item">
          <item-group-vertical :items="images"></item-group-vertical>
        </v-container>
      </div>

    </div>
    <!-- section-image end -->

    <v-card to="/images" flat color="blue--text">
      <v-card-text>
        <p class="text-xs-right">show more...</p>
      </v-card-text>
    </v-card>

    <div id="section-articles">

      <div class="overlay-item"></div>
      <div class="items">
        <v-container grid-list-sm>
          <item-list :items="articles"/>
        </v-container>
      </div>

    </div>
    <!-- section-articles end -->

    <v-card to="/articles" flat color="blue--text">
      <v-card-text>
        <p class="text-xs-right">show more...</p>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
import data from '../dummy.json'
import articles from '../data.json';
import ItemGroupVertical from '@/components/ItemGroupVertical'
import SearchForm from '@/components/SearchForm'
import firebase from '@/helpers/firebase'
import ItemList from '@/components/ItemList';

export default {
  components: {
    ItemGroupVertical,
    SearchForm,
    ItemList
  },

  data () {
    return {
      images: [],
      articles: []
    }
  },

  methods: {
    fetchData () {
      this.images = data
      this.articles = articles
    }
  },

  created () {
    this.fetchData()
  }
}
</script>

<style scoped>
#section-image {
  position: relative;
  max-height: 500px;
  overflow: hidden;
}

#section-articles {
  position: relative;
  max-height: 500px;
  overflow: hidden;
}

.overlay-item {
  position: absolute;
  height: 30%;
  width: 100%;
  background: red;
  z-index: 9;
  bottom: 0;
  background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
}
.items{
  position: relative;
  z-index: 8;
}
</style>

