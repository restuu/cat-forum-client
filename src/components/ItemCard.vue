<template>
  <v-flex>

    <v-card>

      <v-card-media>
        <div style="max-height: 250px">
          <img :src="item.url" alt="" style="overflow: hidden">
        </div>
      </v-card-media>

      <item-card-actions style="height: 25px"></item-card-actions>

      <v-divider></v-divider>
      
      <v-card-text style="height: 25px" class="py-1">
        <div>
          <span class="grey--text">Chairil Anwar</span>
        </div>
      </v-card-text>
    </v-card>

  </v-flex>
</template>

<script>
import ItemCardActions from './ItemCardActions';

export default {
  props: [ 'item' ],

  components: {
    ItemCardActions
  }
}
</script>

<style>

</style>
